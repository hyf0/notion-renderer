import { TToggleBlock } from '@notion-renderer/shared'
import React, { FC, useCallback, useContext, useState } from 'react'
import { ToggleSignIcon } from '../icon/ToggleSignIcon'
import { NotionBlocks } from '../NotionBlocks'
import { notionPageContext } from '../NotionPage'
import { RichTexts } from '../RichTexts'

export const ToggleBlock: FC<{ block: TToggleBlock }> = ({ block }) => {
  const { childrenByBlockId } = useContext(notionPageContext)
  const children = childrenByBlockId[block.id]!
  const [isExpanded, setIsExpanded] = useState(false)
  const toggle = useCallback(() => setIsExpanded((prev) => !prev), [])
  return (
    <div className="flex items-center">
      <div
        onClick={toggle}
        className={`mr-[4px] w-[24px] h-[22px] flex items-center justify-center cursor-pointer self-start hover:bg-slate-700/[0.07] active:bg-slate-700/[0.16] rounded-[3px]`}
      >
        <div className={`transition-transform rotate-90 ${isExpanded ? 'rotate-180' : ''}`}>
          <ToggleSignIcon />
        </div>
      </div>
      <div>
        <RichTexts texts={block.toggle.text} />
        {isExpanded && <NotionBlocks blocks={children} />}
      </div>
    </div>
  )
}
