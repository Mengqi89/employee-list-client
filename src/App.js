import React from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'

import EmployeeProfileList from './components/EmployeeProfileList'
import EmployeeProfile from './components/EmployeeProfile'

function App() {
	return (
		<Router>
			<div className="App">
				<nav>
					<ul>
						<li><Link to="/">Employee List</Link></li>
						<li><h1>Employees at Awesome Company</h1></li>
					</ul>
				</nav>
				<Switch>
					<Route path="/">
						<EmployeeProfileList />
					</Route>
					<Route path="/employee/:username" render={() => <EmployeeProfile />}></Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
