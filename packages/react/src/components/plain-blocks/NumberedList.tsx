import { blocks as blockTypes } from '@notion-renderer/shared'
import React, { FC, useContext } from 'react'
import { rendererContext } from '../NotionBlocksRenderer'
import { RichTexts } from '../RichTexts'

export const NumberedList: FC<{ items: blockTypes.NumberedListItemBlock[] }> = ({ items }) => {
  const { childrenByBlockId, BlocksRenderer } = useContext(rendererContext)
  return (
    <ol>
      {items.map(block => {
        const children = childrenByBlockId[block.id]
        return (
          <React.Fragment key={block.id}>
            <li className="my-[3px] mx-[2px] leading-[24px]">
              <RichTexts texts={block.numbered_list_item.rich_text} />
            </li>
            {children && <BlocksRenderer blocks={children} />}
          </React.Fragment>
        )
      })}
    </ol>
  )
}
