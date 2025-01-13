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

  const lessEq6Ep = []
  iterateThroughSeasons(animeSeason => {
    const seasonalCount = animeSeason.filter(a => a.episodeCount <= 6).length
    lessEq6Ep.push(seasonalCount)
  })

  const greater30kMember = []
  iterateThroughSeasons(animeSeason => {
    const seasonalCount = animeSeason.filter(a => a.membershipCount > 30000).length
    greater30kMember.push(seasonalCount)
  })


  const lessEq30kMember = []
  iterateThroughSeasons(animeSeason => {
    const seasonalCount = animeSeason.filter(a => a.membershipCount <= 30000).length
    lessEq30kMember.push(seasonalCount)
  })

  fs.writeFileSync(resolvePath('../src/data/animePerSeason.json'), JSON.stringify({ animeData, filteredData, lessEq6Ep, greater30kMember, lessEq30kMember }))
}