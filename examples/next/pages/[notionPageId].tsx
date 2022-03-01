import { defGetServerSideProps, ExtractServerSideProps } from '@/libs/typing-next'
import { EnhancedNotionClient } from '@notion-renderer/client'
import { NotionPage } from '@notion-renderer/react'
// import { NotionPage } from '@/components/components/NotionPage'
import { Client } from '@notionhq/client'
import { NextPage } from 'next'
import { useEffect } from 'react'

const notion = new EnhancedNotionClient(
  new Client({
    notionVersion: '2022-02-22',
    auth: process.env.NOTION_TOKEN!,
  }),
)

export const { getServerSideProps } = defGetServerSideProps()(async (ctx) => {
  ctx.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  )
  const pageId = ctx.params?.notionPageId ?? ''
  const page = await notion.getPage(pageId as string)

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
      <NotionPage
        cover={page.cover ?? undefined}
        icon={page.icon ?? undefined}
        blocks={page.rootBlocks}
        fullWidth={false}
        title={page.title ?? undefined}
        childrenByBlockId={page.childrenByBlockId}
      />
    </div>
  )
}

export default BlogPost
