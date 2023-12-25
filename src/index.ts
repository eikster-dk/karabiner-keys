import {
  hyperLayer,
  map,
  rule,
  simlayer,
  writeToProfile,
} from 'karabiner.ts'
import { mainApps } from './layers/main-apps'
import { chatApps } from './layers/chat';
import { symbolsMap } from './layers/symbols';
import { emojis } from './layers/emoji';
import { terminalMappings } from './apps/wezterm';

const ruleset = [
  rule('hyper-key').manipulators([
    map('⇪').toHyper(),
  ]),
  hyperLayer('e', 'hyper emoji').manipulators(emojis),
  simlayer('i', 'symbols-mode').manipulators(symbolsMap),
  simlayer('w', 'main-app-mode').manipulators(mainApps),
  simlayer('z', 'chat-mode').manipulators(chatApps),

  // app specifics
  terminalMappings
];

writeToProfile('eikster', ruleset, {
  "basic.to_if_alone_timeout_milliseconds": 80,
  "basic.to_if_held_down_threshold_milliseconds": 70,
  "basic.to_delayed_action_delay_milliseconds": 0,
  "basic.simultaneous_threshold_milliseconds": 60
})
