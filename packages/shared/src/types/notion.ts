import type { Client } from '@notionhq/client'
import { TCalloutBlock, TParagraphBlock } from './blocks'

export type TRichTextItem = TParagraphBlock['paragraph']['text'][number]
export type TNotionIcon = TCalloutBlock['callout']['icon']

export type TBlockObjectResponse = Extract<
  Awaited<ReturnType<Client['blocks']['children']['list']>>['results'][number],
  { type: any }
>

export type TChildrenByBlockId = { [id: string]: TBlockObjectResponse[] }

export type TImageOrEmoji = { type: 'emoji'; payload: string } | { type: 'image'; payload: string }
