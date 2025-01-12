import { NavLink } from 'react-router'
import type { PropsWithChildren } from 'react'

const CLASSNAMES =
  'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'

const NavButton = (
  props: PropsWithChildren<{
    to: string,
    end?: boolean
  }>
) => (
  <NavLink end={props.end} to={props.to}>
    {({ isActive }) => {
      return (
        <button
          type='button'
          // whee. tailwind
          className={isActive ? CLASSNAMES + ' underline' : CLASSNAMES}
        >
          {props.children}
        </button>
      )
    }}
  </NavLink>
)

export default NavButton
