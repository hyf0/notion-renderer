import type { blocks } from '@notion-renderer/shared'
import React, { useContext } from 'react'
import { components } from '../../types'
import { rendererContext } from '../NotionBlocksRenderer'
export const ColumnListBlock: components.ColumnListBlock = ({ block }) => {
  const { BlocksRenderer, childrenByBlockId } = useContext(rendererContext)
  const childrenBlock = childrenByBlockId[
    block.id
  ]! as blocks.ColumnBlock[]

  return (
    <div className="flex">
      {childrenBlock.map((block) => {
        const children = childrenByBlockId[block.id]!
        return (
          <div key={block.id} className="flex-1 mr-[32px] last:mr-0 overflow-hidden">
            <BlocksRenderer blocks={children} />
          </div>
        )
      })}
    </div>
  )
}
