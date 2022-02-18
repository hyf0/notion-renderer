import { KnotsConfig } from './types'

const config: KnotsConfig = {
  notionPageId: process.env.NOTION_PAGE_ID!,
  notionToken: process.env.NOTION_TOKEN!,
}

export default config
