import { blockTypes } from '@notion-renderer/shared'
import React, { useContext } from 'react'
import { components } from '../../types'
import { rendererContext } from '../NotionBlocksRenderer'

export const ColumnListBlock: components.ColumnListBlock = ({ block }) => {
  const { BlocksRenderer, childrenByBlockId } = useContext(rendererContext)
  const childrenBlock = childrenByBlockId[
    block.id
  ]! as blockTypes.ColumnBlock[]
  return (
    <div className="flex">
      {childrenBlock.map((block) => {
        const children = childrenByBlockId[block.id]!
        return (
          <div key={block.id} className="flex-1 mr-8 last:mr-0">
            <BlocksRenderer blocks={children} />
          </div>
        )
      })}
    </div>
  )
}
