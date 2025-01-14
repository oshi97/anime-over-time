import { BrowserRouter, Routes } from 'react-router'
import './App.css'
import NavButton from './ui-blocks/NavButton'
import { Route } from 'react-router'
import IsThereMoreAnime from './is-there-more-anime/IsThereMoreAnime'
import AnimePerSeason from './is-there-more-anime/AnimePerSeason'
import EpisodesPerSeason from './is-there-more-anime/EpisodesPerSeason'
import RecapsPerSeason from './is-there-more-anime/RecapsPerSeason'
import LongestAnimePerSeason from './is-there-more-anime/LongestAnimePerSeason'
import IsAnimeMorePopular from './is-anime-more-popular/IsAnimeMorePopular'
import MostPopularAnimePerSeason from './is-anime-more-popular/MostPopularAnimePerSeason'
import TotalMembersPerSeason from './is-anime-more-popular/TotalMembersPerSeason'
import TotalMembersAveraged from './is-anime-more-popular/TotalMembersAveraged'
import IsAnimeGettingBetter from './is-anime-getting-better/IsAnimeGettingBetter'
import MalRatings from './is-anime-getting-better/MalRatings'
import AverageMalRatings from './is-anime-getting-better/AverageMalRatings'
import TopAnimePerSeason from './is-anime-getting-better/TopAnimePerSeason'
import ByMalGenre from './is-anime-more-serious/ByMalGenre'
import IsAnimeMoreSerious from './is-anime-more-serious/IsAnimeMoreSerious'
import ByManamiTags from './is-anime-more-serious/ByManamiTags'
import Top30List from './is-anime-more-serious/Top30List'
// import GenresByBoth from './is-anime-more-serious/GenreByBoth'
import ByManamiTags30 from './is-anime-more-serious/ByManamiTags30'
import ByManamiTags30Weighted from './is-anime-more-serious/ByManamiTags30Weighted'
import ByManamiTags30WeightedAdjusted from './is-anime-more-serious/ByManamiTags30WeightedAdjusted'
import RatingStdDeviations from './is-anime-getting-better/RatingStdDeviations'
import ByMalGenre30 from './is-anime-more-serious/ByMalGenre30'
import { MovingAverageContext } from './context/MovingAverageContext'
import { useState, useContext } from 'react'
import Checkbox from './ui-blocks/Checkbox'
import GiggukNutshellGraph from './is-anime-more-popular/GigguksNutshellGraph'

const Links = () => (
  <div>
    <NavButton to='/is-there-more-anime'>Is There More Anime?</NavButton>
    <NavButton to='/is-anime-more-popular'>Is Anime More Popular?</NavButton>
    <NavButton to='/is-anime-getting-better'>Is Anime Getting Better?</NavButton>
    <NavButton to='/is-anime-more-serious'>Is Anime Getting More Serious?</NavButton>
  </div>
)

const ToggleMovingAverage = () => {
  const {  useMovingAverage, setUseMovingAverage } = useContext(MovingAverageContext)
  return (
    <div className='ml-2 mt-1.5'>
      <Checkbox checked={useMovingAverage} setChecked={setUseMovingAverage} text='Toggle 4-season Moving Average' id='toggle-moving-average' />
    </div>
  )
}

const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Links />
    <ToggleMovingAverage/>
    <Routes>
      <Route index element={<IsThereMoreAnime />} />
      <Route path='/is-there-more-anime/*' element={<IsThereMoreAnime />} />
      <Route path='/is-anime-more-popular/*' element={<IsAnimeMorePopular />} />
      <Route path='/is-anime-getting-better/*' element={<IsAnimeGettingBetter />} />
      <Route path='/is-anime-more-serious/*' element={<IsAnimeMoreSerious />} />
    </Routes>
    <Routes>
      <Route index element={<AnimePerSeason />} />
      <Route path='is-there-more-anime'>
        <Route index element={<AnimePerSeason />} />
        <Route path='episodes-per-season' element={<EpisodesPerSeason />} />
        <Route path='resident-sleepers-per-season' element={<RecapsPerSeason />} />
        <Route path='longest-anime-per-season' element={<LongestAnimePerSeason />} />
      </Route>
      <Route path='is-anime-more-popular'>
        <Route index element={<TotalMembersPerSeason />} />
        <Route path='most-popular-anime' element={<MostPopularAnimePerSeason />} />
        <Route path='total-members-averaged' element={<TotalMembersAveraged />} />
        <Route path='nutshell' element={<GiggukNutshellGraph />} />
      </Route>
      <Route path='is-anime-getting-better'>
        <Route index element={<MalRatings />} />
        <Route path='average-mal-ratings' element={<AverageMalRatings />} />
        <Route path='top-anime-per-season' element={<TopAnimePerSeason />} />
        <Route path='rating-std-deviations' element={<RatingStdDeviations />}/>
      </Route>
      <Route path='is-anime-more-serious'>
        <Route index element={<ByMalGenre />} />
        <Route path='mal-30' element={<ByMalGenre30 />} />
        <Route path='manami' element={<ByManamiTags />} />
        <Route path='top-30' element={<Top30List />} />
        {/* <Route path='genre-both' element={<GenresByBoth />} /> */}
        <Route path='manami-30' element={<ByManamiTags30 />} />
        <Route path='manami-30-weighted' element={<ByManamiTags30Weighted />} />
        <Route
          path='manami-30-weighted-adjusted'
          element={<ByManamiTags30WeightedAdjusted />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default function App() {
  const [useMovingAverage, setUseMovingAverage] = useState(true)

  return (
    <MovingAverageContext.Provider value={{useMovingAverage, setUseMovingAverage}}>
      <Router/>
    </MovingAverageContext.Provider>
  )
}
