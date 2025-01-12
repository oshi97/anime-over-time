import { Line } from 'react-chartjs-2'
import './App.css'
import seasonalAnime from './seasonalAnime.min.json'
import iterateThroughSeasons from './utils/iterateThroughSeasons'
import getChartOptions from './utils/getChartOptions'
import { AnimeData } from './types'
import getSeasonLabels from './utils/getSeasonLabels'

const animeData: { episodes: number, entries: number}[] = []
iterateThroughSeasons((y, s) => {
  const animeSeason: AnimeData[] = seasonalAnime[y][s]
})

export const data = {
  labels: getSeasonLabels(),
  datasets: [
    {
      label: 'Recaps per season',
      data: animeData.map(a => a.total),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }
  ]
}

const options = getChartOptions('# of Recaps per Season')

export default function RecapsPerSeason() {
  return <Line options={options} data={data} />
}
