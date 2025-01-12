import { Line } from 'react-chartjs-2'
import './App.css'
import iterateThroughSeasons from './utils/iterateThroughSeasons'
import getChartOptions from './utils/getChartOptions'
import getSeasonLabels from './utils/getSeasonLabels'
import { BLUE_LINE, CHART_BACKGROUND, RED_LINE } from './utils/colors'

const animeData: { total: number; filtered: number }[] = []
iterateThroughSeasons((animeSeason) => {
  animeData.push(
    animeSeason.reduce(
      (accum, a) => {
        if (a.episodeCount > 50) {
          return { total: accum.total + a.episodeCount, filtered: accum.filtered }
        }
        return {
          total: accum.total + a.episodeCount,
          filtered: accum.filtered + a.episodeCount
        }
      },
      { total: 0, filtered: 0 }
    )
  )
})

export const data = {
  labels: getSeasonLabels(),
  datasets: [
    {
      label: 'Episodes per season',
      data: animeData.map(a => a.total),
      borderColor: RED_LINE,
      backgroundColor: CHART_BACKGROUND
    },
    {
      label: 'Episodes per season, filtering for < 50',
      data: animeData.map(a => a.filtered),
      borderColor: BLUE_LINE,
      backgroundColor: CHART_BACKGROUND,
      hidden: true
    }
  ]
}

const options = getChartOptions('# of Episodes per Season')

export default function EpisodesPerSeason() {
  return <Line options={options} data={data} />
}
