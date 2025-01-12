import { Line } from 'react-chartjs-2'
import './App.css'
import iterateThroughSeasons from './utils/iterateThroughSeasons'
import getChartOptions from './utils/getChartOptions'
import getSeasonLabels from './utils/getSeasonLabels'
import { BLUE_BACKGROUND, BLUE_LINE, GREEN_BACKGROUND, GREEN_LINE, RED_BACKGROUND, RED_LINE } from './utils/colors'
import { cloneDeep } from 'lodash'

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

const topNine: number[] = []
iterateThroughSeasons((animeSeason, year, season) => {
  const sortedSeason = cloneDeep(animeSeason);
  sortedSeason.sort((a, b) => b.episodeCount - a.episodeCount)
  topNine.push(sortedSeason.slice(0,9).reduce((sum, a) => sum + a.episodeCount, 0) / 9)
})


export const data = {
  labels: getSeasonLabels(),
  datasets: [
    {
      label: 'Episodes per season',
      data: animeData.map(a => a.total),
      borderColor: RED_LINE,
      backgroundColor: RED_BACKGROUND
    },
    {
      label: 'Episodes per season, filtering for < 50',
      data: animeData.map(a => a.filtered),
      borderColor: BLUE_LINE,
      backgroundColor: BLUE_BACKGROUND,
      hidden: true
    },
    {
      label: 'Average of the top 9 largest shows per season',
      data: topNine,
      borderColor: GREEN_LINE,
      backgroundColor: GREEN_BACKGROUND,
      hidden: true
    }

  ]
}

const options = getChartOptions('# of Episodes per Season')

export default function EpisodesPerSeason() {
  return <Line options={options} data={data} />
}
