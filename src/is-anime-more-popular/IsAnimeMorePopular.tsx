import NavButton from '../ui-blocks/NavButton'

const IsAnimeMorePopular = () => (
  <div className='mt-1'>
    <NavButton to='/is-anime-more-popular' end={true}>
      Total MAL Membership Per Season
    </NavButton>
    <NavButton to='/is-anime-more-popular/most-popular-anime'>
      Most Popular Anime Per Season
    </NavButton>
    <NavButton to='/is-anime-more-popular/total-members-averaged'>
      Total Members Averaged Per Anime
    </NavButton>
    <NavButton to='/is-anime-more-popular/nutshell'>
      Gigguk's Nutshells in a Nutshell
    </NavButton>
  </div>
)
export default IsAnimeMorePopular
