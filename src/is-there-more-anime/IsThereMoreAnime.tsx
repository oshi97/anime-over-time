import NavButton from '../ui-blocks/NavButton'
import residentsleeper from '../icons/residentsleeper.png'

const IsThereMoreAnime = () => (
  <div className='mt-1'>
    <NavButton to='/is-there-more-anime' end={true}>
      Anime Per Season
    </NavButton>
    <NavButton to='/is-there-more-anime/episodes-per-season'>
      Episodes Per Season
    </NavButton>
    <NavButton to='/is-there-more-anime/resident-sleepers-per-season'>
      <div className='flex'>
        <img className='h-4' src={residentsleeper} />s (Recaps) Per Season
      </div>
    </NavButton>
    <NavButton to='/is-there-more-anime/longest-anime-per-season'>
      Longest Anime Per Season
    </NavButton>
  </div>
)
export default IsThereMoreAnime
