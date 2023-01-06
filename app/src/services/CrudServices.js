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

const CrudServices = {
	getAll,
	postRegistrationAndCredentials,
	putAnswers,
}

export default CrudServices
