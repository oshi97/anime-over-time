import React from "react";
import { BrowserRouter, Routes, Route, NavLink  } from "react-router";
import AnimePerSeason from "./AnimePerSeason.tsx";
import EpisodesPerSeason from "./EpisodesPerSeason.tsx";

const Links = () => (
  <div>
    <NavLink to='/anime-per-season'>
      Anime Per Season
    </NavLink>
    <NavLink to='/episodes-per-season'>
      Episodes Per Season
    </NavLink>
  </div>
)

const App = () => (
  <BrowserRouter>
    <Links/>
    <Routes>
      <Route path="/" element={null}/>
      <Route path="/anime-per-season" element={<AnimePerSeason />} />
      <Route path="/episodes-per-season" element={<EpisodesPerSeason />} />
    </Routes>
  </BrowserRouter>
)

export default App