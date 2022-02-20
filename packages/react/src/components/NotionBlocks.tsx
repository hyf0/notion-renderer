import { TBlockObjectResponse } from '@notion-renderer/shared'
import React, { FC } from 'react'
import { ImageBlock } from '..'
import { ColumnListBlock } from './blocks/ColumnListBlock'
import { ParagraphBlock } from './blocks/ParagraphBlock'

export const NotionBlocks: FC<
  { blocks: TBlockObjectResponse[] }
> = (
  { blocks },
) => {
  const rendererBlocks = blocks.map(block => {
    return (
      <div key={block.id} className=" mt-4">
        {function() {
          switch (block.type) {
            case 'image': {
              return <ImageBlock key={block.id} info={block} />
            }
            case 'column_list': {
              return <ColumnListBlock key={block.id} block={block} />
            }
            case 'paragraph': {
              return <ParagraphBlock key={block.id} block={block} />
            }
            default: {
              return null
            }
          }
        }()}
      </div>
    )
  })
  return <>{rendererBlocks}</>
}
