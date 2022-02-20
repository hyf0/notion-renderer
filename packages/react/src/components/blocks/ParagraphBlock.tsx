import { TParagraphBlock } from '@notion-renderer/shared'
import React, { FC } from 'react'

export const ParagraphBlock: FC<{ block: TParagraphBlock }> = ({ block }) => {
  // const blockContext = useCo
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <div>
      {block.paragraph.text.map((richText, idx) => {
        if (richText.type === 'text') {
          const color = richText.annotations.color
          return (
            <span
              className={`${
                richText.annotations.bold
                  ? 'font-bold'
                  : ''
              } ${
                color === 'default'
                  ? 'text-black'
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
                  : ''
              } ${
                color === 'gray_background'
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
              }`}
              key={idx}
            >
              {richText.text.content}
            </span>
          )
        }
        return null
      })}
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
