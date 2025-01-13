// 
// import getChartOptions from '../utils/getChartOptions'
// import getSeasonLabels from '../utils/getSeasonLabels'
// import {
//   BLUE_BACKGROUND,
//   BLUE_LINE,
//   GREEN_BACKGROUND,
//   GREEN_LINE,
//   RED_BACKGROUND,
//   RED_LINE,
//   BLACK_LINE,
//   BLACK_BACKGROUND,
//   PURPLE_LINE,
//   PURPLE_BACKGROUND
// } from '../utils/colors'
// import top20 from '../data/top20ByMembers.json'
// import { AnimeData } from '../types'
// import JuicedLine from '../ui-blocks/JuicedLine'

// const isRomance = (a: AnimeData) =>
//   a.malGenres.includes('Romance') || a.manamiTags.includes('romance')
// const isComedy = (a: AnimeData) =>
//   a.malGenres.includes('Comedy') || a.manamiTags.includes('comedy')
// const isHarem = (a: AnimeData) =>
//   a.malThemes.includes('Harem') || a.manamiTags.includes('harem')

// const data = {
//   labels: getSeasonLabels(),
//   datasets: [
//     {
//       label: 'Comedy',
//       data: top20.map(season => season.shows.filter(isComedy).length),
//       borderColor: RED_LINE,
//       backgroundColor: RED_BACKGROUND
//     },
//     {
//       label: 'Romance',
//       data: top20.map(season => season.shows.filter(isRomance).length),
//       borderColor: PURPLE_LINE,
//       backgroundColor: PURPLE_BACKGROUND
//     },
//     {
//       label: 'Harem',
//       data: top20.map(season => season.shows.filter(isHarem).length),
//       borderColor: BLUE_LINE,
//       backgroundColor: BLUE_BACKGROUND
//     },
//     {
//       label: 'Rom-com',
//       data: top20.map(
//         season => season.shows.filter(a => isRomance(a) && isComedy(a)).length
//       ),
//       borderColor: GREEN_LINE,
//       backgroundColor: GREEN_BACKGROUND
//     },
//     {
//       label: 'Harem Rom-com',
//       data: top20.map(
//         season =>
//           season.shows.filter(a => isHarem(a) && isRomance(a) && isComedy(a)).length
//       ),
//       borderColor: BLACK_LINE,
//       backgroundColor: BLACK_BACKGROUND
//     }
//   ]
// }

// const options = getChartOptions(
//   'Genre Breakdown for Top 20 Anime per Season using both manami-database and MAL'
// )

// export default function GenresByBoth() {
//   return (
//     <>
//       <JuicedLine options={options} data={data} />
//       <div className='font-semibold'>
//         Turns out MAL is a strict subset of manami WHOOPS who woulda guessed
//       </div>
//     </>
//   )
// }
