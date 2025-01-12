import { Line } from 'react-chartjs-2'
import './App.css'
import seasonalAnime from './seasonalAnime.min.json'
import iterateThroughSeasons from './utils/iterateThroughSeasons'
import getChartOptions from './utils/getChartOptions'
import { AnimeData, SEASON } from './types'
import getSeasonLabels from './utils/getSeasonLabels'

interface RecapData {
  year: string,
  season: SEASON,
  recaps: AnimeData[]
}

const recapsPerSeason: RecapData[] = []
iterateThroughSeasons((animeSeason, year, season) => {
  recapsPerSeason.push({
    year,
    season,
    recaps: animeSeason.filter(a => a.manamiTags.includes('recap'))
  })
})

export const data = {
  labels: getSeasonLabels(),
  datasets: [
    {
      label: 'Recaps per season',
      data: recapsPerSeason,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }
  ]
}

const options = getChartOptions('# of Recaps per Season')

export default function RecapsPerSeason() {
  return <Line options={options} data={data} />
}
