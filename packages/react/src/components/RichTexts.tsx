import { RichTextItem } from '@notion-renderer/shared'
import React, { FC } from 'react'

export const RichTexts: FC<{ texts: RichTextItem[] }> = ({ texts }) => {
  return (
    <>
      {texts.map((text, idx) => <RichText key={idx} text={text} />)}
    </>
  )
}

const RichText: FC<{ text: RichTextItem }> = ({ text }) => {
  const colorCls = extractTextColor(text)
  const linkCls = extractLinkCls(text)
  if (text.type === 'text') {
    const anno = text.annotations
    const textEl = (
      <span
        className={[
          colorCls,
          linkCls,
          anno.bold && 'font-bold',
          anno.italic && 'italic',
          anno.underline && 'underline',
          anno.code && 'text-[#EB5757] bg-[rgba(135,131,120,0.15)] rounded-[3px] text-sm py-0.5 px-1',
        ]
          .filter(Boolean).join(' ')}
      >
        {text.text.content}
      </span>
    )
    if (text.text.link) {
      return <a target="_blank" href={text.text.link.url}>{textEl}</a>
    } else {
      return textEl
    }
  }
  return null
}

const extractLinkCls = (text: RichTextItem) => {
  if (text.type === 'text' && text.text.link != null) {
    return 'cursor-pointer underline opacity-70'
  }
  return ''
}

const extractTextColor = (text: RichTextItem) => {
  const color = text.annotations.color

  const cls = color === 'default'
    ? ''
    : color === 'gray'
    ? 'text-gray-400'
    : color === 'orange'
    ? 'text-orange-400'
    : color === 'yellow'
    ? 'text-yellow-400'
    : color === 'green'
    ? 'text-green-400'
    : color === 'blue'
    ? 'text-blue-400'
    : color === 'purple'
    ? 'text-purple-400'
    : color === 'pink'
    ? 'text-pink-400'
    : color === 'red'
    ? 'text-red-400'
    : color === 'gray_background'
    ? 'bg-gray-400'
    : color === 'orange_background'
    ? 'bg-orange-400'
    : color === 'yellow_background'
    ? 'bg-yellow-400'
    : color === 'green_background'
    ? 'bg-green-400'
    : color === 'blue_background'
    ? 'bg-blue-400'
    : color === 'purple_background'
    ? 'bg-purple-400'
    : color === 'pink_background'
    ? 'bg-pink-400'
    : color === 'red_background'
    ? 'bg-red-400'
    : ''
  return cls
}
