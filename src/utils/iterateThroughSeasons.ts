import { AnimeData, SEASON } from '../types'
import seasonalAnime from '../seasonalAnime.min.json'

/**
 * The y as '2004' thing is a dumb hack
 * But I cba rn, honestly probably never
 * Looks like some kind of Enumerate type may exist, worth looking into...
 * someday...
 * ...
 * I'm so happy I can write this because it's my own damn project lol
 * wonder if I'll giggle reading it down the line, unexpectedly
 */
export default function iterateThroughSeasons(cb: (animeSeason: AnimeData[], y: '2004', s: SEASON) => void) {
  for (let y = 2004; y < 2025; y++) {
    const year = `${y}` as '2004'
    for (let s of ['WINTER', 'SPRING', 'SUMMER', 'FALL'] as const) {
      cb(seasonalAnime[year][s], year, s)
    }
  }
}
