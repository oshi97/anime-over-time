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

const Links = () => (
  <div>
    <NavButton to='/is-there-more-anime'>Is There More Anime?</NavButton>
    <NavButton to='/is-anime-more-popular'>Is Anime More Popular?</NavButton>
    <NavButton to='/is-anime-getting-better'>Is Anime Getting Better?</NavButton>
  </div>
)

const App = () => (
  <BrowserRouter>
    <Links />
    <Routes>
      <Route index element={<IsThereMoreAnime />} />
      <Route path='is-there-more-anime/*' element={<IsThereMoreAnime />} />
      <Route path='is-anime-more-popular/*' element={<IsAnimeMorePopular />} />
      <Route path='is-anime-getting-better/*' element={<IsAnimeGettingBetter />} />
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
        <Route path='most-popular-anime' element={<MostPopularAnimePerSeason/>} />
        <Route path='total-members-averaged' element={<TotalMembersAveraged/>} />
      </Route>
      <Route path='is-anime-getting-better'>
        <Route index element={<MalRatings />} />
        <Route path='average-mal-ratings' element={<AverageMalRatings />} />
        <Route path='top-anime-per-season' element={<TopAnimePerSeason />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
