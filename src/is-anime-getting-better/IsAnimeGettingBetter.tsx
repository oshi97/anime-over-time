import NavButton from '../ui-blocks/NavButton'

const IsAnimeGettingBetter = () => (
  <div className='mt-1'>
    <NavButton to='/is-anime-getting-better' end={true}>MAL Ratings Over the Years</NavButton>
    <NavButton to='/is-anime-getting-better/average-mal-ratings' end={true}>Average MAL Ratings of the top 9 Anime Per Year</NavButton>
  </div>
)
export default IsAnimeGettingBetter
