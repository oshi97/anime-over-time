// TODO refactor to static variable
export default function getSeasonLabels() {
  const seasons: string[] = []
  for (let y = 2004; y < 2025; y++) {
    for (let s of ['WINTER', 'SPRING', 'SUMMER', 'FALL'] as const) {
      let seasonLabel = s.substring(0, 1)
      if (['SPRING', 'SUMMER'].includes(s)) {
        seasonLabel += s.substring(1, 2).toLowerCase()
      }
      seasons.push(`${y}`.substring(2) + "'" + seasonLabel)
    }
  }
  return seasons
}
