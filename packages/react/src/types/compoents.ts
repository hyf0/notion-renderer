import { blocks as blockTypes } from '@notion-renderer/shared'
import { ComponentProps, FC } from 'react'

export type CalloutBlock = FC<{ block: blockTypes.CalloutBlock }>
export type CalloutBlockProps = ComponentProps<CalloutBlock>

// export type CodeBlock = FC<{ block: blockTypes.code }>
// export type CalloutBlockProps = ComponentProps<CalloutBlock>;

export type ColumnListBlock = FC<{ block: blockTypes.ColumnListBlock }>
export type ColumnListProps = ComponentProps<ColumnListBlock>

export type HeadingBlock = FC<{ block: blockTypes.HeadingBlock }>

export type ParagraphBlock = FC<{ block: blockTypes.ParagraphBlock }>

export type QuoteBlock = FC<{ block: blockTypes.QuoteBlock }>

export type ToggleBlock = FC<{ block: blockTypes.ToggleBlock }>

export type ImageBlock = FC<{ block: blockTypes.ImageBlock }>

export type TableOfContentsBlock = FC<{
  block: blockTypes.TableOfContentsBlock
}>
