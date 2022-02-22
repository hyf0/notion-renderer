import { extractNotionIcon, TBlockObjectResponse } from '@notion-renderer/shared'
import React, { FC } from 'react'
import { ImageBlock } from '..'
import { CalloutBlock } from './blocks/CalloutBlock'
import { CodeBlock } from './blocks/CodeBlock'
import { ColumnListBlock } from './blocks/ColumnListBlock'
import { HeadingBlock } from './blocks/HeadingBlock'
import { ParagraphBlock } from './blocks/ParagraphBlock'
import { QuoteBlock } from './blocks/QuoteBlock'
import { ToggleBlock } from './blocks/ToggleBlock'
import { DefaultChildPageIcon } from './icon/DefaultChildPageIcon'
import { RichTexts } from './RichTexts'

export const NotionBlocks: FC<{ blocks: TBlockObjectResponse[] }> = ({
  blocks,
}) => {
  const rendererBlocks = blocks.map((block) => {
    return (
      <div key={block.id} className="">
        {(function() {
          // console.log('render', block)
          switch (block.type) {
            case 'image': {
              return <ImageBlock key={block.id} info={block} />
            }
            case 'column_list': {
              return <ColumnListBlock key={block.id} block={block} />
            }
            case 'paragraph': {
              return <ParagraphBlock key={block.id} block={block} />
            }
            case 'quote': {
              return <QuoteBlock key={block.id} block={block} />
            }
            case 'callout': {
              return <CalloutBlock key={block.id} block={block} />
            }
            case 'heading_1':
            case 'heading_2':
            case 'heading_3': {
              return <HeadingBlock key={block.id} block={block} />
            }
            case 'child_page': {
              return (
                <a href={`./${block.id}`}>
                  <div className="py-[3px] px-[2px] items-center cursor-pointer hover:bg-slate-700/[.07] flex">
                    <div className="h-[24px] w-[24px] flex items-center justify-center mr-[4px] text-[20px]">
                      <DefaultChildPageIcon />
                    </div>
                    <div className="border-b border-b-[rgba(55, 53, 47, 0.16)] font-[500] text-[16px] whitespace-nowrap overflow-hidden text-ellipsis">
                      {block.child_page.title}
                    </div>
                  </div>
                </a>
              )
            }
            case 'divider': {
              return <div className="border-b botder-b-[rgba(55, 53, 47, 0.09)]"></div>
            }
            case 'toggle': {
              return <ToggleBlock key={block.id} block={block} />
            }
            case 'bookmark': {
              return (
                <a href={block.bookmark.url} target="_blank">
                  <div className=" rounded-[3px] border p-[8px] hover:bg-slate-700/[.08] active:bg-slate-700/[.16]">
                    {block.bookmark.url}
                  </div>
                </a>
              )
            }
            case 'code': {
              return <CodeBlock language={block.code.language} code={block.code.text[0].plain_text} />
            }
            default: {
              return null
            }
          }
        })()}
      </div>
    )
  })
  return <>{rendererBlocks}</>
}
