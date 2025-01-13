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
import top30 from '../data/top30ByMembers.json'

const data = {
  labels: getSeasonLabels(),
  datasets: [
    {
      label: 'Comedy',
      data: top30.map(
        season => season.shows.filter(a => a.manamiTags.includes('comedy')).length
      ),
      borderColor: RED_LINE,
      backgroundColor: RED_BACKGROUND
    },
    {
      label: 'Romance',
      data: top30.map(
        season => season.shows.filter(a => a.manamiTags.includes('romance')).length
      ),
      borderColor: PURPLE_LINE,
      backgroundColor: PURPLE_BACKGROUND
    },
    {
      label: 'Harem',
      data: top30.map(
        season => season.shows.filter(a => a.manamiTags.includes('harem')).length
      ),
      borderColor: BLUE_LINE,
      backgroundColor: BLUE_BACKGROUND
    },
    {
      label: 'Rom-com',
      data: top30.map(
        season =>
          season.shows.filter(
            a => a.manamiTags.includes('romance') && a.manamiTags.includes('comedy')
          ).length
      ),
      borderColor: GREEN_LINE,
      backgroundColor: GREEN_BACKGROUND
    },
    {
      label: 'Harem Rom-com',
      data: top30.map(
        season =>
          season.shows.filter(
            a =>
              a.manamiTags.includes('romance') &&
              a.manamiTags.includes('comedy') &&
              a.manamiTags.includes('harem')
          ).length
      ),
      borderColor: BLACK_LINE,
      backgroundColor: BLACK_BACKGROUND
    }
  ]
}

const options = getChartOptions(
  'Comedy, Romance, Harem Breakdown for Top 30 Anime per Season using manami-project'
)

export default function ByManamiTags30() {
  return <Line options={options} data={data} />
}
