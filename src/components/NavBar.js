import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'


const NavBar = () => {
	return (
		<>
			<nav>
				<ul>
					<li id="company-name">Awesome Company</li>
					<li><Link to="/">Employee List</Link></li>
				</ul>
			</nav>
		</>
	)
}

export default NavBar