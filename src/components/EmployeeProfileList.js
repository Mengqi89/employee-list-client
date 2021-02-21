import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ListApiService from '../services/list-api-service'
import { Link } from 'react-router-dom'

class EmployeeProfileList extends Component {
	
	state = {
		error: null,
		list: []
	}
    
	componentDidMount() {
		ListApiService.getEmployeeProfileList()
			.then(list => this.setState({ list }))
			.catch(error => this.setState({error}))
	}
	
	render() {
		const table = this.state.list.results && this.state.list.results.map((profile, index) =>
			<tr key={'profile-' + index}>
				<td>{index + 1}</td>
				<td><Link to={'employee/' + profile.login.username}>{profile.name.first} {profile.name.last}</Link></td>
				<td>{profile.email}</td>
				<td>{profile.location.city}</td>
				<td>{profile.location.country}</td>
			</tr>
		)
		
		return (
			<>
				{this.state.error && <p>{this.state.error.error}</p>}
				<table>
					<tbody>
						<tr>
							<th>Number</th>
							<th>Full Name</th>
							<th>Email</th>
							<th>City</th>
							<th>Country</th>
						</tr>
						{table}
					</tbody>
				</table>
				{/* {loading && <p>loading...</p>} */}

			</>
		)
	}
}

EmployeeProfileList.propTypes = {
	profiles: PropTypes.object,
	loading: PropTypes.bool,
	error: PropTypes.object
}

export default EmployeeProfileList