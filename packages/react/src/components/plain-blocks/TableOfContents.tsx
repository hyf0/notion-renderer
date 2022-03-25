import { blocks as blockTypes, RichTextItem } from '@notion-renderer/shared'
import clsx from 'clsx'
import React, { FC, useContext, useMemo } from 'react'
import { components } from '../../types'
import { rendererContext } from '../NotionBlocksRenderer'
import { RichTexts } from '../RichTexts'

export const TableOfContentsBlock: components.TableOfContentsBlock = ({ block }) => {
  const { childrenByBlockId, rootBlocks } = useContext(rendererContext)
  const titles = useMemo(() => {
    const headings: blockTypes.HeadingBlock[] = []
    const tobeProcessed = [...rootBlocks].reverse()
    while (tobeProcessed.length > 0) {
      const block = tobeProcessed.pop()!
      switch (block.type) {
        case 'heading_1':
        case 'heading_2':
        case 'heading_3': {
          headings.push(block)
          break
        }
        case 'child_page': {
          // We don't care heading of child page
          break
        }
        default: {
          const children = childrenByBlockId[block.id]
          if (children) {
            tobeProcessed.push(...[...children].reverse())
          }
        }
      }
    }
    return headings
  }, [childrenByBlockId, rootBlocks])
  return (
    <>
      {titles.map((heading, idx) => {
        switch (heading.type) {
          case 'heading_1': {
            return <TOCLink key={heading.id} id={heading.id} texts={heading.heading_1.rich_text} />
          }
          case 'heading_2': {
            return (
              <TOCLink className="ml-[24px]" key={heading.id} id={heading.id} texts={heading.heading_2.rich_text} />
            )
          }
          case 'heading_3': {
            return (
              <TOCLink className="ml-[48px]" key={heading.id} id={heading.id} texts={heading.heading_3.rich_text} />
            )
          }
        }
      })}
    </>
  )
}

const TOCLink: FC<{ texts: RichTextItem[]; id: string; className?: string }> = ({ texts, id, className }) => {
  return (
    <a href={`#${id}`}>
      <div className={clsx('leading-[1.3] px-[2px] py-[6px] hover:bg-[#37352F]/[.08] text-[14px] text-[#787774]')}>
        <span className={clsx('border-b', className)}>{texts.map(text => text.plain_text).join('')}</span>
      </div>
    </a>
  )
}
