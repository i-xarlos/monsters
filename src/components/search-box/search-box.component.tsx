import { ChangeEvent } from 'react'
import './search-box.styles.css'

type SearchBoxProps = {
  onChange: (val: string) => void
}

export default function SearchBox({ onChange }: SearchBoxProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val: string = e.target.value
    onChange(val)
  }

  return (
    <input
      className='search-box'
      type='search'
      placeholder='Search monsters'
      onChange={e => handleInputChange(e)}
    />
  )
}
