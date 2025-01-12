import { AnimeData } from './types'
import AnimeList, { SeasonData } from './ui-blocks/AnimeList'
import ImageWithPlaceholder from './ui-blocks/ImageWithPlaceholder'
import longestShows from './data/longestAnimePerSeason.json'

const renderShow = (a: AnimeData) => (
  <div key={a.title} className='rounded p-1'>
    <ImageWithPlaceholder
      className='w-32 h-40'
      src={a.malImageURL}
      placeholderSrc={a.malSmallImageURL}
    />
    <div className='w-32 flex flex-col'>
      <div>
        <span className='font-bold'>{a.episodeCount}</span> Episodes
      </div>
      <div className='text-xs'>{a.title}</div>
    </div>
  </div>
)

export default function LongestAnimePerSeason() {
  return <AnimeList seasonData={longestShows as SeasonData[]} renderShow={renderShow} />
}
