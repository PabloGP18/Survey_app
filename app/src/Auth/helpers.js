import { AUTH_TOKEN } from '../axios/http'

export const getToken = () => {
	return localStorage.getItem(AUTH_TOKEN)
}

export const setToken = (token) => {
	if (token) {
		localStorage.setItem(AUTH_TOKEN, token)
	}
}

export const removeToken = (token) => {
	localStorage.removeItem(AUTH_TOKEN, token)
}
