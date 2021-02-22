import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import EmployeeProfileList from './components/EmployeeProfileList/EmployeeProfileList'
import EmployeeProfile from './components/EmployeeProfile/EmployeeProfile'
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
			.catch(error => console.log(error))
		
		window.addEventListener('scroll', this.handleScroll)
	}

	handleScroll = () => {
		if (timer) {
			window.clearTimeout(timer)
		}
		timer = window.setTimeout(() => {
			if (this.state.profiles.length === 7000) { 
				this.setState({loading: false})
			}
			if (document.body.clientHeight - window.pageYOffset < 1000 && this.state.profiles.length < 6501) {
				this.setState({
					loading: true
				})
				ListApiService.getEmployeeProfileList()
					.then(profiles => {
						const newProfiles = [...profiles.results, ...this.state.profiles]
						this.setState({
							profiles: newProfiles,
							loading: false
						})
					})
					.catch(error => this.setState({ error: error.error }))
			}
		}, 1000)
	}

	render() {
		const loader = <div className="loader"></div>

		return (
			<Router>
				<div className="App">
					<NavBar />
					{this.state.error && <p>{this.state.error.error}</p>}
					<Switch>
						<Route path="/" exact render={() => <EmployeeProfileList profiles={this.state.profiles}/>}></Route>
						<Route path="/employee/:username" render={() => <EmployeeProfile profiles={this.state.profiles} error={this.state.error} />}></Route>
					</Switch>
					{this.state.loading && loader}
				</div>
			</Router>
		)
	} 
}

export default App
