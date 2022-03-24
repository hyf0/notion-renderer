import React, { FC } from 'react'
import { components } from '../../types'
import { RichTexts } from '../RichTexts'

export const ParagraphBlock: components.ParagraphBlock = ({ block }) => {
  return <RichTexts className="py-[3px] px-[2px]" texts={block.paragraph.rich_text} />
}
