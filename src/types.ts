/**
 * The data schema will be as follows
 *
 * Ignoring the favorites option on MAL because, well I have no idea how people use this feature lol
 * Quantifying the score distributions would be interesting but not sure how I would do that
 * Not even sure how to get that data right now lol, could be... unsupported?
 */
export interface AnimeData {
  membershipCount: number
  malRating: number
  // Romance, Comedy
  malGenres: string[]
  // Harem
  malThemes: string[]
  duration: string
  manamiTags: string[]
  malImageURL: string
  malSmallImageURL: string
  episodeCount: number
  title: string
  malRank: number
  malPopularity: number
}

export type SEASON = 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL'

export interface YearToSeasonToAnime {
  [key: number]: {
    [season in SEASON]: AnimeData[]
  }
}
