import { cloneDeep } from "lodash";
import { AnimeData, SEASON } from "./types";
import iterateThroughSeasons from "./utils/iterateThroughSeasons";
import AnimeList from "./ui-blocks/AnimeList";
import ImageWithPlaceholder from "./ui-blocks/ImageWithPlaceholder";

interface LongestShows {
  season: SEASON,
  year: string,
  shows: AnimeData[]
}

const longestShows: LongestShows[] = []
iterateThroughSeasons((animeSeason, year, season) => {
  const sortedSeason = cloneDeep(animeSeason);
  sortedSeason.sort((a, b) => b.episodeCount - a.episodeCount)
  longestShows.push({
    year,
    season,
    // Probably don't need more than 9 shows
    shows: sortedSeason.slice(0,9)
  })
})

const renderShow = (a: AnimeData) => (
  <div key={a.title} className='rounded p-1'>
    <ImageWithPlaceholder className='w-32 h-40' src={a.malImageURL} placeholderSrc={a.malSmallImageURL}/>
    <div className='w-32 flex flex-col'>
      <div><span className='font-bold'>{a.episodeCount}</span> Episodes</div>
      <div className="text-xs">{a.title}</div>
    </div>
  </div>
)
  

export default function LongestAnimePerSeason() {
  return (
    <AnimeList
      seasonData={longestShows}
      renderShow={renderShow}
    />
  )
}