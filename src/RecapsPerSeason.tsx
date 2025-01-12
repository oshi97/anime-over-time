import { Line } from 'react-chartjs-2'
import './App.css'
import seasonalAnime from './seasonalAnime.min.json'
import iterateThroughSeasons from './utils/iterateThroughSeasons'
import getChartOptions from './utils/getChartOptions'
import { AnimeData, SEASON } from './types'
import getSeasonLabels from './utils/getSeasonLabels'
import AnimeList, { SeasonData } from './ui-blocks/AnimeList'

const recapsPerSeason: SeasonData[] = []
iterateThroughSeasons((animeSeason, year, season) => {
  recapsPerSeason.push({
    year,
    season,
    shows: animeSeason.filter(a => a.manamiTags.includes('recap'))
  })
})

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
    <img className='w-32 h-40' src={a.malImageURL}/>
    <div className='w-32 flex flex-col'>
      <div><span className='font-bold'>{a.episodeCount}</span> Episodes</div>
      <div className="text-xs">{a.title}</div>
    </div>
  </div>
)

export default function RecapsPerSeason() {
  return (
  <>
    <Line options={options} data={data} />
    <AnimeList seasonData={recapsPerSeason} renderShow={renderShow}/>
  </>
  )
}
