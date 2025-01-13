import { Line } from 'react-chartjs-2'
import getChartOptions from '../utils/getChartOptions'
import getSeasonLabels from '../utils/getSeasonLabels'
import {
  BLUE_BACKGROUND,
  BLUE_LINE,
  GREEN_BACKGROUND,
  GREEN_LINE,
  RED_BACKGROUND,
  RED_LINE
} from '../utils/colors'
import processedData from '../data/episodesPerSeason.json'

const data = {
  labels: getSeasonLabels(),
  datasets: [
    {
      label: 'Episodes per season',
      data: processedData.animeData.map(a => a.total),
      borderColor: RED_LINE,
      backgroundColor: RED_BACKGROUND
    },
    {
      label: 'Episodes per season, filtering for < 50',
      data: processedData.animeData.map(a => a.filtered),
      borderColor: BLUE_LINE,
      backgroundColor: BLUE_BACKGROUND,
      hidden: true
    },
    {
      label: 'Average of the top 9 largest shows per season',
      data: processedData.topNine,
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
