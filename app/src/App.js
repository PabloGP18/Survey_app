import React from 'react'
import CrudServices from './services/CrudServices'
import './App.scss'
// ${process.env.REACT_APP_BACKEND_URL}
function App() {
	const retrieveAllData = () => {
		try {
			CrudServices.getAll().then((response) => {
				console.log(response.data.data)
			})
		} catch (error) {
			console.error(error.response)
		}
	}
	retrieveAllData()

	return <h1>hello world!</h1>
}

export default App
