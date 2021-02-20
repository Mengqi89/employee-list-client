import React from 'react'
import useFetch from '../hooks/useFetch'


const EmployeeProfileList = () => {
	const { response, loading, error } = useFetch('http://localhost:5000/api/employees')
	return (
		<>
			<h1>Employee List</h1>
			{loading && <p>loading...</p>}
			{error && <p>{error.error}</p>}
			{response && <h1>{response.results[1].name.last}</h1>}
		</>
	)
}

export default EmployeeProfileList