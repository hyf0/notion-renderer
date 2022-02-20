import React, { FC } from 'react'

export const PageCover: FC<{ cover: string }> = ({ cover }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img alt="cover" src={cover} className="block h-[30vh] w-full object-cover object-top" />
}
