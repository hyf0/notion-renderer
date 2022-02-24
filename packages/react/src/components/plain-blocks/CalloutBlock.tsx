import { extractNotionIcon } from '@notion-renderer/shared'
import React from 'react'
import { components } from '../../types'
import { RichTexts } from '../RichTexts'

export const CalloutBlock: components.CalloutBlock = ({ block }) => {
  const icon = extractNotionIcon(block.callout.icon)

  return (
    <div className="px-[12px] py-[16px] rounded-[3px] bg-[#f1f1ef] overflow-auto">
      {icon?.type === 'emoji' && icon.payload}
      <span className="ml-2">{<RichTexts texts={block.callout.text} />}</span>
    </div>
  )
}
