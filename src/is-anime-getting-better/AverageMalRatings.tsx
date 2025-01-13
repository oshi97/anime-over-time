
import getChartOptions from '../utils/getChartOptions'
import getSeasonLabels from '../utils/getSeasonLabels'
import { RED_BACKGROUND, RED_LINE } from '../utils/colors'
import processedData from '../data/malRatings.json'
import JuicedLine from '../ui-blocks/JuicedLine'

const averageRatings = []
// i counts from 0 to ~84
for (let i = 0; i < processedData[0].length; i++) {
  // j counts from 0 to 8
  let total = 0
  for (let j = 0; j < processedData.length; j++) {
    // We need to reverse the polarity of the array, (is that an okay word to use here?)
    // And then take the new averages
    // ... just kidding I can just add the numbers, lol
    total += processedData[j][i]
  }
  averageRatings.push(total / 9)
}

const data = {
  labels: getSeasonLabels(),
  datasets: [
    {
      label: 'Average of the top 9',
      data: averageRatings,
      borderColor: RED_LINE,
      backgroundColor: RED_BACKGROUND
    }
  ]
}

const options = getChartOptions('Average of the Top 9 Anime Per Season')

export default function AverageMalRatings() {
  return <JuicedLine options={options} data={data} />
}
