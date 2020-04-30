import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { CardDeail } from './components/card/card.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
	state = {
		users: [],
		searchField: '',
		current: null,
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ users }));
	}

	handleInputChange = (e) => {
		this.setState({ searchField: e });
	};

	handleClick = (item) => {
		this.setState(
			(prevState) => {
				if (prevState.current !== item) return { current: item };
				else return { current: null };
			},
			//	() => console.log(this.state.current),
		);
	};

	render() {
		const { users, searchField, current } = this.state;
		let search = users.filter((item) => {
			item.onClick = () => this.handleClick(item);
			return item.name.toLowerCase().includes(searchField.toLowerCase());
		});

		let result;

		if (users.length === 0) {
			result = <h2>Loading...</h2>;
		} else {
			result =
				search.length > 0 ? (
					<CardList search={search} />
				) : (
					<h2>Don't have coincidences</h2>
				);
		}

		console.log(current);

		return (
			<div className="App">
				<h1>Monsters</h1>
				{!current && <SearchBox onChange={this.handleInputChange} />}
				{!!current ? (
					<CardDeail {...current} />
				) : (
					<div className="App-content">{result}</div>
				)}
			</div>
		);
	}
}

export default App;
