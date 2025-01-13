import getChartOptions from '../utils/getChartOptions'
import getSeasonLabels from '../utils/getSeasonLabels'
import {
  BLUE_BACKGROUND,
  BLUE_LINE,
  GREEN_BACKGROUND,
  GREEN_LINE,
  PURPLE_BACKGROUND,
  PURPLE_LINE,
  RED_BACKGROUND,
  RED_LINE
} from '../utils/colors'
import processedData from '../data/episodesPerSeason.json'
import JuicedLine from '../ui-blocks/JuicedLine'

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
      label: 'shows with < 50 episodes',
      data: processedData.animeData.map(a => a.filtered),
      borderColor: BLUE_LINE,
      backgroundColor: BLUE_BACKGROUND
    },
    {
      label: 'Average of the top 9 largest shows per season',
      data: processedData.topNine,
      borderColor: GREEN_LINE,
      backgroundColor: GREEN_BACKGROUND,
      hidden: true
    },
    {
      label: 'largest show per season',
      data: processedData.topOne,
      borderColor: PURPLE_LINE,
      backgroundColor: PURPLE_BACKGROUND,
      hidden: true
    }
  ]
}

const options = getChartOptions('# of Episodes per Season')

export default function EpisodesPerSeason() {
  return <JuicedLine options={options} data={data} />
}
