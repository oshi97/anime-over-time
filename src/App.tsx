import { BrowserRouter, Routes } from 'react-router'
import './App.css'
import NavButton from './ui-blocks/NavButton'
import { Route } from 'react-router'
import IsThereMoreAnime from './is-there-more-anime/IsThereMoreAnime'
import AnimePerSeason from './is-there-more-anime/AnimePerSeason'
import EpisodesPerSeason from './is-there-more-anime/EpisodesPerSeason'
import RecapsPerSeason from './is-there-more-anime/RecapsPerSeason'
import LongestAnimePerSeason from './is-there-more-anime/LongestAnimePerSeason'

const Links = () => (
  <div className='mt-1'>
    <NavButton to='/is-there-more-anime'>Is There More Anime?</NavButton>
  </div>
)

const App = () => (
  <BrowserRouter>
    <Links />
    <Routes>
      <Route index element={<IsThereMoreAnime />} />
      <Route path='is-there-more-anime/*' element={<IsThereMoreAnime />} />
    </Routes>
    <Routes>
      <Route index element={<AnimePerSeason />} />
      <Route path='is-there-more-anime'>
        <Route index element={<AnimePerSeason />} />
        <Route path='episodes-per-season' element={<EpisodesPerSeason />} />
        <Route path='resident-sleepers-per-season' element={<RecapsPerSeason />} />
        <Route path='longest-anime-per-season' element={<LongestAnimePerSeason />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App
