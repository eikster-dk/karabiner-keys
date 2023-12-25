import { ToEvent, hyperLayer, ifApp, map, mapSimultaneous, rule, toKey, withCondition, withMapper } from "karabiner.ts"

const appFilter = ifApp('^com.github.wez.wezterm$')

const tmuxControl: ToEvent = {key_code: 'b', modifiers: ['left_control']}

const tmux: {[key: string]: ToEvent | ToEvent[]} = {
  main: [tmuxControl, { key_code: 'g'}],
  projecs: [tmuxControl, { key_code: 'f'}],
  newWindow: [tmuxControl, { key_code: 'c'}],
  goto1: [tmuxControl, { key_code: '1'}],
  goto2: [tmuxControl, { key_code: '2'}],
  goto3: [tmuxControl, { key_code: '3'}],
  goto4: [tmuxControl, { key_code: '4'}],
}

const mappings = [
  map('g', 'Hyper').to(tmux.main),
  map('f', 'Hyper').to(tmux.projecs),
  map('n', 'Hyper').to(tmux.newWindow),
  map('1', 'Hyper').to(tmux.goto1),
  map('2', 'Hyper').to(tmux.goto2),
  map('3', 'Hyper').to(tmux.goto3),
  map('4', 'Hyper').to(tmux.goto4),
]

export const terminalMappings = rule('terminal', appFilter).manipulators(mappings)
