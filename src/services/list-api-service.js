import config from '../config'

const ListApiService = {
	getEmployeeProfileList() {
		return fetch(`${config.API_ENDPOINT}/employees`, {
			headers: {}
		}).then(res => 
			!res.ok ? res.json().then(e => Promise.reject(e)) : res.json())
	}
}

export default ListApiService