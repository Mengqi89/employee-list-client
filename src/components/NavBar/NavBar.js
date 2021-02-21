import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
	return (
		<>
			<nav>
				<ul>
					<li id="company-name">Employees at Awesome Company</li>
					<li><Link to="/">List Summary</Link></li>
				</ul>
			</nav>
		</>
	)
}

export default NavBar