import {
  BlockObjectResponse as TBlockObjectResponse,
  ChildrenByBlockId,
  ImageOrEmoji as TImageOrEmoji,
} from '@notion-renderer/shared'
import React, { createContext, FC } from 'react'
import { PageCover } from './blocks/PageCover'
import { NotionBlocksRenderer } from './NotionBlocksRenderer'
import { PageIcon } from './PageIcon'

export const notionPageContext = createContext({
  childrenByBlockId: {} as { [id: string]: TBlockObjectResponse[] },
  fullWidth: false,
})

export const NotionPage: FC<
  {
    blocks: TBlockObjectResponse[]
    childrenByBlockId: ChildrenByBlockId
    fullWidth?: boolean
    cover?: string
    icon?: TImageOrEmoji
    title?: string
  }
> = (
  { blocks, childrenByBlockId, fullWidth = false, cover, icon, title },
) => {
  console.log('root blocks', blocks)
  return (
    <>
      {cover && <PageCover cover={cover} />}
      <div
        className={`px-8 flex flex-col items-center`}
        style={{
          paddingLeft: 'calc(96px + env(safe-area-inset-left))',
          paddingRight: 'calc(96px + env(safe-area-inset-right))',
        }}
      >
        <div className={`${fullWidth ? '' : 'w-[900px]'}`}>
          {icon && <PageIcon icon={icon} />}
          {title && (
            <div className="font-bold text-[40px] mt-9 h-[54px] py-[3px] px-[2px]">
              {title}
            </div>
          )}
          <div className="pt-[5px]">
            <NotionBlocksRenderer blocks={blocks} childrenByBlockId={childrenByBlockId} />
          </div>
        </div>
      </div>
    </>
  )
}
