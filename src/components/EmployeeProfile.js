import React from 'react'
import PropTypes from 'prop-types'
import PostalAddress from 'i18n-postal-address'

import { useParams } from 'react-router'

const EmployeeProfile = ({profiles}) => {
	const {username} = useParams()
	const [profile] = profiles.results.filter(profile => profile.login.username === username)

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
		<>
			<div><img src={profile.picture.large} alt={'profile picture of ' + profile.name.first}></img></div>
			<div>
				<h3>{profile.name.first} {profile.name.last}</h3>
				<div>{profile.email}</div>
				<div>City: {profile.location.city}</div>
				<div>{employeeAddress.toString()}</div>
				<div>Birthday: {profile.dob.date}</div>
			</div>
		</>
	)
}

EmployeeProfile.propTypes = {
	profiles: PropTypes.object
}

export default EmployeeProfile