import axios from 'axios'

export default axios.create({
	baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
	headers: { 'Content-type': 'application/json' },
})

export const AUTH_TOKEN = 'authToken'
export const BEARER = 'Bearer'
