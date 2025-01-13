import { AnimeData } from '../types'
import AnimeList, { SeasonData } from '../ui-blocks/AnimeList'
import ImageWithPlaceholder from '../ui-blocks/ImageWithPlaceholder'
import top20 from '../data/top20ByMembers.json'
import { useState, PropsWithChildren, useMemo, useCallback, ReactNode } from 'react';
import classNames from 'classnames';

const numberFormat = new Intl.NumberFormat('en-EN')
const checkboxClassnames =
  "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "

const GenreCheckbox = (props: PropsWithChildren<{
  checked: boolean,
  setChecked: (v: boolean) => void,
  text: string | ReactNode
  id: string
}>) => {
  return (
  <div className="flex items-center mb-4">
    <input id={props.id} type="checkbox" checked={props.checked} onChange={(e) => props.setChecked(e.target.checked)}
    className={checkboxClassnames}/>
    <label htmlFor={props.id} className="ms-2 text-sm font-medium">{props.text}</label>
  </div>
  )
}

export default function Top20List() {
  const [manamiComedy, setManamiComedy] = useState(false);
  const [manamiHarem, setManamiHarem] = useState(false);
  const [manamiRomance, setManamiRomance] = useState(false);
  const [malComedy, setMalComedy] = useState(false);
  const [malHarem, setMalHarem] = useState(false);
  const [malRomance, setMalRomance] = useState(false);
  const [hideDisabled, setHideDisabled] = useState(false);
  const [useOr, setUseOr] = useState(true);

  const renderShow = useCallback((a: AnimeData) => {
    const isDisabledManami = () => {
      const manamiFilters = Object.entries({
        comedy: manamiComedy,
        romance: manamiRomance,
        harem: manamiHarem
      }).filter(([k, v]) => v).map(([k]) => k)

      if (useOr && manamiFilters.length === 0) {
        return true
      }

      // we get the "no filters checked -> show all" behavior for "free" this way
      // but gyatt dyamn is this uggo
      for (const filter of manamiFilters) {
        if (!a.manamiTags.includes(filter)) {
          return true
        }
      }
      return false
    }
    const isDisabledMal = () => {
      const malFilters = Object.entries({
        Comedy: malComedy,
        Romance: malRomance,
        Harem: malHarem
      }).filter(([k, v]) => v).map(([k]) => k)
      if (a.title.includes('Hako')) {
        console.log(a.malGenres, a.malThemes, malFilters)
      }
      if (useOr && malFilters.length === 0) {
        return true
      }
      for (const filter of malFilters) {
        if (!a.malGenres.includes(filter) && !a.malThemes.includes(filter)) {
          return true
        }
      }
      return false
    }
    const mal = isDisabledMal()
    const manami = isDisabledManami()
    // I know it says !useOr and then I or things here
    // but negation is weird okay
    const isDisabled = useOr ? mal && manami : mal || manami;

    if (hideDisabled && isDisabled) {
      return null
    }

    const getBgColor = () => {
      if (!useOr) {
        return 'bg-blue-100'
      }
      if (!mal && !manami) {
        return 'bg-green-100'
      }
      if (mal) {
        return 'bg-red-100'
      }
      if (manami) {
        return 'bg-blue-100'
      }
    } 

    return (
      <div key={a.title} className={'rounded p-1' + (isDisabled ? '' : ' ' + getBgColor())}>
        <ImageWithPlaceholder
          className={'w-32 h-40' + (isDisabled ? ' grayscale relative' : '')}
          src={a.malImageURL}
          placeholderSrc={a.malSmallImageURL}
        />
        <div className='w-32 flex flex-col'>
          <div>
            <span className='font-bold text-sm'>{numberFormat.format(a.membershipCount)}</span>
            <span className='text-sm'> Members</span>
          </div>
          <div>
            <span className='text-sm'>Popularity: </span>
            <span className='font-semibold text-sm'>#{numberFormat.format(a.malPopularity)}</span>
          </div>
          <div className='text-xs italic'>{a.title}</div>
          <span className='text-sm italic'> {a.malRating} / 10</span>
        </div>
      </div>
    )
  }, [manamiComedy, manamiRomance, manamiHarem, malComedy, malHarem, malRomance, hideDisabled, useOr])

  return (
      <div className='flex relative'>
        <div className='bg-blue-100 whitespace-nowrap sticky top-0 left-0 h-fit rounded'>
          <div className='flex flex-col'>
            <div className='m-1 mr-2'>
              <div className='mb-1'>Filter by Genre</div>
              <div className='py-1 font-light italic'>manami-project</div>
              <GenreCheckbox checked={manamiComedy} setChecked={setManamiComedy} text='Comedy' id='manami-comedy'/>
              <GenreCheckbox checked={manamiHarem} setChecked={setManamiHarem} text='Harem' id='manami-harem'/>
              <GenreCheckbox checked={manamiRomance} setChecked={setManamiRomance} text='Romance' id='manami-romance'/>
            </div>
            <div className='m-1 mr-2'>
            <div className='py-1 font-light italic'>myanimelist</div>
              <GenreCheckbox checked={malComedy} setChecked={setMalComedy} text='Comedy' id='mal-comedy'/>
              <GenreCheckbox checked={malHarem} setChecked={setMalHarem} text='Harem' id='mal-harem'/>
              <GenreCheckbox checked={malRomance} setChecked={setMalRomance} text='Romance' id='mal-romance'/>
            </div>
          </div>
          <GenreCheckbox checked={hideDisabled} setChecked={setHideDisabled} text={<span className='text-xs font-light'>Hide Unmatched</span>} id='hide-unmatched'/>
          <GenreCheckbox checked={useOr} setChecked={setUseOr} text={<span className='text-xs font-light'>Use OR Filter</span>} id='use-or'/>
        </div>
        <AnimeList seasonData={top20 as SeasonData[]} renderShow={renderShow} />
      </div>
  )
}