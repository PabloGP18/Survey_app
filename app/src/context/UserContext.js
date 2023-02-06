import { createContext, useState } from 'react'

export const UserContext = createContext(null)

export const UserContextProvider = ({ children }) => {
	// State where al the data gets stored from the form
	const [dataRegister, setDataRegister] = useState({
		username: '',
		password: '',
		email: '',
	})

	const [loginData, setLoginData] = useState({
		identifier: '',
		password: '',
	})

	const [email, setEmail] = useState({ email: '' })
	const [responseSurvey, setResponseSurvey] = useState([])

	const value = {
		dataRegister,
		setDataRegister,
		responseSurvey,
		setResponseSurvey,
		loginData,
		setLoginData,
		email,
		setEmail,
	}

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContext
