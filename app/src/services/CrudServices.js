import http from '../axios/http'

const getAllQuestions = (id) => {
	return http.get(`/questions/${id}/?populate=*`)
}

const registration = (data) => {
	return http.post('/auth/local/register', data)
}

const putAnswers = (id, data) => {
	return http.put(`/responses/${id}`, data)
}

const getHomePage = () => {
	return http.get('/homepage/?populate=*')
}

const getUser = (data) => {
	return http.post('/auth/local', data)
}

const CrudServices = {
	getAllQuestions,
	registration,
	putAnswers,
	getHomePage,
	getUser,
}

export default CrudServices
