import NavButton from '../ui-blocks/NavButton'

const IsAnimeMoreSerious = () => (
  <div className='mt-1'>
    <NavButton to='/is-anime-more-serious' end={true}># of Comedy, Romance, Harem according to MAL</NavButton>
    <NavButton to='/is-anime-more-serious/manami' end={true}># of Comedy, Romance, Harem according to manami-project</NavButton>
    <NavButton to='/is-anime-more-serious/top-30' end={true}>Top 30 w/Genre Filtering</NavButton>
    <NavButton to='/is-anime-more-serious/genre-both' end={true}># of Comedy, Romance, Harem according to both</NavButton>
    <NavButton to='/is-anime-more-serious/manami-30' end={true}> manami graph (Top 30)</NavButton>
    <NavButton to='/is-anime-more-serious/manami-30-weighted' end={true}> manami graph (Top 30) Weighted</NavButton>
    <NavButton to='/is-anime-more-serious/manami-30-weighted-adjusted' end={true}> manami graph (Top 30) Weighted Adjusted</NavButton>
  </div>
)
export default IsAnimeMoreSerious
