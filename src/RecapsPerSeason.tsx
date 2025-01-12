import { Line } from 'react-chartjs-2'
import './App.css'
import getChartOptions from './utils/getChartOptions'
import { AnimeData } from './types'
import getSeasonLabels from './utils/getSeasonLabels'
import AnimeList, { SeasonData } from './ui-blocks/AnimeList'
import ImageWithPlaceholder from './ui-blocks/ImageWithPlaceholder'
import recapsPerSeason from './data/recapsPerSeason.json'

export const data = {
  labels: getSeasonLabels(),
  datasets: [
    {
      label: 'Recaps per season',
      data: recapsPerSeason.map(a => a.shows.length),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }
  ]
}

const options = getChartOptions('# of Recaps per Season')

const renderShow = (a: AnimeData) => (
  <div key={a.title} className='rounded p-1'>
    <ImageWithPlaceholder
      className='w-32 h-40'
      src={a.malImageURL}
      placeholderSrc={a.malSmallImageURL}
    />
    <div className='w-32 flex flex-col'>
      <div>
        <span className='font-bold text-sm'>{a.episodeCount}</span> Episodes
      </div>
      <div>
        <span className='italic'>{a.duration}</span>
      </div>
      <div className='text-xs'>{a.title}</div>
    </div>
  </div>
)

export default function RecapsPerSeason() {
  return (
    <>
      <Line options={options} data={data} />
      <AnimeList seasonData={recapsPerSeason as SeasonData[]} renderShow={renderShow} />
    </>
  )
}
