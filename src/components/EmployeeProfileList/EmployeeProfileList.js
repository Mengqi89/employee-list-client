import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './EmployeeProfileList.css'

const EmployeeProfileList = ({profiles}) => {

	const table = profiles && profiles.map((profile, index) =>
		<tr key={'profile-' + index}>
			<td>{index + 1}</td>
			<td><Link to={'employee/' + profile.login.username}>{profile.name.first} {profile.name.last}</Link></td>
			<td>{profile.email}</td>
			<td>{profile.location.city}</td>
			<td>{profile.location.country}</td>
		</tr>
	)

	const total = <div className="display-total">Total in display: <span>{profiles && profiles.length}</span></div>
		
	return (
		<>
			<div className="tbl-header">
				{total}
				<table>
					<thead>
						<tr>
							<th>Number</th>
							<th>Full Name</th>
							<th>Email</th>
							<th>City</th>
							<th>Country</th>
						</tr>
					</thead>
				</table>
			</div>
			<div className="tbl-content">
				<table>
					<tbody>
						{table}
					</tbody>
				</table>
			</div>
		</>
	)

}

EmployeeProfileList.propTypes = {
	profiles: PropTypes.array
}

export default EmployeeProfileList