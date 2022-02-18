import { TChildrenByBlockId } from '@/components/notion'
import { TBlockObjectResponse } from '@/types/notion'
import { Client } from '@notionhq/client/build/src'

export class EnhancedNotionClient {
  constructor(public raw: Client) {}
  async fetchAllBlocks(blockId: string) {
    let rootBlocksResp = await this.raw.blocks.children.list({
      block_id: blockId as string,
      page_size: 100,
    })
    const rootBlocks = rootBlocksResp.results as TBlockObjectResponse[]
    while (rootBlocksResp.has_more) {
      rootBlocksResp = await this.raw.blocks.children.list({
        block_id: blockId as string,
        page_size: 100,
        start_cursor: rootBlocksResp.next_cursor!,
      })
      rootBlocks.push(...(rootBlocksResp.results as TBlockObjectResponse[]))
    }
    return rootBlocks
  }

  async getChildren(blocks: readonly TBlockObjectResponse[], deep = false) {
    const blocksToFetchChildren = [...blocks]
    const childrenByBlockId: TChildrenByBlockId = {}
    const runningPromises: Promise<void>[] = []
    while (blocksToFetchChildren.length > 0 || runningPromises.length > 0) {
      while (blocksToFetchChildren.length > 0) {
        const block = blocksToFetchChildren.pop()!
        if ('type' in block && block.has_children) {
          const fetchAllBlocksPromise = this.fetchAllBlocks(block.id).then(
            (blocks) => {
              childrenByBlockId[block.id] = blocks
              if (deep) {
                blocksToFetchChildren.push(...blocks)
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
}
