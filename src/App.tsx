import { BrowserRouter, Routes, Route, NavLink } from 'react-router'
import AnimePerSeason from './AnimePerSeason'
import EpisodesPerSeason from './EpisodesPerSeason'
import './App.css';
import residentsleeper from './icons/residentsleeper.png'
import LongestAnimePerSeason from './LongestAnimePerSeason';

const Links = () => (
  <div className='flex flex-col'>
    <NavLink to='/anime-per-season' className='link'>Anime Per Season</NavLink>
    <NavLink to='/episodes-per-season' className='link'>Episodes Per Season</NavLink>
    <NavLink to='/resident-sleepers-per-season' className='link flex'>
      <img className='w-6 h-6' src={residentsleeper}/>s (Recaps) Per Season
    </NavLink>
    <NavLink to='/longest-anime-per-season' className='link'>Longest Anime Per Season</NavLink>
  </div>
)

const App = () => (
  <BrowserRouter>
    <Links />
    <Routes>
      <Route path='/' element={null} />
      <Route path='/anime-per-season' element={<AnimePerSeason />} />
      <Route path='/episodes-per-season' element={<EpisodesPerSeason />} />
      <Route path='/resident-sleepers-per-season' element={<EpisodesPerSeason />} />
      <Route path='/longest-anime-per-season' element={<LongestAnimePerSeason />} />
    </Routes>
  </BrowserRouter>
)

export default App
