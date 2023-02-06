import React, { createContext, useState } from 'react'

export const UserContext = createContext(null)

export const UserContextProvider = ({ children }) => {
	const [dataRegister, setDataRegister] = useState({
		username: '',
		password: '',
		email: '',
	})

	const [loginData, setLoginData] = useState({
		identifier: '',
		password: '',
	})

	const [emailUser, setEmailUser] = useState({ email: '' })
	const [responseSurvey, setResponseSurvey] = useState([])

	const value = {
		dataRegister,
		setDataRegister,
		responseSurvey,
		setResponseSurvey,
		loginData,
		setLoginData,
		emailUser,
		setEmailUser,
	}

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContext
