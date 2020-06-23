import React, {Component } from 'react';
import { connect } from 'react-redux';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import '../containers/App.css';

import {setSearchField } from '../actions'

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}
	  
class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
		}
	}
	
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/Users')
			.then(response => {return response.json();
			})
		.then(users => this.setState({ robots: users }));
		}

	render() {
		const { robots } = this.state;
		const { searchField, onSearchChange } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
			})
		
		return !robots.length ?
			<h1>Loading...</h1>:
			(
				<div className='tc'>
					<h1>RoboFriends</h1>
					<SearchBox searchChange={onSearchChange} />
					<Scroll>
						<ErrorBoundary>
							<Cardlist robots = {filteredRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}

export default connect(mapStateToProps, mapDispatchToProps)(App);