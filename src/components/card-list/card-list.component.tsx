import './card-list.style.css'
import { Card } from '../card/card.component'
import { MonsterProps } from '../../App'

type CardListProps = {
  search: MonsterProps[]
}

export function CardList({ search }: CardListProps) {
  return (
    <div className='card-list'>
      {search.map((item: MonsterProps) => {
        return (
          <Card key={item.id} {...item} name={item.name} email={item.email} />
        )
      })}
    </div>
  )
}
