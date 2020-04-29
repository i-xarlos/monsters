import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
	state = {
		users: [],
		searchField: '',
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ users }));
	}

	handleInputChange = (e) => {
		this.setState({ searchField: e });
	};

	render() {
		const { users, searchField } = this.state;
		let search = users.filter((item) =>
			item.name.toLowerCase().includes(searchField),
		);

		return (
			<div className="App">
				<h1>Monsters</h1>
				<SearchBox onChange={this.handleInputChange} />
				<div className="App-content">
					<CardList users={search} />

					{search.length < 1 && searchField ? (
						<h2>Don't have coincidences</h2>
					) : (
						<h2>Loading...</h2>
					)}
				</div>
			</div>
		);
	}
}

export default App;
