import { createContext, FC } from 'react'
import { ImageBlock, TBlockObjectResponse, TChildrenByBlockId } from '..'
import { ColumnListBlock } from './blocks/ColumnListBlock'
import { ParagraphBlock } from './blocks/ParagraphBlock'

export const notionPageContext = createContext({ childrenByBlockId: {} as { [id: string]: TBlockObjectResponse[] } })

export const NotionPage: FC<{ blocks: TBlockObjectResponse[]; childrenByBlockId: TChildrenByBlockId }> = (
  { blocks, childrenByBlockId },
) => {
  return (
    <notionPageContext.Provider value={{ childrenByBlockId }}>
      <div
        className="px-8"
        style={{
          paddingLeft: 'calc(96px + env(safe-area-inset-left))',
          paddingRight: 'calc(96px + env(safe-area-inset-right))',
        }}
      >
        <Blocks blocks={blocks} />
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
