import React from 'react';
import close from '../../assets/close.png';
import './card.list.css';

export function Card({
	id,
	name,
	email,
	username,
	onClick,
	className,
	children,
}) {
	return (
		<div
			className={`card-container ${className ? className : ''}`}
			onClick={onClick}
		>
			<img
				className="image"
				alt={name}
				src={`https://robohash.org/${id}?size=200x200`}
			/>
			<h2>{name}</h2>
			{children}
			<p>{email}</p>
		</div>
	);
}

export function CardDeail(item) {
	return (
		<Card {...item} className="detail-container">
			<img src={close} alt="Close" className="close" />
			<p>{item.username}</p>
			<h3>
				{item.company.name} / {item.company.catchPhrase}
			</h3>
		</Card>
	);
}
