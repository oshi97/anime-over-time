import cloneDeep from "lodash/cloneDeep.js";
import iterateThroughSeasons from "../iterateThroughSeasons.mjs";
import fs from 'fs'
import resolvePath from "../../resolvePath.mjs";

export default function forTotalMembersPerSeason() {
  const totalMembership = []
  iterateThroughSeasons((animeSeason) => {
    totalMembership.push(
      animeSeason.reduce((accum, a) => accum + a.membershipCount, 0)
    )
  })

  // TODO: Factor out this into a method, almost made an oopsies here already with the variable mutation
  const topNine = []
  iterateThroughSeasons((animeSeason) => {
    const sortedSeason = cloneDeep(animeSeason);
    sortedSeason.sort((a, b) => b.membershipCount - a.membershipCount)
    topNine.push(sortedSeason.slice(0,9).reduce((sum, a) => sum + a.membershipCount, 0))
  })

  const topThree = []
  iterateThroughSeasons((animeSeason) => {
    const sortedSeason = cloneDeep(animeSeason);
    sortedSeason.sort((a, b) => b.membershipCount - a.membershipCount)
    topThree.push(sortedSeason.slice(0,3).reduce((sum, a) => sum + a.membershipCount, 0))
  })

  const topOne = []
  iterateThroughSeasons((animeSeason) => {
    const sortedSeason = cloneDeep(animeSeason);
    const max = Math.max(...sortedSeason.map(a => a.membershipCount))
    topOne.push(max)
  })
  
  const top18 = []
  iterateThroughSeasons((animeSeason) => {
    const sortedSeason = cloneDeep(animeSeason);
    sortedSeason.sort((a, b) => b.membershipCount - a.membershipCount)
    top18.push(sortedSeason.slice(0,18).reduce((sum, a) => sum + a.membershipCount, 0))
  })

  
  fs.writeFileSync(resolvePath('../src/data/totalMembersPerSeason.json'), JSON.stringify({ totalMembership, topNine, topThree, topOne, top18 }))
}