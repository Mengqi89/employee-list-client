import React from 'react'
import PropTypes from 'prop-types'
import PostalAddress from 'i18n-postal-address'
import './EmployeeProfile.css'

import { useParams } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelopeSquare, faCity, faMapMarkedAlt, faBirthdayCake} from '@fortawesome/free-solid-svg-icons'

// TODO: need to implement error boundary for this component
const EmployeeProfile = ({ profiles }) => {
	const {username} = useParams()
	const [profile] = profiles && profiles.filter(profile => profile.login.username === username)

	// Format addresses based on regional specifications
	const employeeAddress = new PostalAddress()
	employeeAddress
		.setAddress1(profile.location.street.name)
		.setAddressNum(profile.location.street.number)
		.setCity(profile.location.city)
		.setState(profile.location.state)
		.setProvince(profile.location.province)
		.setCountry(profile.location.country)
		.setPostalCode(profile.location.postcode)
	
	return (
		<div className="profile-container">
			<div><img src={profile.picture.large} alt={'profile picture of ' + profile.name.first}></img></div>
			<div>
				<h3>{profile.name.first} {profile.name.last}</h3>
				<div className="employee-detail"><FontAwesomeIcon icon={faEnvelopeSquare} /> {profile.email}</div>
				<div className="employee-detail"><FontAwesomeIcon icon={faCity} /> {profile.location.city}</div>
				<div className="employee-detail"><FontAwesomeIcon icon={faMapMarkedAlt} /> {employeeAddress.toString()}</div>
				<div className="employee-detail"><FontAwesomeIcon icon={faBirthdayCake} /> {profile.dob.date.slice(0, 10)}</div>
			</div>
		</div>
	)
}

EmployeeProfile.propTypes = {
	profiles: PropTypes.array,
	error: PropTypes.object
}

export default EmployeeProfile