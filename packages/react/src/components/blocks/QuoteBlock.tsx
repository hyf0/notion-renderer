import { TQuoteBlock } from '@notion-renderer/shared'
import React, { FC } from 'react'
export const QuoteBlock: FC<{ block: TQuoteBlock }> = ({ block }) => {
  return <div className="px-4 border-l-4 border-black">{block.quote.text[0].plain_text}</div>
}
