import axios from 'axios'
import { getToken } from '../Auth/helpers'

const axiosInstance = axios.create({
	baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
	headers: { 'Content-type': 'application/json' },
})
axiosInstance.interceptors.request.use(
	async (config) => {
		const token = getToken()
		// if a token is present, add it to the header
		if (token) {
			// adds token to header
			console.log('intercepted')
			console.log(token)
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	(error) => {
		console.log(error)
		return Promise.reject(error)
	}
)
export const AUTH_TOKEN = 'authToken'
// export const BEARER = 'Bearer'

export default axiosInstance
