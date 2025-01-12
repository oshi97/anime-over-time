import cloneDeep from "lodash/cloneDeep.js";
import iterateThroughSeasons from "./iterateThroughSeasons.mjs";
import fs from 'fs'
import resolvePath from "../resolvePath.mjs";

export default function forLongestAnimePerSeason() {
  const longestShows = []
  iterateThroughSeasons((animeSeason, year, season) => {
    const sortedSeason = cloneDeep(animeSeason);
    sortedSeason.sort((a, b) => b.episodeCount - a.episodeCount)
    longestShows.push({
      year,
      season,
      // Probably don't need more than 9 shows
      shows: sortedSeason.slice(0,9)
    })
  })

  fs.writeFileSync(resolvePath('../src/data/longestAnimePerSeason.json'), JSON.stringify(longestShows))
}