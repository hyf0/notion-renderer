export * from './notion-types/mod'
export * as notionTypes from './notion-types/mod'

import { ImageOrEmoji, NotionIcon } from './notion-types/mod'

export const extractNotionIcon = (icon: NotionIcon): ImageOrEmoji | null => {
  if (icon?.type === 'emoji') {
    return {
      type: 'emoji',
      payload: icon.emoji,
    }
  } else if (icon?.type === 'file') {
    return {
      type: 'image',
      payload: icon.file.url,
    }
  } else if (icon?.type === 'external') {
    return {
      type: 'image',
      payload: icon.external.url,
    }
  }
  return null
}
