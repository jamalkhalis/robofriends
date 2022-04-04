import React, {Component} from 'react';
import CardList from '../components/CardList';
import {robots} from '../components/robots';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {

	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(json => {this.setState({robots: json})});
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {

		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robots => {
			return robots.name.toLowerCase().includes(searchfield.toLowerCase())
		})

		if(!robots.length) {
			return (
				<div className="tc">
					<h1 className="f1 navy"> Robots Friends </h1>
					<p> Search by the name of the robot, go and start tapping ch...! </p>
					<SearchBox searchChange={this.onSearchChange} />
					<h2> Loading </h2>
					<footer className="pa4"> Made with love by Jamal KHALIS. </footer>
				</div>
			)
		}else {
			return (
				<div className="tc">
					<h1 className="f1 navy"> Robots Friends </h1>
					<p> Search by the name of the robot, go and start tapping ch...! </p>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots} />
						</ErrorBoundry>
					</Scroll>
					<footer className="pa2"> Made with love by Jamal KHALIS. </footer>
				</div>
			)
		}
		
	}
	
}

export default App;