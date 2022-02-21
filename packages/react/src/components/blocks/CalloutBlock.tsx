import { extractNotionIcon, TCalloutBlock, TImageOrEmoji } from '@notion-renderer/shared'
import React, { FC } from 'react'
import { RichTexts } from '../RichTexts'

export const CalloutBlock: FC<{ block: TCalloutBlock }> = ({ block }) => {
  const icon = extractNotionIcon(block.callout.icon)

  return (
    <div className="px-[12px] my-[4px] py-[16px] rounded-[3px] bg-[#f1f1ef] overflow-auto">
      {icon?.type === 'emoji' && icon.payload}
      <span className="ml-2">
        {<RichTexts texts={block.callout.text} />}
      </span>
    </div>
  )
}

export const PageIcon: FC<{ icon: TImageOrEmoji }> = ({ icon }) => {
  let iconElm: any
  if (icon.type === 'emoji') {
    iconElm = <span>{icon.payload}</span>
  } else if (icon.type === 'image') {
  }
  return (
    iconElm
  )
}
