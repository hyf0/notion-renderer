import { ImageOrEmoji as TImageOrEmoji } from '@notion-renderer/shared'
import React, { FC } from 'react'

export const PageIcon: FC<{ icon: TImageOrEmoji }> = ({ icon }) => {
  let iconElm: any
  if (icon.type === 'emoji') {
    iconElm = <span className=" text-[78px]">{icon.payload}</span>
  } else if (icon.type === 'image') {
  }
  return (
    <div className="flex self-start items-center h-[78px] w-[78px] mt-[-39px] hover:bg-slate-500/[.08] cursor-default rounded">
      {iconElm}
    </div>
  )
}
