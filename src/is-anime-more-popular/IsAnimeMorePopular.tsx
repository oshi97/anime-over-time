import NavButton from '../ui-blocks/NavButton'

const IsAnimeMorePopular = () => (
  <div className='mt-1'>
    <NavButton to='/is-anime-more-popular'>Total MAL Membership Per Season</NavButton>
    <NavButton to='/is-anime-more-popular/most-popular-anime'>Most Popular Anime Per Season</NavButton>
    <NavButton to='/is-anime-more-popular/total-members-averaged'>Total Members Averaged Per Anime</NavButton>
  </div>
)
export default IsAnimeMorePopular
