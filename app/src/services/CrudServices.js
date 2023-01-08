import http from '../axios/http'

const getAll = () => {
	return http.get('/questions')
}

const postRegistrationAndCredentials = (data) => {
	return http.post('/responses', data)
}

const putAnswers = (id, data) => {
	return http.put(`/responses/${id}`, data)
}

const getHomePage = () => {
	return http.get('/homepage/?populate=*')
}

const CrudServices = {
	getAll,
	postRegistrationAndCredentials,
	putAnswers,
	getHomePage,
}

export default CrudServices
