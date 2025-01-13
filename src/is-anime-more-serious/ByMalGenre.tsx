
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
  PURPLE_BACKGROUND,
  ORANGE_LINE,
  ORANGE_BACKGROUND
} from '../utils/colors'
import top20 from '../data/top20ByMembers.json'
import JuicedLine from '../ui-blocks/JuicedLine'

const data = {
  labels: getSeasonLabels(),
  datasets: [
    {
      label: 'Comedy',
      data: top20.map(
        season => season.shows.filter(a => a.malGenres.includes('Comedy')).length
      ),
      borderColor: RED_LINE,
      backgroundColor: RED_BACKGROUND
    },
    {
      label: 'Romance',
      data: top20.map(
        season => season.shows.filter(a => a.malGenres.includes('Romance')).length
      ),
      borderColor: PURPLE_LINE,
      backgroundColor: PURPLE_BACKGROUND
    },
    {
      label: 'Harem',
      data: top20.map(
        season => season.shows.filter(a => a.malThemes.includes('Harem')).length
      ),
      borderColor: BLUE_LINE,
      backgroundColor: BLUE_BACKGROUND
    },
    {
      label: 'Rom-com',
      data: top20.map(
        season =>
          season.shows.filter(
            a => a.malGenres.includes('Romance') && a.malGenres.includes('Comedy')
          ).length
      ),
      borderColor: GREEN_LINE,
      backgroundColor: GREEN_BACKGROUND
    },
    {
      label: 'Harem Rom-com',
      data: top20.map(
        season =>
          season.shows.filter(
            a =>
              a.malGenres.includes('Romance') &&
              a.malGenres.includes('Comedy') &&
              a.malThemes.includes('Harem')
          ).length
      ),
      borderColor: BLACK_LINE,
      backgroundColor: BLACK_BACKGROUND
    },
    {
      label: 'School',
      data: top20.map(
        season =>
          season.shows.filter(
            a => a.malThemes.includes('School')
          ).length
      ),
      borderColor: ORANGE_LINE,
      backgroundColor: ORANGE_BACKGROUND
    }
  ]
}

const options = getChartOptions(
  'Genre Breakdown for Top 20 Anime per Season using MAL'
)

export default function ByMalGenre() {
  return <JuicedLine options={options} data={data} />
}
