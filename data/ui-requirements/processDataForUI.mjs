import forAnimePerSeason from "./is-there-more-anime/forAnimePerSeason.mjs"
import forEpisodesPerSeason from "./is-there-more-anime/forEpisodesPerSeason.mjs"
import forLongestAnimePerSeason from "./is-there-more-anime/forLongestAnimePerSeason.mjs"
import forRecapsPerSeason from "./is-there-more-anime/forRecapsPerSeason.mjs"
import forMostPopularAnimePerSeason from "./is-anime-more-popular/forMostPopularAnimePerSeason.mjs"
import forTotalMembersPerSeason from "./is-anime-more-popular/forTotalMembersPerSeason.mjs"
import forMalRatings from "./is-anime-getting-better/forMalRatings.mjs"
import forTopAnimePerSeason from "./is-anime-getting-better/forTopAnimePerSeason.mjs"
import forTop20ByMembers from "./is-anime-more-serious/forTop20ByMembers.mjs"

export default function processDataForUI() {
  forAnimePerSeason()
  forEpisodesPerSeason()
  forRecapsPerSeason()
  forLongestAnimePerSeason()

  forMostPopularAnimePerSeason()
  forTotalMembersPerSeason()

  forMalRatings()
  forTopAnimePerSeason()

  forTop20ByMembers()
}

