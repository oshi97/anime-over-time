import fs from 'fs';
import resolvePath from './resolvePath.mjs';
import potentialAnime from './potentialAnime.json' with { type: "json" };
import { getJikanDataFilepath } from './writeJikanData.mjs'; 

let animeCount = 0
const yearToSeasonToAnime = {}
for (const p of potentialAnime) {
  const { year, season } = p.animeSeason
  const jikanDataPath = getJikanDataFilepath(p.malId);
  if (p.tags.includes('adult audience only') || p.tags.includes('hentai') || !fs.existsSync(jikanDataPath)) {
    continue;
  }
  const jikanData = JSON.parse(fs.readFileSync(jikanDataPath, 'utf-8')).data
  if (jikanData.members < 2000 || jikanData.score === null) {
    continue
  }
  if (!jikanData.duration.includes(" min")) {
    continue
  }
  if (parseInt(jikanData.duration.split(" min")[0]) < 19) {
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
    title: jikanData.title,
    episodeCount: jikanData.episodes
  })
  animeCount++
}

fs.writeFileSync(resolvePath('seasonalAnime.json'), JSON.stringify(yearToSeasonToAnime, null, 2))
fs.writeFileSync(resolvePath('../src/seasonalAnime.min.json'), JSON.stringify(yearToSeasonToAnime))
console.log('anime count! -', animeCount, 'pruned - ', potentialAnime.length - animeCount)