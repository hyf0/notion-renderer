import React, { FC } from 'react'
import { components } from '../../types'
import { RichTexts } from '../RichTexts'

export const HeadingBlock: components.HeadingBlock = ({ block }) => {
  if (block.type === 'heading_1') {
    return (
      <div className="text-3xl py-[3px] px-[2px] mt-[32px] mb-[4px]">
        <RichTexts texts={block.heading_1.rich_text} />
      </div>
    )
  } else if (block.type === 'heading_2') {
    return (
      <div className="text-2xl py-[3px] px-[2px] mt-[32px] mb-[4px]">
        <RichTexts texts={block.heading_2.rich_text} />
      </div>
    )
  } else if (block.type === 'heading_3') {
    return (
      <div className="text-xl py-[3px] px-[2px] mt-[32px] mb-[4px]">
        <RichTexts texts={block.heading_3.rich_text} />
      </div>
    )
  }
  return null
}
