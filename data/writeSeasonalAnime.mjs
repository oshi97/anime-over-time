import { getJikanDataFilepath } from "./writeJikanData.mjs";
import fs from 'fs';
import resolvePath from './resolvePath.mjs';
import potentialAnime from './potentialAnime.json' with { type: "json" };

export default function writeSeasonalAnime() {
  let animeCount = 0
  const yearToSeasonToAnime = {}
  let hentaiCount = 0
  let smallMembership = 0
  let tooShort = 0
  for (const p of potentialAnime) {
    const jikanDataPath = getJikanDataFilepath(p.malId);
    if (!fs.existsSync(jikanDataPath)) {
      continue;
    }
    const { year, season } = p.animeSeason
    if (p.tags.includes('adult audience only') || p.tags.includes('hentai') || ) {
      hentaiCount++;
      continue;
    }
    const jikanData = JSON.parse(fs.readFileSync(jikanDataPath, 'utf-8')).data
    if (jikanData.score === null) {
      continue;
    }
    if (jikanData.members < 2000) {
      smallMembership++;
      continue
    }
    const isOverAnHour = jikanData.duration.includes(" hr")
    // This should result in the same data as the old code,
    // commit, then rerun and check git history to verify that data has not changed
    // Afterwords, move threshold down to at least 10 minutes. Isekai quartet is 11 minutes.
    const isAtLeast19Minutes = isOverAnHour || (jikanData.duration.includes(" min") && parseInt(jikanData.duration.split(" min")[0]) >= 19)
    if (!isAtLeast19Minutes) {
      tooShort++
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
      duration: jikanData.duration,
      malRank: jikanData.rank,
      malPopularity: jikanData.popularity
    })
    animeCount++
  }

  fs.writeFileSync(resolvePath('seasonalAnime.json'), JSON.stringify(yearToSeasonToAnime, null, 2))
  fs.writeFileSync(resolvePath('seasonalAnime.min.json'), JSON.stringify(yearToSeasonToAnime))
  console.log('anime count! -', animeCount, 'pruned - ', potentialAnime.length - animeCount)
  console.log('hentai count:', hentaiCount)
  console.log('shows with less than 2000 members', smallMembership)
  console.log('shorts with episodes under 19 minutes', tooShort)
}