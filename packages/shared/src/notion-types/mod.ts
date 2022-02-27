import type { Client } from '@notionhq/client'
import * as blocks from './blocks'
// export * from './blocks'
export { blocks }

export type RichTextItem = blocks.ParagraphBlock['paragraph']['text'][number]
export type NotionIcon = blocks.CalloutBlock['callout']['icon']

export type BlockObjectResponse = Extract<
  Awaited<ReturnType<Client['blocks']['children']['list']>>['results'][number],
  { type: any }
>

export type ChildrenByBlockId = { [id: string]: BlockObjectResponse[] }

export type ImageOrEmoji =
  | { type: 'emoji'; payload: string }
  | { type: 'image'; payload: string }

export type GetPageResponse = Awaited<ReturnType<Client['pages']['retrieve']>>
