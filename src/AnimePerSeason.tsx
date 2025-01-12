import { Line } from 'react-chartjs-2'
import './App.css'
import getSeasonLabels from './utils/getSeasonLabels'
import iterateThroughSeasons from './utils/iterateThroughSeasons'
import getChartOptions from './utils/getChartOptions'
import { BLUE_BACKGROUND, BLUE_LINE, RED_BACKGROUND, RED_LINE } from './utils/colors'

const animeData: number[] = []
iterateThroughSeasons(animeSeason => {
  const seasonalCount = animeSeason.length
  animeData.push(seasonalCount)
})

const filteredData: number[] = []
iterateThroughSeasons(animeSeason => {
  const seasonalCount = animeSeason.filter(a => a.episodeCount > 6).length
  filteredData.push(seasonalCount)
})

export const data = {
  labels: getSeasonLabels(),
  datasets: [
    {
      label: 'Anime per season',
      data: animeData,
      borderColor: RED_LINE,
      backgroundColor: RED_BACKGROUND
    },
    {
      label: 'filtering episode count > 6',
      data: filteredData,
      borderColor: BLUE_LINE,
      backgroundColor: BLUE_BACKGROUND,
      hidden: true
    }
  ]
}

const options = getChartOptions('# of Seasonal Anime per Season')

export default function AnimePerSeason() {
  return <Line options={options} data={data} />
}
