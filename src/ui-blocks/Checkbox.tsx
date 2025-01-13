import { PropsWithChildren, ReactNode } from "react"

const checkboxClassnames =
  'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 '

const Checkbox = (
  props: PropsWithChildren<{
    checked: boolean
    setChecked: (v: boolean) => void
    text: string | ReactNode
    id: string
  }>
) => {
  return (
    <div className='flex items-center mb-4'>
      <input
        id={props.id}
        type='checkbox'
        checked={props.checked}
        onChange={e => props.setChecked(e.target.checked)}
        className={checkboxClassnames}
      />
      <label htmlFor={props.id} className='ms-2 text-sm font-medium'>
        {props.text}
      </label>
    </div>
  )
}

export default Checkbox
