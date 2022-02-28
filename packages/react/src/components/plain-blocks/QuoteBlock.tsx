import React, { FC } from 'react'
import { components } from '../../types'
export const QuoteBlock: components.QuoteBlock = ({ block }) => {
  return (
    <div className="px-4 border-l-4 border-black">
      {block.quote.rich_text[0]?.plain_text}
    </div>
  )
}
