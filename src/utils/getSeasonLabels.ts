import iterateThroughSeasons from "./iterateThroughSeasons"

export default function getSeasonLabels() {
  const seasons: string[] = []
  iterateThroughSeasons((_, y, s) => {
    let seasonLabel = s.substring(0, 1)
    if (['SPRING', 'SUMMER'].includes(s)) {
      seasonLabel += s.substring(1, 2).toLowerCase()
    }
    seasons.push(`${y}`.substring(2) + "'" + seasonLabel)
  })
  return seasons
}