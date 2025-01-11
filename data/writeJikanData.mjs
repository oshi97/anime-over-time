import fs from 'fs';
import path from 'path';
import resolvePath from './resolvePath.mjs';
import potentialAnime from './potentialAnime.json' with { type: "json" };

writeJikanData();

async function writeJikanData() {
  for (const p of potentialAnime) {
    if (!fs.existsSync(getJikanDataFilepath(p.malId))) {
      await writeJikanDataFile(p);
    }
  }
}

async function writeJikanDataFile(p, retryCount = 0) {
  const { title, malId } = p;
  const start = Date.now()
  console.log('fetching', title, malId);
  const jikanData = await fetch(`https://api.jikan.moe/v4/anime/${p.malId}/full`)
  if (jikanData.status === 404 && jikanData.statusText === 'Not Found') {
    return p
  }
  if (jikanData.status !== 200) {
    console.log(jikanData.type, jikanData.status, jikanData.statusText, malId, title);
    return new Promise(resolve => setTimeout(() => {
      console.log('    refetching -', malId, title)
      resolve(writeJikanDataFile(p, retryCount + 1))
    }, 1000))
  }
  if (retryCount > 0) {
    console.log(" --- Received", p.title, p.malId, 'elapsed = ', Date.now() - start)
  }
  const jsonData = await jikanData.json();
  fs.writeFileSync(
    getJikanDataFilepath(malId),
    JSON.stringify(jsonData, null, 2))
}

export function getJikanDataFilepath(malId) {
  return resolvePath(path.join('jikanData', `${malId}.json`));
}