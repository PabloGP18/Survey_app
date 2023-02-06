import axiosInstance from '../axios/http'

const getAllQuestions = (id) => {
	return axiosInstance.get(`/questions/${id}/?populate=*`)
}

const registration = (data) => {
	return axiosInstance.post('/auth/local/register', data)
}

const postAnswers = (data) => {
	return axiosInstance.post(`/responses/`, data)
}

const getHomePage = () => {
	return axiosInstance.get('/homepage/?populate=*')
}

const getUser = (data) => {
	return axiosInstance.post('/auth/local', data)
}

const CrudServices = {
	getAllQuestions,
	registration,
	postAnswers,
	getHomePage,
	getUser,
}

export default CrudServices
