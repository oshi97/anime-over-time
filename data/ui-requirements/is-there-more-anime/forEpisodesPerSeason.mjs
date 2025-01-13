import cloneDeep from "lodash/cloneDeep.js";
import iterateThroughSeasons from "../iterateThroughSeasons.mjs";
import fs from 'fs'
import resolvePath from "../../resolvePath.mjs";

export default function forEpisodesPerSeason() {
  const animeData = []
  iterateThroughSeasons((animeSeason) => {
    animeData.push(
      animeSeason.reduce(
        (accum, a) => {
          if (a.episodeCount > 50) {
            return { total: accum.total + a.episodeCount, filtered: accum.filtered }
          }
          return {
            total: accum.total + a.episodeCount,
            filtered: accum.filtered + a.episodeCount
          }
        },
        { total: 0, filtered: 0 }
      )
    )
  })

  const topNine = []
  iterateThroughSeasons((animeSeason) => {
    const sortedSeason = cloneDeep(animeSeason);
    sortedSeason.sort((a, b) => b.episodeCount - a.episodeCount)
    topNine.push(sortedSeason.slice(0,9).reduce((sum, a) => sum + a.episodeCount, 0) / 9)
  })

  const topOne = []
  iterateThroughSeasons((animeSeason) => {
    const sortedSeason = cloneDeep(animeSeason);
    const max = Math.max(...sortedSeason.map(a => a.episodeCount))
    topOne.push(max)
  })

  
  fs.writeFileSync(resolvePath('../src/data/episodesPerSeason.json'), JSON.stringify({ animeData, topNine, topOne }))
}