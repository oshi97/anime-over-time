import { JSX } from 'react'
import { AnimeData, SEASON } from '../types'

export interface SeasonData {
  season: SEASON
  year: string
  shows: AnimeData[]
}

export default function AnimeList(props: {
  seasonData: SeasonData[]
  renderShow: (a: AnimeData) => JSX.Element
}) {
  return (
    <ul>
      {props.seasonData.map(season => {
        return (
          <li key={season.year + season.season} className='border flex'>
            <div className='w-32'>
              {season.year} {season.season}
            </div>
            {season.shows.map(props.renderShow)}
          </li>
        )
      })}
    </ul>
  )
}
