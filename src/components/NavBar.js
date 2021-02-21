import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<>
			<nav>
				<ul>
					<li><Link to="/">Employee List</Link></li>
					<li><h1>Employees at Awesome Company</h1></li>
				</ul>
			</nav>
		</>
	)
}

export default NavBar