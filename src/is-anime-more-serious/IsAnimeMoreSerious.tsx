import NavButton from '../ui-blocks/NavButton'

const IsAnimeMoreSerious = () => (
  <div className='mt-1'>
    <NavButton to='/is-anime-more-serious' end={true}>
      Genre Breakdown, MAL, top 20
    </NavButton>
    <NavButton to='/is-anime-more-serious/mal-30' end={true}>
      MAL, top 30
    </NavButton>
    <NavButton to='/is-anime-more-serious/manami' end={true}>
      Genre Breakdown, manami, top 20
    </NavButton>
    <NavButton to='/is-anime-more-serious/top-30' end={true}>
      Top 30 List w/Genre Filtering
    </NavButton>
    {/* <NavButton to='/is-anime-more-serious/genre-both' end={true}>
      # of Comedy, Romance, Harem according to both
    </NavButton> */}
    <NavButton to='/is-anime-more-serious/manami-30' end={true}>
      {' '}
      manami (Top 30)
    </NavButton>
    <NavButton to='/is-anime-more-serious/manami-30-weighted' end={true}>
      {' '}
      manami (Top 30) Weighted
    </NavButton>
    <NavButton to='/is-anime-more-serious/manami-30-weighted-adjusted' end={true}>
      {' '}
      manami (Top 30) Weighted, Adjusted
    </NavButton>
  </div>
)
export default IsAnimeMoreSerious
