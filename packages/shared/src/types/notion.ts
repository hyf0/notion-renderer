import type { Client } from '@notionhq/client'
import * as blockTypes from './blocks'
export { blockTypes }

export type RichTextItem = blockTypes.ParagraphBlock['paragraph']['text'][number]
export type TNotionIcon = blockTypes.CalloutBlock['callout']['icon']

export type BlockObjectResponse = Extract<
  Awaited<ReturnType<Client['blocks']['children']['list']>>['results'][number],
  { type: any }
>

export type ChildrenByBlockId = { [id: string]: BlockObjectResponse[] }

export type TImageOrEmoji =
  | { type: 'emoji'; payload: string }
  | { type: 'image'; payload: string }

export type GetPageResponse = Awaited<ReturnType<Client['pages']['retrieve']>>
