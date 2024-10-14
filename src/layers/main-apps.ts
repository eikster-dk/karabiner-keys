import { to$, toApp } from "karabiner.ts";

// `open -a` sometimes gets confused by the non-standard path
function toNonStandard(name: string) {
  return to$(`open /Applications/${name}.app`);
}

function WithAuthSocket(name: string) {
  return to$(
    `SSH_AUTH_SOCK=~/Library/Group\ Containers/2BUA8C4S2C.com.1password/t/agent.sock open -a /Applications/${name}.app`,
  );
}

export const mainApps = {
  f: toApp("Figma"),
  h: toApp("Polypane"),
  j: toApp("Arc"),
  k: toApp("WezTerm"),
  l: toApp("Obsidian"),
  t: toApp("Things3"),
  m: toApp("Spotify"),
  b: toApp("TablePlus"),
  u: toApp("Bruno"),
  p: toNonStandard("1Password"),
  o: toApp("Microsoft Teams (work or school)"),
  ",": toApp("System Settings"),
};
