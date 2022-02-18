import { FC } from 'react'
import { TImageBlock } from '../typings'

export const ImageBlock: FC<{ info: TImageBlock }> = ({ info }) => {
  let url: string
  if (info.image?.type === 'external') {
    url = info.image.external.url
  } else if (info.image?.type === 'file') {
    url = info.image.file.url
  } else {
    return null
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt="cover" src={url} className="block w-full object-cover h-96" />
}
