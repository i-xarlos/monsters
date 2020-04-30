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
			<h3>{name}</h3>
			<p>{email}</p>
			<p>{username}</p>
			{children}
		</div>
	);
}

export function CardDeail(item) {
	return (
		<Card {...item} className="detail-container">
			<img src={close} alt="Close" className="close" />
			<p>
				{item.company.name} {item.company.catchPhrase}
			</p>
		</Card>
	);
}
