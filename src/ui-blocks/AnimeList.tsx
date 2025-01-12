export default function LongestAnimePerSeason() {
  return (
    <ul>
      {longestShows.map(season => {
        return (
          <li key={season.year + season.season} className='border flex'>
            <div className='w-32'>{season.year} {season.season}</div>
            {season.shows.map(a => (
              <div key={a.title} className='rounded p-1'>
                <img className='w-32 h-40' src={a.malImageURL}/>
                <div className='w-32 flex flex-col'>
                  <div><span className='font-bold'>{a.episodeCount}</span> Episodes</div>
                  <div className="text-xs">{a.title}</div>
                </div>
              </div>
            ))}
          </li>
        )
      })}
    </ul>
  )
}