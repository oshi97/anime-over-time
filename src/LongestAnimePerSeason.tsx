import { cloneDeep } from "lodash";
import { AnimeData, SEASON } from "./types";
import iterateThroughSeasons from "./utils/iterateThroughSeasons";

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

export default function LongestAnimePerSeason() {
  return (
    <ul>
      {longestShows.map(season => {
        return (
          <li key={season.year + season.season} className='border flex'>
            <div className='w-32'>{season.year} {season.season}</div>
            {season.shows.map(a => (
              <div key={a.title}>
                <img className='w-32 h-40' src={a.malImageURL}/>
                <div className='w-32 flex flex-col'>
                  <div>{a.title}</div>
                  <div><span className='font-bold'>{a.episodeCount}</span> Episodes</div>
                </div>
              </div>
            ))}
          </li>
        )
      })}
    </ul>
  )
}