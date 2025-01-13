import iterateThroughSeasons from "../iterateThroughSeasons.mjs"
import fs from 'fs'
import resolvePath from "../../resolvePath.mjs"
import cloneDeep from "lodash/cloneDeep.js";

/**
 * Create a 2d array for the top 9 mal rated shows
 */
export default function forRatingStdDeviations() {
  const top3 = calcStdDeviations(3)
  const top9 = calcStdDeviations(9)
  const top20 = calcStdDeviations(20)
  fs.writeFileSync(resolvePath('../src/data/ratingStdDeviations.json'), JSON.stringify({ top3, top9, top20 }))
}


/**
 * @param {number} numShows The desired number of shows per season to take into account
 */
function calcStdDeviations(numShows) {
  const stdDeviations = []
  iterateThroughSeasons((animeSeason) => {
    const sortedSeason = cloneDeep(animeSeason);
    sortedSeason.sort((a, b) => b.malRating - a.malRating)
    const skimmedSeason = sortedSeason.slice(0, numShows)
    const stdDeviation = getStandardDeviation(skimmedSeason.map(a => a.malRating))
    stdDeviations.push(stdDeviation);
  })
  return stdDeviations
}

/** https://stackoverflow.com/questions/7343890/standard-deviation-javascript */
function getStandardDeviation (array) {
  const n = array.length
  const mean = array.reduce((a, b) => a + b) / n
  return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}