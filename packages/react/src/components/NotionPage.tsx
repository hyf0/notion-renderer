import { TBlockObjectResponse, TChildrenByBlockId, TPageIcon } from '@notion-renderer/shared'
import React, { createContext, FC } from 'react'
import { ImageBlock } from '..'
import { ColumnListBlock } from './blocks/ColumnListBlock'
import { PageCover } from './blocks/PageCover'
import { ParagraphBlock } from './blocks/ParagraphBlock'
import { PageIcon } from './PageIcon'

export const notionPageContext = createContext({
  childrenByBlockId: {} as { [id: string]: TBlockObjectResponse[] },
  fullWidth: false,
})

export const NotionPage: FC<
  {
    blocks: TBlockObjectResponse[]
    childrenByBlockId: TChildrenByBlockId
    fullWidth?: boolean
    cover?: string
    icon?: TPageIcon
  }
> = (
  { blocks, childrenByBlockId, fullWidth = false, cover, icon },
) => {
  return (
    <notionPageContext.Provider value={{ childrenByBlockId, fullWidth }}>
      {cover && <PageCover cover={cover} />}
      <div
        className={`px-8 flex flex-col items-center`}
        style={{
          paddingLeft: 'calc(96px + env(safe-area-inset-left))',
          paddingRight: 'calc(96px + env(safe-area-inset-right))',
        }}
      >
        <div className={`${fullWidth ? '' : 'w-[900px]'} relative`}>
          {icon && <PageIcon icon={icon} />}
          <div className="font-bold text-[40px] mt-9">
            Next for Vercel
          </div>
          <Blocks blocks={blocks} />
        </div>
      </div>
    </notionPageContext.Provider>
  )
}

export const Blocks: FC<
  { blocks: TBlockObjectResponse[] }
> = (
  { blocks },
) => {
  const rendererBlocks = blocks.map(block => {
    return (
      <div key={block.id} className=" mt-4">
        {function() {
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
            default: {
              return null
            }
          }
        }()}
      </div>
    )
  })
  return <>{rendererBlocks}</>
}
