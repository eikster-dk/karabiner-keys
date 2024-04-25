import { to$, toApp } from 'karabiner.ts'

// `open -a` sometimes gets confused by the non-standard path
function toNonStandard(name: string) {
  return to$(`open /Applications/${name}.app`)
}

export const mainApps = {
  h: toApp('Polypane'),
  j: toApp('Arc'),
  k: toApp('WezTerm'),
  l: toApp('Obsidian'),
  t: toApp('Things3'),
  m: toApp('Spotify'),
  b: toApp('Beekeeper Studio'),
  p: toNonStandard('1Password'),
  o: toApp('Microsoft Teams (work or school)'),
  ',': toApp('System Settings'),
}

