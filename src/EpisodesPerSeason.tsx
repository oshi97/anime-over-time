import React from 'react';
import { Line } from 'react-chartjs-2';
import './App.css';
import seasonalAnime from './seasonalAnime.min.json'
import iterateThroughSeasons from './iterateThroughSeasons.ts'
import getChartOptions from './getChartOptions.ts';
import { AnimeData } from './types';

const seasons: string[] = [];
const animeData: { total: number, filtered: number }[] = [];
iterateThroughSeasons((y, s) => {
  let seasonLabel = s.substring(0, 1)
  if (['SPRING', 'SUMMER'].includes(s)) {
    seasonLabel += s.substring(1, 2).toLowerCase()
  }
  seasons.push(`${y}`.substring(2) + '\'' + seasonLabel)
  const animeSeason: AnimeData[] = seasonalAnime[y][s]
  animeData.push(animeSeason.reduce((accum, a) => {
    if (a.episodeCount > 100) {
      return { total: accum.total + a.episodeCount, filtered: accum.filtered }
    }
    return { total: accum.total + a.episodeCount, filtered: accum.filtered + a.episodeCount}
  }, { total: 0, filtered: 0}))
})

export const data = {
  labels: seasons,
  datasets: [
    {
      label: 'Episodes per season',
      data: animeData.map(a => a.total),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Episodes per season, filtering for < 100',
      data: animeData.map(a => a.filtered),
      borderColor: 'rgb(0, 99, 255)',
      backgroundColor: 'rgba(0, 99, 255, 0.5)',
    },
  ],
};

const options = getChartOptions('# of Episodes per Season')

export default function EpisodesPerSeason() {
  return <Line options={options} data={data} />;
}
