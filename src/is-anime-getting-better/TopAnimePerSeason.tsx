import { AnimeData } from '../types'
import AnimeList, { SeasonData } from '../ui-blocks/AnimeList'
import ImageWithPlaceholder from '../ui-blocks/ImageWithPlaceholder'
import topAnimePerSeason from '../data/topAnimePerSeason.json'

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
        <span className='text-sm italic'>
          <span className='font-bold'>{a.malRating}</span> / 10
        </span>
      </div>
      <div>
        Ranked: <span className='font-semibold'>#{a.malRank}</span>
      </div>
      <div className='text-xs my-1 italic'>{a.title}</div>
      <span className='text-sm'>
        {numberFormat.format(a.membershipCount)}
        <span className='font-light'> Members</span>
      </span>
    </div>
  </div>
)

export default function TopAnimePerSeason() {
  return (
    <AnimeList seasonData={topAnimePerSeason as SeasonData[]} renderShow={renderShow} />
  )
}
