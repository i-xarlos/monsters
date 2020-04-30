import React from 'react';
import './card-list.style.css';
import { Card } from '../card/card.component';

export function CardList({ search }) {
	return (
		<div className="card-list">
			{search.map((item, key) => {
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
