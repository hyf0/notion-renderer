import { blocks as blockTypes } from '@notion-renderer/shared'
import React, { FC, useContext } from 'react'
import { rendererContext } from '../NotionBlocksRenderer'
import { RichTexts } from '../RichTexts'

export const BulletedList: FC<{ items: blockTypes.BulletedListItemBlock[] }> = ({ items }) => {
  const { childrenByBlockId, BlocksRenderer } = useContext(rendererContext)
  return (
    <ul>
      {items.map(block => {
        const children = childrenByBlockId[block.id]
        return (
          <React.Fragment key={block.id}>
            <li className="my-[3px] mx-[2px] leading-[24px]">
              <RichTexts texts={block.bulleted_list_item.rich_text} />
            </li>
            {children && <BlocksRenderer blocks={children} />}
          </React.Fragment>
        )
      })}
    </ul>
  )
}
