import React from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import useFetch from './hooks/useFetch'

import EmployeeProfileList from './components/EmployeeProfileList'
import EmployeeProfile from './components/EmployeeProfile'

function App() {
	const { profiles, loading, error } = useFetch('http://localhost:5000/api/employees')

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
					<Route path="/" exact render={() => <EmployeeProfileList profiles={profiles} loading={loading} error={error} />}></Route>
					<Route path="/employee/:id" render={() => <EmployeeProfile profiles={profiles}/>}></Route>
				</Switch>
			</div>
		</Router>
	)
}

export default App
