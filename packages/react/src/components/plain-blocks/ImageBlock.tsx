import React, { FC } from 'react'
import { components } from '../../types'

export const ImageBlock: components.ImageBlock = ({ block }) => {
  let url: string
  if (block.image?.type === 'external') {
    url = block.image.external.url
  } else if (block.image?.type === 'file') {
    url = block.image.file.url
  } else {
    return null
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt="cover" src={url} className="block w-full object-cover h-96" />
}
