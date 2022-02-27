import {
  BlockObjectResponse,
  blocks,
  ChildrenByBlockId,
  extractNotionIcon,
  GetPageResponse,
  ImageOrEmoji as TImageOrEmoji,
} from '@notion-renderer/shared'
import { Client } from '@notionhq/client'
import _ from 'lodash-es'
import pLimit from 'p-limit'

export class EnhancedNotionClient {
  limit = pLimit(1000)
  constructor(public raw: Client) {}
  async fetchAllBlocks(blockId: string) {
    let rootBlocksResp = await this.limit(() =>
      this.raw.blocks.children.list({
        block_id: blockId as string,
        page_size: 100,
      })
    )
    const rootBlocks = rootBlocksResp.results as BlockObjectResponse[]
    while (rootBlocksResp.has_more) {
      rootBlocksResp = await this.limit(() =>
        this.raw.blocks.children.list({
          block_id: blockId as string,
          page_size: 100,
          start_cursor: rootBlocksResp.next_cursor!,
        })
      )
      rootBlocks.push(...(rootBlocksResp.results as BlockObjectResponse[]))
    }
    return rootBlocks
  }

  async getChildren(
    blocks: readonly BlockObjectResponse[],
    deep = false,
    includeChildPage = false,
  ) {
    const blocksToFetchChildren = [...blocks]
    const childrenByBlockId: ChildrenByBlockId = {}
    const runningPromises: Promise<void>[] = []
    while (blocksToFetchChildren.length > 0 || runningPromises.length > 0) {
      while (blocksToFetchChildren.length > 0) {
        const block = blocksToFetchChildren.pop()!
        if ('type' in block && block.has_children) {
          const fetchAllBlocksPromise = this.fetchAllBlocks(block.id).then(
            (blocks) => {
              childrenByBlockId[block.id] = blocks
              if (deep) {
                blocksToFetchChildren.push(
                  ...(includeChildPage
                    ? blocks
                    : blocks.filter((b) => b.type !== 'child_page')),
                )
              }
              runningPromises.splice(
                runningPromises.indexOf(fetchAllBlocksPromise),
                1,
              )
              console.log('runningPromises', runningPromises.length)
            },
          )
          runningPromises.push(fetchAllBlocksPromise)
        }
      }
      if (runningPromises.length > 0) {
        await Promise.race(runningPromises)
      }
    }
    return childrenByBlockId
  }

  async getPage(pageId: string) {
    const [rootBlocks, rawPage] = await Promise.all([
      this.fetchAllBlocks(pageId),
      this.raw.pages.retrieve({ page_id: pageId }),
    ])
    const cover = extractCoverUrl(rawPage)
    const icon = extractIcon(rawPage)
    const childrenByBlockId = await this.getChildren(rootBlocks, true)
    return {
      title: 'properties' in rawPage && rawPage.properties.title?.type === 'title'
        ? rawPage.properties.title.title[0].plain_text
        : null,
      cover,
      icon,
      childrenByBlockId,
      rawPage,
      rootBlocks,
    }
  }

  async getAllPageBlocks(pageId: string): Promise<blocks.ChildPageBlock[]> {
    const rootBlock = (await this.raw.blocks.retrieve({
      block_id: pageId,
    })) as BlockObjectResponse

    const childrenByBlockId = await this.getChildren([rootBlock], true, true)
    const childPageBlocks = _.uniqBy(
      Object.values(childrenByBlockId)
        .flat()
        .concat(rootBlock)
        .filter((b): b is blocks.ChildPageBlock => b.type === 'child_page'),
      (b) => b.id,
    )
    return childPageBlocks
  }
}

const extractCoverUrl = (page: GetPageResponse) => {
  if ('cover' in page) {
    if (page.cover?.type === 'external') {
      return page.cover.external.url
    } else if (page.cover?.type === 'file') {
      return page.cover.file.url
    }
  }

  return null
}

const extractIcon = (page: GetPageResponse): TImageOrEmoji | null => {
  if ('icon' in page) {
    return extractNotionIcon(page.icon)
  }
  return null
}
