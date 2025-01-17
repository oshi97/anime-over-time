
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
import top30 from '../data/top30ByMembers.json'
import totalMembership from '../data/totalMembersPerSeason.json'
import { AnimeData } from '../types'
import JuicedLine from '../ui-blocks/JuicedLine'

const isRomance = (a: AnimeData) => a.manamiTags.includes('romance')
const isComedy = (a: AnimeData) => a.manamiTags.includes('comedy')
const isHarem = (a: AnimeData) => a.manamiTags.includes('harem')
const isSchool = (a: AnimeData) => a.manamiTags.includes('school')

const sumMembership = (prev: number, a: AnimeData) => {
  return prev + a.membershipCount
}

const totalMembers = totalMembership.totalMembership

const data = {
  labels: getSeasonLabels(),
  datasets: [
    {
      label: 'Comedy',
      data: top30.map(
        (season, i) =>
          season.shows.filter(isComedy).reduce(sumMembership, 0) / totalMembers[i]
      ),
      borderColor: RED_LINE,
      backgroundColor: RED_BACKGROUND
    },
    {
      label: 'Romance',
      data: top30.map(
        (season, i) =>
          season.shows.filter(isRomance).reduce(sumMembership, 0) / totalMembers[i]
      ),
      borderColor: PURPLE_LINE,
      backgroundColor: PURPLE_BACKGROUND
    },
    {
      label: 'Harem',
      data: top30.map(
        (season, i) =>
          season.shows.filter(isHarem).reduce(sumMembership, 0) / totalMembers[i]
      ),
      borderColor: BLUE_LINE,
      backgroundColor: BLUE_BACKGROUND
    },
    {
      label: 'Rom-com',
      data: top30.map(
        (season, i) =>
          season.shows.filter(a => isRomance(a) && isComedy(a)).reduce(sumMembership, 0) /
          totalMembers[i]
      ),
      borderColor: GREEN_LINE,
      backgroundColor: GREEN_BACKGROUND
    },
    {
      label: 'Harem Rom-com',
      data: top30.map(
        (season, i) =>
          season.shows
            .filter(a => isRomance(a) && isComedy(a) && isHarem(a))
            .reduce(sumMembership, 0) / totalMembers[i]
      ),
      borderColor: BLACK_LINE,
      backgroundColor: BLACK_BACKGROUND
    },
    {
      label: 'School',
      data: top30.map(
        (season, i) =>
          season.shows.filter(isSchool).reduce(sumMembership, 0) / totalMembers[i]
      ),
      borderColor: ORANGE_LINE,
      backgroundColor: ORANGE_BACKGROUND
    },
    {
      label: 'Shonen',
      data: top30.map(
        (season, i) =>
          season.shows.filter(a => a.manamiTags.includes('shounen') || a.manamiTags.includes('fighting-shounen')).reduce(sumMembership, 0) / totalMembers[i]
      ),
      borderColor: 'rgb(255, 234, 15)',
      backgroundColor: 'rgba(252, 124, 56, 0.5)',
      hidden: true
    },
  ]
}

const options = getChartOptions(
  'Top 30 Anime per Season using manami tags, weighted by MAL membership, adjusted to percentage of total season membership'
)

export default function ByManamiTags30WeightedAdjusted() {
  return <JuicedLine options={options} data={data} />
}
