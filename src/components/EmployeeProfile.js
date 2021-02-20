import React from 'react'
import {useParams} from 'react-router'

const EmployeeProfile = () => {
	const {id} = useParams()
	return (
		<>
			<h3>EmployeeProfile <span>{id}</span></h3>
		</>
	)
}

export default EmployeeProfile