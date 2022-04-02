import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {

	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {

		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})

		return (
			<div className="tc">
				<h1 className="f1 navy"> Robots Friends </h1>
				<p> Search by the name of the robot, go and start tapping Brad! </p>
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robots={filteredRobots} />
				<footer className="pa4"> Made with love by Jamal KHALIS. </footer>
			</div>
		)
	}
	
}

export default App;