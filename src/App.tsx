import { useEffect, useState } from 'react'
import './App.css'
import { CardList } from './components/card-list/card-list.component'
import { CardDeail } from './components/card/card.component'
import SearchBox from './components/search-box/search-box.component'
import { getData } from './utils/data.utils'

export type MonsterProps = {
  id: string
  name: string
  email: string
  username: string
  company: CompanyProps
  onClick?: () => void
}

type CompanyProps = {
  name: string
  catchPhrase: string
}

type StateProps = {
  users: MonsterProps[]
  searchField: string
  current: MonsterProps | null
}

const App = () => {
  const [state, setState] = useState<StateProps>({
    users: [],
    searchField: '',
    current: null,
  })

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<MonsterProps[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      setState({ ...state, users })
    }
    fetchUsers()
  }, [])

  const handleInputChange = (e: string) => {
    setState({ ...state, searchField: e })
  }

  const handleClick = (item: MonsterProps) => {
    if (state.current) return setState({ ...state, current: null })
    return setState({ ...state, current: item })
  }

  const { users, searchField, current } = state

  let search = users.filter((item: MonsterProps) => {
    item.onClick = () => handleClick(item)
    return item.name.toLowerCase().includes(searchField.toLowerCase())
  })

  let result

  if (users.length === 0) {
    result = <h2>Loading...</h2>
  } else {
    result =
      search.length > 0 ? (
        <CardList search={search} />
      ) : (
        <h2>Don't have coincidences</h2>
      )
  }

  console.log(current)

  return (
    <div className='App'>
      <h1>Monsters</h1>
      {!current && <SearchBox onChange={handleInputChange} />}
      {current ? (
        <CardDeail {...current} />
      ) : (
        <div className='App-content'>{result}</div>
      )}
    </div>
  )
}

export default App
