import resolvePath from './resolvePath.mjs';
import fs from 'fs'

export default function writePotentialAnime() {
  const database = JSON.parse(fs.readFileSync(resolvePath('./anime-offline-database.json')));
  const potentialAnime = filterByJapaneseAnime(database)
  fs.writeFileSync(resolvePath('potentialAnime.json'), JSON.stringify(potentialAnime, null, 2))
}

function filterByJapaneseAnime(database) {
  const potentialAnime = []
  for (const { animeSeason, tags, type, episodes, title, sources } of database.data) {
    const { season, year } = animeSeason;
    if (isUnwanted({ season, tags, type, title, year })) {
      continue;
    }
    const malSource = sources.find(s => s.includes('myanimelist.net'));
    if (!malSource) {
      continue;
    }
    const malId = malSource.split('https://myanimelist.net/anime/')[1]
    if (!malId) {
      console.error('No MAL Id for', title)
      exit(1)
    }
    potentialAnime.push({ animeSeason, tags, type, episodes, title, malId })
  }
  return potentialAnime
}

function isUnwanted({ title, year, tags, season, type}) {
  return (
    // title.includes('Xiong') ||
    // title.includes('Chuanqi') ||
    // title.includes('Caslon') ||
    // title.includes('Zhu') ||
    // title.includes('zhu') ||
    // title.includes('Xiao') ||
    // title.includes('xiao') ||
    // title.includes('Chong') ||
    // title.includes('Jing') ||
    // title.includes('Dong') ||
    // title.includes('dong') ||
    // title.toUpperCase().includes('ARNOLD & PUPPETS') ||
    // title.includes('Muzik Tiger') ||
    year < 2004)
    // tags.includes('chinese animation') || 
    // tags.includes('korean animation')) 
    // season === 'UNDEFINED' ||
    // type === 'ONA' || 
    // type === 'SPECIAL')
}
