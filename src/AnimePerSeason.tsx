import React from 'react';
import { Line } from 'react-chartjs-2';
import './App.css';
import seasonalAnime from './seasonalAnime.min.json'
import iterateThroughSeasons from './iterateThroughSeasons.ts'
import getChartOptions from './getChartOptions.ts';

const seasons: string[] = [];
const animeData: number[] = []
iterateThroughSeasons((y, s) => {
  let seasonLabel = s.substring(0, 1)
  if (['SPRING', 'SUMMER'].includes(s)) {
    seasonLabel += s.substring(1, 2).toLowerCase()
  }
  seasons.push(`${y}`.substring(2) + '\'' + seasonLabel)
  const seasonalCount = seasonalAnime[y][s].length
  animeData.push(seasonalCount)
})

export const data = {
  labels: seasons,
  datasets: [
    {
      label: 'Anime per season',
      data: animeData,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const options = getChartOptions('# of Seasonal Anime per Season')

export default function AnimePerSeason() {
  return <Line options={options} data={data} />;
}
