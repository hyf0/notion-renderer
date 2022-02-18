import { FC, useContext } from 'react'
import { TColumnBlock, TColumnListBlock } from '../..'
import { NotionBlocks } from '../NotionBlocks'
import { notionPageContext } from '../NotionPage'

export const ColumnListBlock: FC<{ block: TColumnListBlock }> = ({ block }) => {
  const blockContext = useContext(notionPageContext)
  const childrenBlock = blockContext.childrenByBlockId[block.id]! as TColumnBlock[]
  // useEffect(() => {
  //   console.log('render ColumnListBlock', childrenBlock)
  // }, [])
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <div className="flex">
      {childrenBlock.map(block => {
        const children = blockContext.childrenByBlockId[block.id]!
        return (
          <div key={block.id} className=" flex-1 mr-8 last:mr-0">
            <NotionBlocks blocks={children} />
          </div>
        )
      })}
    </div>
  )
}
