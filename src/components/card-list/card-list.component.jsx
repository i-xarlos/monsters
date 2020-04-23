import React from 'react';
import './card-list.style.css';
import Card from '../card/card.component';

export function CardList({ users }) {
	return (
		<div className="card-list">
			{users.map((item, key) => {
				return (
					<Card
						key={key}
						{...item}
						name={item.name}
						email={item.email}
					/>
				);
			})}
		</div>
	);
}
