import fs from 'fs';
import path from 'path';
import resolvePath from './resolvePath.mjs';
import potentialAnime from './potentialAnime.json' with { type: "json" };
import { getJikanDataFilepath } from './writeJikanData.mjs'; 

const yearToSeasonToAnime = {}
for (const p of potentialAnime) {
  if (p.tags.includes('adult audience only') || p.tags.includes('hentai')) {
    continue;
  }
  const jikanData = JSON.parse(fs.readFileSync(getJikanDataFilepath(p.malId), 'utf-8'))
  if (jikanData.members < 2000) {
    continue
  }
  if (!yearToSeasonToAnime[year]) {
    yearToSeasonToAnime[year] = {}
  }
  if (!yearToSeasonToAnime[year][season]) {
    yearToSeasonToAnime[year][season] = []
  }
  const count = yearToSeasonToCount[year][season]?.count ?? 0;
  yearToSeasonToCount[year][season].count = count + 1;
  yearToSeasonToCount[year][season].titles.push(title)
  if (tags.includes('comedy')) {
    const comedyCount = yearToSeasonToCount[year][season]?.comedyCount ?? 0;
    yearToSeasonToCount[year][season].comedyCount = comedyCount + 1;
  }

}