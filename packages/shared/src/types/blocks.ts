import type { Client } from '@notionhq/client'

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
