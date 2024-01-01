import { ToEvent, ifApp, map, rule, toKey } from "karabiner.ts"

const appFilter = ifApp('^company.thebrowser.Browser$')

const arcMaps = {
  newTab: [toKey('t', 'left_command')],
  sidebar: [toKey('s', 'left_command')],
  commander: [toKey('t', 'left_command')],
}

const goToSpace = (spaceNumber: number): ToEvent => {
  return toKey(spaceNumber as any, 'left_control')
}

const mappings = [
  map('n', 'Hyper').to(arcMaps.newTab),
  map('s', 'Hyper').to(arcMaps.sidebar),
  map('k', 'Hyper').to(arcMaps.commander),
  map('1', 'Hyper').to(goToSpace(1)),
  map('2', 'Hyper').to(goToSpace(2)),
  map('3', 'Hyper').to(goToSpace(3)),
]

export const arcMappings = rule('terminal', appFilter).manipulators(mappings)
