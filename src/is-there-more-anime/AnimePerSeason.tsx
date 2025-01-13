import { Line } from 'react-chartjs-2'
import getSeasonLabels from '../utils/getSeasonLabels'
import getChartOptions from '../utils/getChartOptions'
import { BLUE_BACKGROUND, BLUE_LINE, GREEN_BACKGROUND, GREEN_LINE, ORANGE_BACKGROUND, ORANGE_LINE, PURPLE_BACKGROUND, PURPLE_LINE, RED_BACKGROUND, RED_LINE } from '../utils/colors'
import processedData from '../data/animePerSeason.json'

const data = {
  labels: getSeasonLabels(),
  datasets: [
    {
      label: 'anime per season',
      data: processedData.animeData,
      borderColor: RED_LINE,
      backgroundColor: RED_BACKGROUND
    },
    {
      label: 'episode count > 6',
      // wow my naming is freaking awful lol. I'd rather write this comment than update it right now though
      // and think myself rather witty
      data: processedData.filteredData,
      borderColor: BLUE_LINE,
      backgroundColor: BLUE_BACKGROUND
    },
    {
      label: 'episode count <= 6',
      data: processedData.lessEq6Ep,
      borderColor: GREEN_LINE,
      backgroundColor: GREEN_BACKGROUND,
      hidden: true
    },
    {
      label: 'members > 30k',
      data: processedData.greater30kMember,
      borderColor: ORANGE_LINE,
      backgroundColor: ORANGE_BACKGROUND,
      hidden: true
    },
    {
      label: 'members <= 30k',
      data: processedData.lessEq30kMember,
      borderColor: PURPLE_LINE,
      backgroundColor: PURPLE_BACKGROUND,
      hidden: true
    }
  ]
}

const options = getChartOptions('# of Seasonal Anime per Season')

export default function AnimePerSeason() {
  return <Line options={options} data={data} />
}
