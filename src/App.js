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
				<SearchBox onChange={this.handleInputChange} />
				<header className="App-header">
					<CardList users={search} />
				</header>
			</div>
		);
	}
}

export default App;
