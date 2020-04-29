import React from 'react';
import './search-box.styles.css';

export default function SearchBox({ onChange }) {
	const handleInputChange = (e) => {
		const val = e.target.value;
		onChange(val);
	};
	return (
		<input
			className="search-box"
			type="search"
			placeholder="Search monsters"
			onChange={(e) => handleInputChange(e)}
		/>
	);
}
