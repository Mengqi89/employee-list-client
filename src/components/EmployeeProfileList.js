import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'


const EmployeeProfileList = ({ profiles, loading, error }) => {
    
	const table = profiles && profiles.results.map((profile, index) =>
		<tr key={'profile-' + index}>
			<td><Link to={'employee/' + profile.login.username}>{profile.name.first} {profile.name.last}</Link></td>
			<td>{profile.email}</td>
			<td>{profile.location.city}</td>
			<td>{profile.location.country}</td>
		</tr>
	)
	console.log(table)


	return (
		<>
			{loading && <p>loading...</p>}
			{error && <p>{error.error}</p>}
			<table>
				<tbody>
					<tr>
						<th>Full Name</th>
						<th>Email</th>
						<th>City</th>
						<th>Country</th>
					</tr>
					{table}
				</tbody>
			</table>
		</>
	)
}

EmployeeProfileList.propTypes = {
	profiles: PropTypes.object,
	loading: PropTypes.bool,
	error: PropTypes.object
}

export default EmployeeProfileList