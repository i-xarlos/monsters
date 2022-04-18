import close from '../../assets/close.png'
import './card.list.css'
import { MonsterProps } from '../../App'
import { FC, ReactElement, ReactNode } from 'react'

interface ICardProps extends MonsterProps {
  className?: string
  children?: ReactNode
}

export const Card: FC<ICardProps> = ({
  id,
  name,
  email,
  onClick,
  className,
  children,
}): ReactElement => {
  return (
    <div
      className={`card-container ${className ? className : ''}`}
      onClick={onClick}
    >
      <img
        className='image'
        alt={name}
        src={`https://robohash.org/${id}?size=200x200`}
      />
      <h2>{name}</h2>
      {children}
      <p>{email}</p>
    </div>
  )
}

export function CardDeail(item: MonsterProps) {
  return (
    <Card {...item} className='detail-container'>
      <img src={close} alt='Close' className='close' />
      <p>{item.username}</p>
      <h3>
        {item.company.name} / {item.company.catchPhrase}
      </h3>
    </Card>
  )
}
