import { Line } from 'react-chartjs-2'
import './App.css'
import getSeasonLabels from './utils/getSeasonLabels'
import getChartOptions from './utils/getChartOptions'
import { BLUE_BACKGROUND, BLUE_LINE, RED_BACKGROUND, RED_LINE } from './utils/colors'
import processedData from './data/animePerSeason.json'

export const data = {
  labels: getSeasonLabels(),
  datasets: [
    {
      label: 'Anime per season',
      data: processedData.animeData,
      borderColor: RED_LINE,
      backgroundColor: RED_BACKGROUND
    },
    {
      label: 'filtering episode count > 6',
      // wow my naming is freaking awful lol. I'd rather write this comment than update it right now though
      // and think myself rather witty
      data: processedData.filteredData,
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
