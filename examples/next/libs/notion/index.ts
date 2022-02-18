import config from '@/knots.config'
import { Client } from '@notionhq/client/build/src'

const notion = new Client({
  auth: config.notionToken,
})

export default notion
