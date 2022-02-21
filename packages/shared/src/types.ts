import type { Client } from '@notionhq/client'

// export type TPageCover = Extract<Awaited<ReturnType<Client['pages']['retrieve']>>, { cover: any }>['cover']

export type TImageBlock = Extract<Awaited<ReturnType<Client['blocks']['retrieve']>>, { type: 'image' }>
export type TColumnListBlock = Extract<Awaited<ReturnType<Client['blocks']['retrieve']>>, { type: 'column_list' }>
export type TColumnBlock = Extract<Awaited<ReturnType<Client['blocks']['retrieve']>>, { type: 'column' }>
export type TParagraphBlock = Extract<Awaited<ReturnType<Client['blocks']['retrieve']>>, { type: 'paragraph' }>
export type TCalloutBlock = Extract<Awaited<ReturnType<Client['blocks']['retrieve']>>, { type: 'callout' }>
export type TQuoteBlock = Extract<Awaited<ReturnType<Client['blocks']['retrieve']>>, { type: 'quote' }>
export type THeadingBlockLevel1 = Extract<Awaited<ReturnType<Client['blocks']['retrieve']>>, { type: 'heading_1' }>
export type THeadingBlockLevel2 = Extract<Awaited<ReturnType<Client['blocks']['retrieve']>>, { type: 'heading_2' }>
export type THeadingBlockLevel3 = Extract<Awaited<ReturnType<Client['blocks']['retrieve']>>, { type: 'heading_3' }>
export type TChildPageBlock = Extract<Awaited<ReturnType<Client['blocks']['retrieve']>>, { type: 'child_page' }>
export type TToggleBlock = Extract<Awaited<ReturnType<Client['blocks']['retrieve']>>, { type: 'toggle' }>
export type THeadingBlock = THeadingBlockLevel1 | THeadingBlockLevel2 | THeadingBlockLevel3
export type TRichTextItem = TParagraphBlock['paragraph']['text'][number]
export type TNotionIcon = TCalloutBlock['callout']['icon']

export type TBlockObjectResponse = Extract<
  Awaited<ReturnType<Client['blocks']['children']['list']>>['results'][number],
  { type: any }
>

export type TChildrenByBlockId = { [id: string]: TBlockObjectResponse[] }

// Clinet types

export type GetPageResponse = Awaited<ReturnType<Client['pages']['retrieve']>>

// helper types

/** @deprecated */
export type TPageIcon = TImageOrEmoji
export type TImageOrEmoji = { type: 'emoji'; payload: string } | { type: 'image'; payload: string }
