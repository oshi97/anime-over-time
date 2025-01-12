

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
  ORANGE_LINE,
  ORANGE_BACKGROUND,
  BLACK_LINE,
  BLACK_BACKGROUND,
  PURPLE_LINE,
  PURPLE_BACKGROUND,
  YELLOW_LINE,
  YELLOW_BACKGROUND,
  LIGHT_BLUE_LINE,
  LIGHT_BLUE_BACKGROUND,
  BROWN_LINE,
  BROWN_BACKGROUND
} from '../utils/colors'
import processedData from '../data/malRatings.json'

const COLORS = [
  [RED_LINE, RED_BACKGROUND],
  [BLUE_LINE, BLUE_BACKGROUND],
  [GREEN_LINE, GREEN_BACKGROUND],
  [ORANGE_LINE, ORANGE_BACKGROUND],
  [PURPLE_LINE, PURPLE_BACKGROUND],
  [BLACK_LINE, BLACK_BACKGROUND],
  [YELLOW_LINE, YELLOW_BACKGROUND],
  [LIGHT_BLUE_LINE, LIGHT_BLUE_BACKGROUND],
  [BROWN_LINE, BROWN_BACKGROUND],
]

export const data = {
  labels: getSeasonLabels(),
  datasets: Object.keys(Array(9).fill(null)).map((si, i) => ({
    label: i,
    data: processedData[i],
    borderColor: COLORS[i][0],
    backgroundColor: COLORS[i][1]
  }))
}

const options = getChartOptions('Top 9 Anime Per Season')

export default function MalRatings() {
  return <Line options={options} data={data} />
}