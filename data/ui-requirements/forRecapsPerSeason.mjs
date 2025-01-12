import cloneDeep from "lodash/cloneDeep.js";
import iterateThroughSeasons from "./iterateThroughSeasons.mjs";
import fs from 'fs'
import resolvePath from "../resolvePath.mjs";


export default function forRecapsPerSeason() {
  const recapsPerSeason = []
  iterateThroughSeasons((animeSeason, year, season) => {
    recapsPerSeason.push({
      year,
      season,
      shows: animeSeason.filter(a => a.manamiTags.includes('recap'))
    })
  })

  fs.writeFileSync(resolvePath('../src/data/recapsPerSeason.json'), JSON.stringify(recapsPerSeason))
}