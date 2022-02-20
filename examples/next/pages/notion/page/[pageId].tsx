import { NotionPage } from '@notion-renderer/react'
import { EnhancedNotionClient } from '@notion-renderer/client'
import { defineGetServerSideProps, ExtractServerSideProps } from '@/libs/typing-next'
import { Client } from '@notionhq/client'
import { NextPage } from 'next'
import { useEffect } from 'react'

const notion = new EnhancedNotionClient(
  new Client({
    auth: process.env.NOTION_TOKEN!,
  }),
) 

export const getServerSideProps = defineGetServerSideProps(async (ctx) => {
  const pageId = ctx.params?.pageId ?? ''
  const page = await notion.getPage(pageId as string);

  return {
    props: {
      page,
    },
  }
})

type ServerSideProps = ExtractServerSideProps<typeof getServerSideProps>

const BlogPost: NextPage<ServerSideProps> = ({ page }) => {
  useEffect(() => {
    console.log(page)
  }, [page])
  return (
    <div>
      <NotionPage cover={page.cover} icon={page.icon} blocks={page.rootBlocks} childrenByBlockId={page.childrenByBlockId} />
    </div>
  )
}

export default BlogPost
