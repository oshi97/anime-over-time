import forAnimePerSeason from "./is-there-more-anime/forAnimePerSeason.mjs"
import forEpisodesPerSeason from "./is-there-more-anime/forEpisodesPerSeason.mjs"
import forLongestAnimePerSeason from "./is-there-more-anime/forLongestAnimePerSeason.mjs"
import forRecapsPerSeason from "./is-there-more-anime/forRecapsPerSeason.mjs"
import forMostPopularAnimePerSeason from "./is-anime-more-popular/forMostPopularAnimePerSeason.mjs"
import forTotalMembersPerSeason from "./is-anime-more-popular/forTotalMembersPerSeason.mjs"

export default function processDataForUI() {
  // forAnimePerSeason()
  // forEpisodesPerSeason()
  // forRecapsPerSeason()
  // forLongestAnimePerSeason()

  forMostPopularAnimePerSeason()
  forTotalMembersPerSeason()
}

