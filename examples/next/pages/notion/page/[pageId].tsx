import { NotionPage } from '@/components/notion'
import { PageCover } from '@/components/notion/components/blocks/PageCover'
import config from '@/knots.config'
import { EnhancedNotionClient } from '@/libs/enhanced-notion-client'
import { defineGetServerSideProps, ExtractServerSideProps } from '@/libs/typing-next'
import { TBlockObjectResponse } from '@/types/notion'
import { Client } from '@notionhq/client'
import { NextPage } from 'next'
import { createContext, FC, useContext, useEffect } from 'react'

const notion = new EnhancedNotionClient(
  new Client({
    auth: config.notionToken,
  }),
)

export const getServerSideProps = defineGetServerSideProps(async (ctx) => {
  const pageId = ctx.params?.pageId ?? ''

  const pageResp = await notion.raw.pages.retrieve({ page_id: pageId as string })
  const rootBlocks = await notion.fetchAllBlocks(pageId as string)
  const blockToChildren = await notion.getChildren(rootBlocks, true)

  return {
    props: {
      pageResp,
      rootBlocks,
      blockToChildren,
    },
  }
})

type ServerSideProps = ExtractServerSideProps<typeof getServerSideProps>

const BlogPost: NextPage<ServerSideProps> = ({ pageResp, rootBlocks, blockToChildren }) => {
  useEffect(() => {
    console.log('blockToChildren', blockToChildren, 'rootBlocks', rootBlocks)
  }, [blockToChildren])
  return (
    <div>
      {'cover' in pageResp && <PageCover cover={pageResp.cover} />}
      <NotionPage blocks={rootBlocks} childrenByBlockId={blockToChildren} />
    </div>
  )
}

export default BlogPost
