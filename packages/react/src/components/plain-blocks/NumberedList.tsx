import { blocks as blockTypes } from '@notion-renderer/shared'
import React, { FC, useContext } from 'react'
import { rendererContext } from '../NotionBlocksRenderer'
import { RichTexts } from '../RichTexts'

export const NumberedList: FC<{ items: blockTypes.NumberedListItemBlock[] }> = ({ items }) => {
  const { childrenByBlockId, BlocksRenderer } = useContext(rendererContext)
  return (
    <>
      {items.map((block, idx) => {
        const children = childrenByBlockId[block.id]
        return (
          <div key={block.id} className="flex">
            <div className="my-[3px] mx-[2px] w-[24px] flex justify-center">{idx + 1}.</div>
            <div className="flex-1">
              <RichTexts className="my-[3px] mx-[2px] leading-[24px]" texts={block.numbered_list_item.rich_text} />
              {children && <BlocksRenderer blocks={children} />}
            </div>
          </div>
        )
      })}
    </>
  )
}
