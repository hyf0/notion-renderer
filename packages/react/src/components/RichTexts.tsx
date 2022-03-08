import { RichTextItem } from '@notion-renderer/shared'
import React, { FC } from 'react'
import { DefaultChildPageIcon } from './icon/DefaultChildPageIcon'
import { GithubIcon } from './icon/GithubIcon'

export const RichTexts: FC<{ texts: RichTextItem[] }> = ({ texts }) => {
  return <div className="whitespace-pre-wrap">{texts.map((text, idx) => <RichText key={idx} text={text} />)}</div>
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
          anno.code
          && 'text-[#EB5757] bg-[rgba(135,131,120,0.15)] rounded-[3px] text-sm py-0.5 px-1',
        ]
          .filter(Boolean)
          .join(' ')}
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
            <div className="py-[3px] px-[2px] items-center cursor-pointer hover:bg-slate-700/[.07] flex">
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

const GITHUB_RE = /https:\/\/github\.com\/\w+\/(\w+)/
const extractGithubProjectName = (url: string) => {
  const res = GITHUB_RE.exec(url)
  if (res) {
    return res[1] ?? null
  } else {
    return null
  }
}
