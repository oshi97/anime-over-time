import cloneDeep from "lodash/cloneDeep.js";
import iterateThroughSeasons from "../iterateThroughSeasons.mjs";
import fs from 'fs'
import resolvePath from "../../resolvePath.mjs";

export default function forTopAnimePerSeason() {
  const highestedRatedShows = []
  iterateThroughSeasons((animeSeason, year, season) => {
    const sortedSeason = cloneDeep(animeSeason);
    sortedSeason.sort((a, b) => b.malRating - a.malRating)
    highestedRatedShows.push({
      year,
      season,
      shows: sortedSeason.slice(0,9)
    })
  })

  fs.writeFileSync(resolvePath('../src/data/topAnimePerSeason.json'), JSON.stringify(highestedRatedShows))
}