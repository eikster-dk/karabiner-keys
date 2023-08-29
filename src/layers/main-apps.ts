import { to$, toApp } from 'karabiner.ts'

// `open -a` sometimes gets confused by the non-standard path
function toNonStandard(name: string) {
    return to$(`open ~/Applications/${name}.app`)
}

export const mainApps = {
  j: toApp('Arc'),
  k: toApp('WezTerm'),
  l: toApp('LogSeq'),
  t: toApp('Things3'), 
  m: toApp('Spotify'),
  b: toApp('Beekeeper Studio'),
  i: toApp('Insomnia'),
  p: toNonStandard('1Password'), 
  ',': toApp('System Settings'),
}

