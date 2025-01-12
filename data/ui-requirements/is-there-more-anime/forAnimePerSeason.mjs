import iterateThroughSeasons from "../iterateThroughSeasons.mjs"
import fs from 'fs'
import resolvePath from "../../resolvePath.mjs"

export default function forAnimePerSeason() {
  const animeData = []
  iterateThroughSeasons(animeSeason => {
    const seasonalCount = animeSeason.length
    animeData.push(seasonalCount)
  })

  const filteredData = []
  iterateThroughSeasons(animeSeason => {
    const seasonalCount = animeSeason.filter(a => a.episodeCount > 6).length
    filteredData.push(seasonalCount)
  })

  fs.writeFileSync(resolvePath('../src/data/animePerSeason.json'), JSON.stringify({ animeData, filteredData }))
}