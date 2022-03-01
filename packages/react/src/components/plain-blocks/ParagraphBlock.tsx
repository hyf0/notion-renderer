import React, { FC } from 'react'
import { components } from '../../types'
import { RichTexts } from '../RichTexts'

export const ParagraphBlock: components.ParagraphBlock = ({ block }) => {
  return (
    <div className="py-[3px] px-[2px]">
      <RichTexts texts={block.paragraph.rich_text} />
    </div>
  )
}
