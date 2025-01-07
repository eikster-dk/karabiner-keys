import { ifApp, map, rule, toKey } from "karabiner.ts";

const appFilter = ifApp("^com.mitchellh.ghostty$");

const tmuxControl = toKey("b", "left_control");
const tmux = {
  main: [tmuxControl, toKey("g")],
  projecs: [tmuxControl, toKey("f")],
  newWindow: [tmuxControl, toKey("c")],
  killWindow: [tmuxControl, toKey("k")],
  goto1: [tmuxControl, toKey(1)],
  goto2: [tmuxControl, toKey(2)],
  goto3: [tmuxControl, toKey(3)],
  goto4: [tmuxControl, toKey(4)],
};

const harpoonControl = [toKey("spacebar"), toKey("h")];
const VimHarpoon = {
  explorer: [...harpoonControl, toKey("e")],
  addFile: [...harpoonControl, toKey("a")],
  goto1: [...harpoonControl, toKey(1)],
  goto2: [...harpoonControl, toKey(2)],
  goto3: [...harpoonControl, toKey(3)],
  goto4: [...harpoonControl, toKey(4)],
};

// todo: think abit about this and the hyperKey because it might collide with other hyperKey functions
const mappings = [
  map("o", "Hyper").to(VimHarpoon.explorer),
  map("a", "Hyper").to(VimHarpoon.addFile),
  map("h", "Hyper").to(VimHarpoon.goto1),
  map("j", "Hyper").to(VimHarpoon.goto2),
  map("k", "Hyper").to(VimHarpoon.goto3),
  map("l", "Hyper").to(VimHarpoon.goto4),
  map("g", "Hyper").to(tmux.main),
  map("f", "Hyper").to(tmux.projecs),
  map("n", "Hyper").to(tmux.newWindow),
  map("q", "Hyper").to(tmux.killWindow),
  map("1", "Hyper").to(tmux.goto1),
  map("2", "Hyper").to(tmux.goto2),
  map("3", "Hyper").to(tmux.goto3),
  map("4", "Hyper").to(tmux.goto4),
];

export const ghosttyTerminalMappings = rule("ghostty", appFilter).manipulators(
  mappings,
);
