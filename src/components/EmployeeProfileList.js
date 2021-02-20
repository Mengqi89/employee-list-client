import React from 'react'
import useFetch from '../hooks/useFetch'

const EmployeeProfileList = () => {
	const { profiles, loading, error } = useFetch('http://localhost:5000/api/employees')
    
    
	const table = profiles && profiles.results.map((profile, index) =>
		<tr key={'profile-' + index}>
			<td>{profile.name.first} {profile.name.last}</td>
			<td>{profile.email}</td>
			<td>{profile.location.city}</td>
			<td>{profile.location.country}</td>
		</tr>
	)
	console.log(table)


	return (
		<>
			<h1>Employee List</h1>
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

export default EmployeeProfileList