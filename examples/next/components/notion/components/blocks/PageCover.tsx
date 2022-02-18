import { Client } from '@notionhq/client'
import { FC } from 'react'

type Cover = Extract<Awaited<ReturnType<Client['pages']['retrieve']>>, { cover: any }>['cover']

export const PageCover: FC<{ cover: Cover }> = ({ cover }) => {
  let url: string
  if (cover?.type === 'external') {
    url = cover.external.url
  } else if (cover?.type === 'file') {
    url = cover.file.url
  } else {
    return null
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt="cover" src={url} className="block h-[30vh] w-full object-cover object-top" />
}
