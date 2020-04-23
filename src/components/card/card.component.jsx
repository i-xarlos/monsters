import React from 'react';
import './card.list.css';

export default function Card({ id, name, email, username }) {
	return (
		<div className="card-container">
			<img alt={name} src={`https://robohash.org/${id}?size=200x200`} />
			<h3>{name}</h3>
			<p>{email}</p>
			<p>{username}</p>
		</div>
	);
}
