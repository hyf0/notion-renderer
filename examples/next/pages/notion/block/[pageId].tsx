import { defineGetServerSideProps, ExtractServerSideProps } from '@/libs/typing-next'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import config from '@/knots.config'
import { Client } from '@notionhq/client'

export const getServerSideProps = defineGetServerSideProps(async (ctx) => {
  const notion = new Client({
    auth: config.notionToken,
  })
  
  const pageId = ctx.params?.pageId ?? ''
  const self = await notion.blocks.retrieve({ block_id: pageId as string});

  const pageResp = await notion.blocks.children.list({ block_id: pageId as string, page_size: 50 });
  // const richText = marked.parse(markdown);

  // const markdown =
  console.log('pageResp', pageResp)
  return {
    props: {
      a: 1,
      pageResp,
      self,
    },
  }
})

type ServerSideProps = ExtractServerSideProps<typeof getServerSideProps>

const BlogPost: NextPage<ServerSideProps> = ({ pageResp, self }) => {
  
  useEffect(() => {
    console.log('self', self)
    console.log('children', pageResp)
  }, [pageResp, self])

  return <div>
 
    </div>
}

export default BlogPost
