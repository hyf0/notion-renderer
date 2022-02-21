import { TParagraphBlock } from '@notion-renderer/shared'
import React, { FC } from 'react'
import { RichTexts } from '../RichTexts'

export const ParagraphBlock: FC<{ block: TParagraphBlock }> = ({ block }) => {
  // const blockContext = useCo
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <div className="py-[3px] px-[2px] my-[1px]">
      <RichTexts texts={block.paragraph.text} />
    </div>
  )
}
const RichText = () => {
}

// "default"
//  "gray"
//  "brown"
//  "orange"
//  "yellow"
//  "green"
//  "blue"
//  "purple"
//  "pink"
//  "red"
//  "gray_background"
//  "brown_background"
//  "orange_background"
//  "yellow_background"
//  "green_background"
//  "blue_background"
//  "purple_background"
//  "pink_background"
//  "red_background"
