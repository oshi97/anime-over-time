import forAnimePerSeason from "./forAnimePerSeason.mjs"
import forEpisodesPerSeason from "./forEpisodesPerSeason.mjs"
import forLongestAnimePerSeason from "./forLongestAnimePerSeason.mjs"
import forRecapsPerSeason from "./forRecapsPerSeason.mjs"

export default function processDataForUI() {
  forAnimePerSeason()
  forEpisodesPerSeason()
  forRecapsPerSeason()
  forLongestAnimePerSeason()
}

