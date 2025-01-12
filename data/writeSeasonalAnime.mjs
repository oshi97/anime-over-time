import { getJikanDataFilepath } from "./writeJikanData.mjs";
import fs from 'fs';
import resolvePath from './resolvePath.mjs';
import potentialAnime from './potentialAnime.json' with { type: "json" };

function warn(...msg) {
  // console.warn(...msg)
}

export default function writeSeasonalAnime() {
  let animeCount = 0
  const yearToSeasonToAnime = {}
  for (const p of potentialAnime) {
    const { year, season } = p.animeSeason
    const jikanDataPath = getJikanDataFilepath(p.malId);
    if (p.tags.includes('adult audience only') || p.tags.includes('hentai') || !fs.existsSync(jikanDataPath)) {
      warn('Skipping case 1', p.title)
      continue;
    }
    const jikanData = JSON.parse(fs.readFileSync(jikanDataPath, 'utf-8')).data
    if (jikanData.members < 2000 || jikanData.score === null) {
      warn('Skipping case 2', p.title)
      continue
    }
    if (!jikanData.duration.includes(" min")) {
      warn('Skipping case 3', p.title)
      continue
    }
    if (!jikanData.duration.includes('hr') && parseInt(jikanData.duration.split(" min")[0]) < 19) {
      warn('Skipping case 4', p.title, jikanData.duration.split(" min")[0] )
      continue
    }
    if (!yearToSeasonToAnime[year]) {
      yearToSeasonToAnime[year] = {}
    }
    if (!yearToSeasonToAnime[year][season]) {
      yearToSeasonToAnime[year][season] = []
    }
    yearToSeasonToAnime[year][season].push({
      membershipCount: jikanData.members,
      malRating: jikanData.score,
      malGenres: jikanData.genres.map(g => g.name),
      malThemes: jikanData.themes.map(t => t.name),
      // manamiTags: p.tags.filter(t => ['harem', 'comedy', 'romance', 'romantic comedy', 'male harem', 'female harem'].includes(t)),
      manamiTags: p.tags,
      malImageURL: jikanData.images.jpg.image_url,
      malSmallImageURL: jikanData.images.jpg.small_image_url,
      title: jikanData.title,
      episodeCount: jikanData.episodes,
      duration: jikanData.duration
    })
    animeCount++
  }

  fs.writeFileSync(resolvePath('seasonalAnime.json'), JSON.stringify(yearToSeasonToAnime, null, 2))
  fs.writeFileSync(resolvePath('seasonalAnime.min.json'), JSON.stringify(yearToSeasonToAnime))
  console.log('anime count! -', animeCount, 'pruned - ', potentialAnime.length - animeCount)
}