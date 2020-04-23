import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
	state = {
		users: [],
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ users }));
	}

	render() {
		const { users } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<CardList users={users} />
				</header>
			</div>
		);
	}
}

export default App;
