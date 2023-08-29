import {
    map,
    rule,
    simlayer,
    writeToProfile,
} from 'karabiner.ts'
import { mainApps } from './layers/main-apps'
import { chatApps } from './layers/chat';
import { symbolsMap } from './layers/symbols';

const ruleset = [
    rule('danish mappings').manipulators([
        map('grave_accent_and_tilde', 'right_shift').to('non_us_backslash', 'right_shift'),
        map('grave_accent_and_tilde').to('non_us_backslash'),
        map('non_us_backslash').to('grave_accent_and_tilde'),
        map('non_us_backslash', 'right_shift').to('grave_accent_and_tilde', 'right_shift'),
    ]),
    simlayer('i', 'symbols-mode').manipulators(symbolsMap),
    simlayer('w', 'main-app-mode').manipulators(mainApps),
    simlayer('z', 'chat-mode').manipulators(chatApps),
];

writeToProfile('eikster', ruleset, {
        "basic.to_if_alone_timeout_milliseconds": 80,
        "basic.to_if_held_down_threshold_milliseconds": 70,
        "basic.to_delayed_action_delay_milliseconds": 0,
        "basic.simultaneous_threshold_milliseconds": 60
})
