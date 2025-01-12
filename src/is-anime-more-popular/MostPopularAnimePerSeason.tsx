import { AnimeData } from '../types'
import AnimeList, { SeasonData } from '../ui-blocks/AnimeList'
import ImageWithPlaceholder from '../ui-blocks/ImageWithPlaceholder'
import mostPopularShows from '../data/mostPopularAnimePerSeason.json'

const numberFormat = new Intl.NumberFormat('en-EN')

const renderShow = (a: AnimeData) => (
  <div key={a.title} className='rounded p-1'>
    <ImageWithPlaceholder
      className='w-32 h-40'
      src={a.malImageURL}
      placeholderSrc={a.malSmallImageURL}
    />
    <div className='w-32 flex flex-col'>
      <div>
        <span className='font-bold text-sm'>{numberFormat.format(a.membershipCount)}</span>
        <span className='text-sm'> Members</span>
      </div>
      <div className='text-xs italic'>{a.title}</div>
      <span className='text-sm italic'> {a.malRating} / 10</span>
    </div>
  </div>
)

export default function MostPopularAnimePerSeason() {
  return <AnimeList seasonData={mostPopularShows as SeasonData[]} renderShow={renderShow} />
}