import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const animeData = JSON.parse(fs.readFileSync(
  path.resolve(__dirname, './anime-offline-database.json')));

const yearToSeasonToCount = {}
for (const { animeSeason, tags, type, episodes, title, sources } of animeData.data) {
  const { season, year } = animeSeason;
  if (
    title.includes('Xiong') ||
    title.includes('Chuanqi') ||
    title.includes('Caslon') ||
    title.includes('Zhu') ||
    title.includes('zhu') ||
    title.includes('Xiao') ||
    title.includes('xiao') ||
    title.includes('Chong') ||
    title.includes('Jing') ||
    title.includes('Dong') ||
    title.includes('dong') ||
    title.toUpperCase().includes('ARNOLD & PUPPETS') ||
    title.includes('Muzik Tiger') ||
    year < 2004 || episodes < 6 || 
    tags.includes('chinese animation') || 
    tags.includes('korean animation') || 
    season === 'UNDEFINED' ||
    // type === 'ONA' || 
    type === 'SPECIAL' || 
    !sources.find(s => s.includes('myanimelist.net'))) {
    continue;
  }
  if (!yearToSeasonToCount[year]) {
    yearToSeasonToCount[year] = {}
  }
  if (!yearToSeasonToCount[year][season]) {
    yearToSeasonToCount[year][season] = {
      titles: []
    }
  }
  const count = yearToSeasonToCount[year][season]?.count ?? 0;
  yearToSeasonToCount[year][season].count = count + 1;
  yearToSeasonToCount[year][season].titles.push(title)
  if (tags.includes('comedy')) {
    const comedyCount = yearToSeasonToCount[year][season]?.comedyCount ?? 0;
    yearToSeasonToCount[year][season].comedyCount = comedyCount + 1;
  }
}

fs.writeFileSync(path.resolve(__dirname, 'seasonToYearToCount.json'), JSON.stringify(yearToSeasonToCount, null, 2))