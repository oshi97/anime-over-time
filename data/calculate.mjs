import { writeJikanData } from './writeJikanData.mjs'; 
import writePotentialAnime from './writePotentialAnime.mjs';
import writeSeasonalAnime from './writeSeasonalAnime.mjs';

async function main() {
  // writePotentialAnime();
  // await writeJikanData();
  writeSeasonalAnime();
}

main()