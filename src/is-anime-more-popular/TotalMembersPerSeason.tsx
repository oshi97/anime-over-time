import { Line } from 'react-chartjs-2'
import getChartOptions from '../utils/getChartOptions'
import getSeasonLabels from '../utils/getSeasonLabels'
import {
  BLUE_BACKGROUND,
  BLUE_LINE,
  GREEN_BACKGROUND,
  GREEN_LINE,
  RED_BACKGROUND,
  RED_LINE,
  BLACK_LINE,
  BLACK_BACKGROUND,
  PURPLE_LINE,
  PURPLE_BACKGROUND
} from '../utils/colors'
import processedData from '../data/totalMembersPerSeason.json'

const data = {
  labels: getSeasonLabels(),
  datasets: [
    {
      label: 'Total MAL Members',
      data: processedData.totalMembership,
      borderColor: RED_LINE,
      backgroundColor: RED_BACKGROUND
    },
    {
      label: 'the top 18',
      data: processedData.top18,
      borderColor: PURPLE_LINE,
      backgroundColor: PURPLE_BACKGROUND,
    },
    {
      label: 'the top 9',
      data: processedData.topNine,
      borderColor: BLUE_LINE,
      backgroundColor: BLUE_BACKGROUND,
    },
    {
      label: 'the top 3',
      data: processedData.topThree,
      borderColor: GREEN_LINE,
      backgroundColor: GREEN_BACKGROUND,
    },
    {
      label: 'the one',
      data: processedData.topOne,
      borderColor: BLACK_LINE,
      backgroundColor: BLACK_BACKGROUND,
    }
  ]
}

const options = getChartOptions('Total # Members on MAL per Season')

export default function TotalMembersPerSeason() {
  return <Line options={options} data={data} />
}
