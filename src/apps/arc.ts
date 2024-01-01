import { ToEvent, ifApp, map, rule, toKey } from "karabiner.ts"

const appFilter = ifApp('^company.thebrowser.Browser$')

const arc = {
  newTab: [toKey('t', 'left_command')],
  commander: [toKey('t', 'left_command')],
  sidebar: [toKey('s', 'left_command')],
  copyUrl: [toKey('c', 'left_command')],
  developerTools: [toKey('i', ['left_option', 'left_command'])],
  archiveTab: [toKey('w', 'left_command')],
  clearTabs: [toKey('k', ['left_command', 'left_shift'])],
  goToSpace: (spaceNumber: number): ToEvent => {
    return toKey(spaceNumber as any, 'left_control')
  }
}

const mappings = [
  map('n', 'Hyper').to(arc.newTab),
  map('s', 'Hyper').to(arc.sidebar),
  map('k', 'Hyper').to(arc.commander),
  map('i', 'Hyper').to(arc.developerTools),
  map('c', 'Hyper').to(arc.copyUrl),
  map('w', 'Hyper').to(arc.archiveTab),
  map('q', 'Hyper').to(arc.clearTabs),
  map('1', 'Hyper').to(arc.goToSpace(1)),
  map('2', 'Hyper').to(arc.goToSpace(2)),
  map('3', 'Hyper').to(arc.goToSpace(3)),
]

export const arcMappings = rule('terminal', appFilter).manipulators(mappings)
