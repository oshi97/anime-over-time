import { BrowserRouter, Routes, Route, NavLink } from 'react-router'
import type { PropsWithChildren } from 'react'
import AnimePerSeason from './AnimePerSeason'
import EpisodesPerSeason from './EpisodesPerSeason'
import './App.css'
import residentsleeper from './icons/residentsleeper.png'
import LongestAnimePerSeason from './LongestAnimePerSeason'
import RecapsPerSeason from './RecapsPerSeason'

// whee. tailwind
const Button = (
  props: PropsWithChildren<{
    to: string
  }>
) => (
  <NavLink to={props.to}>
  <button
    type='button'
    className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
  >
    {props.children}
  </button>
  </NavLink>
)

const Links = () => (
  <div className='mt-1'>
    <Button to='/anime-per-season'>Anime Per Season</Button>
    <Button to='/episodes-per-season'>Episodes Per Season</Button>
    <Button to='/resident-sleepers-per-season'>
      <div className='flex'>
        <img className='h-4' src={residentsleeper} />s (Recaps) Per Season
      </div>
    </Button>
    <Button to='/longest-anime-per-season'>Longest Anime Per Season</Button>
  </div>
)

const App = () => (
  <BrowserRouter>
    <Links />
    <Routes>
      <Route path='/' element={<div>Click a button doofus</div>} />
      <Route path='/anime-per-season' element={<AnimePerSeason />} />
      <Route path='/episodes-per-season' element={<EpisodesPerSeason />} />
      <Route path='/resident-sleepers-per-season' element={<RecapsPerSeason />} />
      <Route path='/longest-anime-per-season' element={<LongestAnimePerSeason />} />
    </Routes>
  </BrowserRouter>
)

export default App
