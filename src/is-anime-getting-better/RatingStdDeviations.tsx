
import getChartOptions from '../utils/getChartOptions'
import getSeasonLabels from '../utils/getSeasonLabels'
import {
  BLUE_BACKGROUND,
  BLUE_LINE,
  GREEN_BACKGROUND,
  GREEN_LINE,
  RED_BACKGROUND,
  RED_LINE,
} from '../utils/colors'
import stdDeviations from '../data/ratingStdDeviations.json'
import JuicedLine from '../ui-blocks/JuicedLine'

const data = {
  labels: getSeasonLabels(),
  datasets: [
    {
      label: 'top 3',
      data: stdDeviations.top3,
      borderColor: RED_LINE,
      backgroundColor: RED_BACKGROUND
    },
    {
      label: 'top 9',
      data: stdDeviations.top9,
      borderColor: BLUE_LINE,
      backgroundColor: BLUE_BACKGROUND
    },
    {
      label: 'top 20',
      data: stdDeviations.top20,
      borderColor: GREEN_LINE,
      backgroundColor: GREEN_BACKGROUND
    },
  ]
}

const options = getChartOptions('Top 9 Anime Per Season')

export default function RatingStdDeviations() {
  return <JuicedLine options={options} data={data} />
}
