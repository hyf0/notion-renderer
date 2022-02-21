export * from './types'
import { TImageOrEmoji, TNotionIcon } from './types'

export const extractNotionIcon = (icon: TNotionIcon): TImageOrEmoji | null => {
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
