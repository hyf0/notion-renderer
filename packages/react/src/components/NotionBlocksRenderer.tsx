import { BlockObjectResponse, ChildrenByBlockId } from '@notion-renderer/shared'
import React, { createContext, FC, Fragment, useContext } from 'react'
import { CustomableComponents } from '../types'
import { DefaultChildPageIcon } from './icon/DefaultChildPageIcon'
import * as plainBlocks from './plain-blocks'

const createDefaultRendererContextValue = () => {
  const components: CustomableComponents = {
    CalloutBlock: plainBlocks.CalloutBlock,
    ColumnListBlock: plainBlocks.ColumnListBlock,
    HeadingBlock: plainBlocks.HeadingBlock,
    ParagraphBlock: plainBlocks.ParagraphBlock,
    QuoteBlock: plainBlocks.QuoteBlock,
    ToggleBlock: plainBlocks.ToggleBlock,
    ImageBlock: plainBlocks.ImageBlock,
  }
  return {
    components,
    childrenByBlockId: {} as ChildrenByBlockId,
    darkMode: false,
    BlocksRenderer,
  }
}

export const rendererContext = createContext(
  createDefaultRendererContextValue(),
)

export const NotionBlocksRenderer: FC<{
  blocks: BlockObjectResponse[]
  components?: Partial<CustomableComponents>
  childrenByBlockId: ChildrenByBlockId
  darkMode?: boolean
}> = ({ blocks, components = {}, childrenByBlockId, darkMode = false }) => {
  const defaultRenderContextValue = createDefaultRendererContextValue()
  Object.assign(defaultRenderContextValue.components, components)
  defaultRenderContextValue.childrenByBlockId = childrenByBlockId
  defaultRenderContextValue.darkMode = darkMode
  return (
    <rendererContext.Provider value={defaultRenderContextValue}>
      <BlocksRenderer blocks={blocks} />
    </rendererContext.Provider>
  )
}

const BlocksRenderer: FC<{ blocks: BlockObjectResponse[] }> = ({ blocks }) => {
  const { components, childrenByBlockId } = useContext(rendererContext)
  const rendererBlocks = blocks.map((block) => {
    const blockElm = (function() {
      // console.log('render', block)
      switch (block.type) {
        case 'image': {
          return <components.ImageBlock key={block.id} block={block} />
        }
        case 'column_list': {
          return <components.ColumnListBlock key={block.id} block={block} />
        }
        case 'paragraph': {
          return <components.ParagraphBlock key={block.id} block={block} />
        }
        case 'quote': {
          return <components.QuoteBlock key={block.id} block={block} />
        }
        case 'callout': {
          return (
            <div className="mb-[8px]">
              <components.CalloutBlock key={block.id} block={block} />
            </div>
          )
        }
        case 'heading_1':
        case 'heading_2':
        case 'heading_3': {
          return <components.HeadingBlock key={block.id} block={block} />
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
          return <components.ToggleBlock key={block.id} block={block} />
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
        case 'synced_block': {
          const children = childrenByBlockId[block.id]
          return <BlocksRenderer blocks={children ?? []} />
        }
        default: {
          return null
        }
      }
    })()
    return <Fragment key={block.id}>{blockElm}</Fragment>
  })
  return <>{rendererBlocks}</>
}
