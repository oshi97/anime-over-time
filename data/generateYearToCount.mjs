
function addToCount() {
  const yearToSeasonToCount = {}
  if (!yearToSeasonToCount[year]) {
    yearToSeasonToCount[year] = {}
  }
  if (!yearToSeasonToCount[year][season]) {
    yearToSeasonToCount[year][season] = {
      titles: []
    }
  }
  const count = yearToSeasonToCount[year][season]?.count ?? 0;
  yearToSeasonToCount[year][season].count = count + 1;
  yearToSeasonToCount[year][season].titles.push(title)
  if (tags.includes('comedy')) {
    const comedyCount = yearToSeasonToCount[year][season]?.comedyCount ?? 0;
    yearToSeasonToCount[year][season].comedyCount = comedyCount + 1;
  }
  fs.writeFileSync(resolvePath('seasonToYearToCount.json'), JSON.stringify(yearToSeasonToCount, null, 2))
}



