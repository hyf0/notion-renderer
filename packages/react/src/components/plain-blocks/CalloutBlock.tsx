import { extractNotionIcon } from '@notion-renderer/shared'
import React from 'react'
import { components } from '../../types'
import { RichTexts } from '../RichTexts'

export const CalloutBlock: components.CalloutBlock = ({ block }) => {
  const icon = extractNotionIcon(block.callout.icon)
  const iconElm = (function() {
    if (icon?.type === 'emoji') {
      return icon.payload
    } else if (icon?.type === 'image') {
      return <img className="w-[21px] h-[21px] block" src={icon.payload} />
    }
    return null
  }())
  return (
    <div className="flex px-[12px] py-[16px] rounded-[3px] bg-[#f1f1ef] overflow-auto">
      <div className="self-start h-[24px] w-[24px] flex justify-center items-center mr-[8px]">{iconElm}</div>
      <div>{<RichTexts texts={block.callout.text} />}</div>
    </div>
  )
}
