import cloneDeep from "lodash/cloneDeep.js";
import iterateThroughSeasons from "../iterateThroughSeasons.mjs";
import fs from 'fs'
import resolvePath from "../../resolvePath.mjs";

export default function forTop30ByMembers() {
  const mostPopularShows = []
  iterateThroughSeasons((animeSeason, year, season) => {
    const sortedSeason = cloneDeep(animeSeason);
    sortedSeason.sort((a, b) => b.membershipCount - a.membershipCount)
    mostPopularShows.push({
      year,
      season,
      shows: sortedSeason.slice(0,30)
    })
  })

  fs.writeFileSync(resolvePath('../src/data/top30ByMembers.json'), JSON.stringify(mostPopularShows))
}