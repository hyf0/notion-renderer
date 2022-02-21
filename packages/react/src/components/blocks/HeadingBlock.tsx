import { THeadingBlock } from '@notion-renderer/shared'
import React, { FC } from 'react'
import { RichTexts } from '../RichTexts'

export const HeadingBlock: FC<{ block: THeadingBlock }> = ({ block }) => {
  if (block.type === 'heading_1') {
    return (
      <div className="text-3xl py-[3px] px-[2px] mt-[32px] mb-[4px]">
        <RichTexts texts={block.heading_1.text} />
      </div>
    )
  } else if (block.type === 'heading_2') {
    return (
      <div className="text-2xl py-[3px] px-[2px] mt-[32px] mb-[4px]">
        <RichTexts texts={block.heading_2.text} />
      </div>
    )
  } else if (block.type === 'heading_3') {
    return (
      <div className="text-xl py-[3px] px-[2px] mt-[32px] mb-[4px]">
        <RichTexts texts={block.heading_3.text} />
      </div>
    )
  }
  return null
}
