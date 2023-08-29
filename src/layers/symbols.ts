import { toKey } from "karabiner.ts";


export const symbolsMap = {
    q: toKey(8, 'left_shift'),
    w: toKey(9, 'left_shift'),
    e: toKey(8, 'left_option'),
    r: toKey(9, 'left_option'),
    a: toKey(8, ['left_option', 'left_shift']),
    s: toKey(9, ['left_option', 'left_shift']),
}
