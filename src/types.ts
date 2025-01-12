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
  malGenres: string[]
  malThemes: string[]
  manamiTags: string[]
  malImageURL: string
  episodeCount: number
  title: string
}

export type SEASON = 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL'

export interface YearToSeasonToAnime {
  [key: number]: {
    [season in SEASON]: AnimeData[]
  }
}