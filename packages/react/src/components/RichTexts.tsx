import { RichTextItem } from '@notion-renderer/shared'
import clsx from 'clsx'
import React, { FC } from 'react'
import { NotionTextBgColor, NotionTextColor } from '../constants'
import { DefaultChildPageIcon } from './icon/DefaultChildPageIcon'
import { GithubIcon } from './icon/GithubIcon'

export const RichTexts: FC<{ texts: RichTextItem[]; className?: string }> = ({ texts, className }) => {
  const isEmpty = texts.length === 0
  return (
    <div
      placeholder=" "
      className={clsx('whitespace-pre-wrap', isEmpty && 'after:content-[attr(placeholder)]', className)}
    >
      {texts.map((text, idx) => <RichText key={idx} text={text} />)}
    </div>
  )
}

const RichText: FC<{ text: RichTextItem }> = ({ text }) => {
  const colorCls = extractTextColor(text)
  const linkCls = extractLinkCls(text)
  if (text.type === 'text') {
    const anno = text.annotations
    const textEl = (
      <span
        className={clsx(
          colorCls,
          linkCls,
          anno.bold && 'font-bold',
          anno.italic && 'italic',
          anno.underline && 'underline',
          anno.code
            && 'text-[#EB5757] bg-[rgba(135,131,120,0.15)] rounded-[3px] text-sm py-0.5 px-1',
        )}
      >
        {text.text.content}
      </span>
    )
    if (text.text.link) {
      return (
        <a target="_blank" href={text.text.link.url}>
          {textEl}
        </a>
      )
    } else {
      return textEl
    }
  } else if (text.type === 'mention') {
    switch (text.mention.type) {
      case 'page': {
        const pageId = text.mention.page.id
        return (
          <a href={`./${pageId}`}>
            <div className="py-[3px] px-[2px] items-center cursor-pointer hover:bg-slate-700/[.07] inline-flex">
              <div className="h-[24px] w-[24px] flex items-center justify-center mr-[4px] text-[20px]">
                <DefaultChildPageIcon />
              </div>
              <div className="border-b border-b-[rgba(55, 53, 47, 0.16)] font-[500] text-[16px] whitespace-nowrap overflow-hidden text-ellipsis">
                {text.plain_text}
              </div>
            </div>
          </a>
        )
      }
      case 'link_preview': {
        const url = text.mention.link_preview.url
        const githubProjectName = extractGithubProjectName(url)
        if (githubProjectName) {
          return (
            <a target="_blank" href={url}>
              <div className="py-[3px] px-[2px] items-center cursor-pointer hover:bg-slate-700/[.07] inline-flex rounded-[3px] text-[16px]">
                {
                  <div className="flex items-center justify-center mr-[0.3em] text-[20px]">
                    <GithubIcon />
                  </div>
                }
                <div className="border-b border-b-[rgba(55, 53, 47, 0.16)] font-[500] leading-[24px] whitespace-nowrap overflow-hidden text-ellipsis">
                  {githubProjectName}
                </div>
              </div>
            </a>
          )
        }
        return (
          <a href={url}>
            <div className="py-[3px] px-[2px] items-center cursor-pointer hover:bg-slate-700/[.07] inline-flex">
              {
                /* {isGithubLink && (
                <div className="h-[24px] w-[24px] flex items-center justify-center mr-[4px] text-[20px]">
                  <GithubIcon />
                </div>
              )} */
              }
              <div className="border-b border-b-[rgba(55, 53, 47, 0.16)] font-[500] text-[16px] whitespace-nowrap overflow-hidden text-ellipsis">
                {url}
              </div>
            </div>
          </a>
        )
      }
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
  switch (color) {
    case 'default': {
      return ''
    }
    case 'gray': {
      return NotionTextColor.Gray
    }
    case 'orange': {
      return NotionTextColor.Orange
    }
    case 'yellow': {
      return NotionTextColor.Yellow
    }
    case 'green': {
      return NotionTextColor.Green
    }
    case 'blue': {
      return NotionTextColor.Blue
    }
    case 'purple': {
      return NotionTextColor.Purple
    }
    case 'pink': {
      return NotionTextColor.Pink
    }
    case 'red': {
      return NotionTextColor.Red
    }
    case 'brown': {
      return NotionTextColor.Brown
    }
    case 'gray_background': {
      return NotionTextBgColor.Gray
    }
    case 'orange_background': {
      return NotionTextBgColor.Orange
    }
    case 'yellow_background': {
      return NotionTextBgColor.Yellow
    }
    case 'green_background': {
      return NotionTextBgColor.Green
    }
    case 'blue_background': {
      return NotionTextBgColor.Blue
    }
    case 'purple_background': {
      return NotionTextBgColor.Purple
    }
    case 'pink_background': {
      return NotionTextBgColor.Pink
    }
    case 'red_background': {
      return NotionTextBgColor.Red
    }
    case 'brown_background': {
      return NotionTextBgColor.Brown
    }
    default: {
      const _check: never = color
    }
  }
}

const GITHUB_RE = /https:\/\/github\.com\/.+\/(.+)/
const extractGithubProjectName = (url: string) => {
  const res = GITHUB_RE.exec(url)
  if (res) {
    return res[1] ?? null
  } else {
    return null
  }
}
