import { Client } from '@notionhq/client'

export type TPageCover = Extract<Awaited<ReturnType<Client['pages']['retrieve']>>, { cover: any }>['cover']

export type TImageBlock = Extract<Awaited<ReturnType<Client['blocks']['retrieve']>>, { type: 'image' }>
export type TColumnListBlock = Extract<Awaited<ReturnType<Client['blocks']['retrieve']>>, { type: 'column_list' }>
export type TColumnBlock = Extract<Awaited<ReturnType<Client['blocks']['retrieve']>>, { type: 'column' }>
export type TParagraphBlock = Extract<Awaited<ReturnType<Client['blocks']['retrieve']>>, { type: 'paragraph' }>
export type TCalloutBlock = Extract<Awaited<ReturnType<Client['blocks']['retrieve']>>, { type: 'callout' }>
// export type ImageBlock = Extract<Awaited<ReturnType<Client['blocks']['retrieve']>>, { type: 'image' }>

export type TBlockObjectResponse = Extract<
  Awaited<ReturnType<Client['blocks']['children']['list']>>['results'][number],
  { type: any }
>

export type TChildrenByBlockId = { [id: string]: TBlockObjectResponse[] }
