
import getChartOptions from '../utils/getChartOptions'
import getSeasonLabels from '../utils/getSeasonLabels'
import {
  BLACK_BACKGROUND,
  BLACK_LINE,
  BLUE_BACKGROUND,
  BLUE_LINE,
  GREEN_BACKGROUND,
  GREEN_LINE,
  ORANGE_BACKGROUND,
  ORANGE_LINE
} from '../utils/colors'
import processedData from '../data/totalMembersPerSeason.json'
import JuicedLine from '../ui-blocks/JuicedLine'

const data = {
  labels: getSeasonLabels(),
  datasets: [
    {
      label: 'the top 18',
      data: processedData.top18.map(m => m / 18),
      borderColor: ORANGE_LINE,
      backgroundColor: ORANGE_BACKGROUND
    },
    {
      label: 'the top 9',
      data: processedData.topNine.map(m => m / 9),
      borderColor: BLUE_LINE,
      backgroundColor: BLUE_BACKGROUND
    },
    {
      label: 'the top 3',
      data: processedData.topThree.map(m => m / 3),
      borderColor: GREEN_LINE,
      backgroundColor: GREEN_BACKGROUND
    },
    {
      label: 'the top one',
      data: processedData.topOne,
      borderColor: BLACK_LINE,
      backgroundColor: BLACK_BACKGROUND
    }
  ]
}

const options = getChartOptions('Average # Members on MAL per Anime')

export default function TotalMembersAveraged() {
  return <JuicedLine options={options} data={data} />
}
