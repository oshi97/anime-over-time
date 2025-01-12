import iterateThroughSeasons from "../iterateThroughSeasons.mjs"
import fs from 'fs'
import resolvePath from "../../resolvePath.mjs"
import cloneDeep from "lodash/cloneDeep.js";

/**
 * Create a 2d array for the top 9 mal rated shows
 */
export default function forMalRatings() {
  const top9 = []
  // Array.fill will result in duplicate array references, lol.
  for (let i = 0; i < 9; i++) {
    top9[i] = []
  }
  iterateThroughSeasons((animeSeason) => {
    const sortedSeason = cloneDeep(animeSeason);
    sortedSeason.sort((a, b) => b.malRating - a.malRating)
    for (let i = 0; i < 9; i++) {
      top9[i].push(sortedSeason[i].malRating)
    }
  })
  fs.writeFileSync(resolvePath('../src/data/malRatings.json'), JSON.stringify(top9))
}