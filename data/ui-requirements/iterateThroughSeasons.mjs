import seasonalAnime from '../seasonalAnime.min.json' with { type: "json" };

export default function iterateThroughSeasons(cb) {
  const years = Object.keys(seasonalAnime)
  years.sort()
  for (const year of years) {
    for (let season of ['WINTER', 'SPRING', 'SUMMER', 'FALL']) {
      if (!seasonalAnime[year][season]) {
        continue
      }
      cb(seasonalAnime[year][season], year, season)
    }
  }
}
