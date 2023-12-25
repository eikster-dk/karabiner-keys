import { map, toKey, withMapper } from "karabiner.ts"

const emojiMap = {
  y: '😂',
  u: '😅',
  i: '🙈',
  o: '🤔',
  h: '😘',
  j: '😍',
  k: '😱',
  l: '❤️',
  n: '🤓',
  m: '🤯',
  ',': '🙃',
  '.': '😎',
  '-': '👏',
}
export const emojis = [
  map('p').to(toKey('␣', '⌘⌃')),
  withMapper(emojiMap)((k, v) => map(k).toPaste(v)),
]
