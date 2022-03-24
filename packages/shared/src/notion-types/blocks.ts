import type { Client } from '@notionhq/client'

export type ImageBlock = Extract<
  Awaited<ReturnType<Client['blocks']['retrieve']>>,
  { type: 'image' }
>
export type ColumnListBlock = Extract<
  Awaited<ReturnType<Client['blocks']['retrieve']>>,
  { type: 'column_list' }
>
export type ColumnBlock = Extract<
  Awaited<ReturnType<Client['blocks']['retrieve']>>,
  { type: 'column' }
>
export type ParagraphBlock = Extract<
  Awaited<ReturnType<Client['blocks']['retrieve']>>,
  { type: 'paragraph' }
>
export type CalloutBlock = Extract<
  Awaited<ReturnType<Client['blocks']['retrieve']>>,
  { type: 'callout' }
>
export type QuoteBlock = Extract<
  Awaited<ReturnType<Client['blocks']['retrieve']>>,
  { type: 'quote' }
>
export type HeadingBlockLevel1 = Extract<
  Awaited<ReturnType<Client['blocks']['retrieve']>>,
  { type: 'heading_1' }
>
export type HeadingBlockLevel2 = Extract<
  Awaited<ReturnType<Client['blocks']['retrieve']>>,
  { type: 'heading_2' }
>
export type HeadingBlockLevel3 = Extract<
  Awaited<ReturnType<Client['blocks']['retrieve']>>,
  { type: 'heading_3' }
>
export type ChildPageBlock = Extract<
  Awaited<ReturnType<Client['blocks']['retrieve']>>,
  { type: 'child_page' }
>
export type ToggleBlock = Extract<
  Awaited<ReturnType<Client['blocks']['retrieve']>>,
  { type: 'toggle' }
>

export type BulletedListItemBlock = Extract<
  Awaited<ReturnType<Client['blocks']['retrieve']>>,
  { type: 'bulleted_list_item' }
>

export type NumberedListItemBlock = Extract<
  Awaited<ReturnType<Client['blocks']['retrieve']>>,
  { type: 'numbered_list_item' }
>

export type CodeBlock = Extract<
  Awaited<ReturnType<Client['blocks']['retrieve']>>,
  { type: 'code' }
>

export type LinkPreviewBlock = Extract<
  Awaited<ReturnType<Client['blocks']['retrieve']>>,
  { type: 'link_preview' }
>

export type TableOfContentsBlock = Extract<
  Awaited<ReturnType<Client['blocks']['retrieve']>>,
  { type: 'table_of_contents' }
>

export type Block = Extract<
  Awaited<ReturnType<Client['blocks']['retrieve']>>,
  { type: any }
>

export type HeadingBlock =
  | HeadingBlockLevel1
  | HeadingBlockLevel2
  | HeadingBlockLevel3
