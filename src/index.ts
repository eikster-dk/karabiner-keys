import {
  hyperLayer,
  ifDevice,
  map,
  rule,
  simlayer,
  writeToProfile,
} from "karabiner.ts";
import { mainApps } from "./layers/main-apps";
import { chatApps } from "./layers/chat";
import { symbolsMap } from "./layers/symbols";
import { emojis } from "./layers/emoji";
import { terminalMappings } from "./apps/wezterm";
import { arcMappings } from "./apps/arc";
import { ghosttyTerminalMappings } from "./apps/ghostty";

const zsaVoyager = { vendor_id: 12951, product_id: 6519 };

const ruleset = [
  rule(
    "danish mappings for zsa voyager so it works across all operating systems",
    ifDevice(zsaVoyager),
  ).manipulators([
    map("7", "right_option")
      .to("8", ["left_shift", "left_option"])
      .description("on macos, will print  {"),
    map("0", "right_option")
      .to("9", ["left_shift", "left_option"])
      .description("on macos will print }"),
    map("2", "right_option")
      .to("backslash", ["left_option"])
      .description("on macos will print @"),
    map("non_us_backslash")
      .to("grave_accent_and_tilde")
      .description("on macos will print <"),
    map("non_us_backslash", "left_shift")
      .to("grave_accent_and_tilde", ["left_shift"])
      .description("will print >"),
    map("4", "right_option").to("non_us_backslash").description("will print $"),
    map("equal_sign", "right_option")
      .to("i", "left_option")
      .description("will print |"),
    map("non_us_backslash", "right_option")
      .to("7", ["left_shift", "left_option"])
      .description("will print backslash"),
  ]),

  rule("hyper-key").manipulators([map("⇪").toHyper()]),
  hyperLayer("e", "hyper emoji").manipulators(emojis),
  simlayer("i", "symbols-mode").manipulators(symbolsMap),
  simlayer("w", "main-app-mode").manipulators(mainApps),
  simlayer("z", "chat-mode").manipulators(chatApps),

  // app specifics
  terminalMappings,
  arcMappings,
  ghosttyTerminalMappings,
];

writeToProfile("eikster", ruleset, {
  "basic.to_if_alone_timeout_milliseconds": 80,
  "basic.to_if_held_down_threshold_milliseconds": 70,
  "basic.to_delayed_action_delay_milliseconds": 0,
  "basic.simultaneous_threshold_milliseconds": 60,
});
