import { SEASON } from ".";

export default function iterateThroughSeasons(cb: (y: number, s: SEASON) => void) {
  for (let y = 2004; y < 2025; y++) {
    for (let s of ['WINTER', 'SPRING', 'SUMMER', 'FALL'] as const) {
      cb(y, s)
    }
  }
}
