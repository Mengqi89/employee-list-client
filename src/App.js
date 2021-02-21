import React, { Component } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import EmployeeProfileList from './components/EmployeeProfileList'
import EmployeeProfile from './components/EmployeeProfile'
import ListApiService from './services/list-api-service'

let timer
class App extends Component {
	state = {
		error: null,
		loading: true,
		profiles: []
	}

	componentDidMount() {
		ListApiService.getEmployeeProfileList()
			.then(profiles => {
				this.setState({
					profiles: profiles.results,
					loading: false})
			})
			.catch(error => this.setState({error: error.error}))
		
		window.addEventListener('scroll', this.handleScroll)
	}

	handleScroll = () => {
		if (timer) {
			window.clearTimeout(timer)
		}
		timer = window.setTimeout(() => {
			if (this.state.profiles.length === 500) { 
				this.setState({loading: false})
			}
			if (document.body.clientHeight - window.pageYOffset < 1000 && this.state.profiles.length < 500) {
				ListApiService.getEmployeeProfileList()
					.then(profiles => {
						const newProfiles = [...profiles.results, ...this.state.profiles]
						this.setState({
							loading: true,
							profiles: newProfiles})
					})
					.catch(error => this.setState({ error: error.error }))
			}
		}, 1000)
	}

	render() {
		return (
			<Router>
				<div className="App">
					<NavBar />
					{this.state.error && <p>{this.state.error.error}</p>}
					<Switch>
						<Route path="/" exact render={() => <EmployeeProfileList profiles={this.state.profiles}/>}></Route>
						<Route path="/employee/:username" render={() => <EmployeeProfile profiles={this.state.profiles}/>}></Route>
					</Switch>
				</div>
				{this.state.loading && <p>loading...</p>}
			</Router>
		)
	} 
}

export default App
