import http from '../axios/http'

const getAllQuestions = (id) => {
	return http.get(`/questions/${id}/?populate=*`)
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
	getAllQuestions,
	postRegistrationAndCredentials,
	putAnswers,
	getHomePage,
}

export default CrudServices
