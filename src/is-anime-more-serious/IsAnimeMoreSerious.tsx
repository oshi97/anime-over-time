import NavButton from '../ui-blocks/NavButton'

const IsAnimeMoreSerious = () => (
  <div className='mt-1'>
    <NavButton to='/is-anime-more-serious' end={true}># of Comedy, Romance, Harem according to MAL</NavButton>
    <NavButton to='/is-anime-more-serious/manami' end={true}># of Comedy, Romance, Harem according to manami-project</NavButton>
    <NavButton to='/is-anime-more-serious/top-20' end={true}>Top 20 w/Genre Filtering</NavButton>
    <NavButton to='/is-anime-more-serious/genre-both' end={true}># of Comedy, Romance, Harem according to both</NavButton>
  </div>
)
export default IsAnimeMoreSerious
