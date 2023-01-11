/* eslint-disable max-lines */
import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router'
import { useNavigate } from 'react-router'
import CrudServices from '../../services/CrudServices'
// import { useAuthContext } from '../../Auth/AuthContext'
// import { removeToken } from '../../Auth/helpers'
// import Button from '../button/Button'
import styles from './header.module.scss'
import Button from '../button/Button'

const Header = () => {
	const [title, setTitle] = useState('')
	// const { user } = useAuthContext()
	// const navigate = useNavigate()

	// const handleLogout = () => {
	// 	removeToken()
	// 	navigate('/', { replace: true })
	// }

	const navigate = useNavigate()

	const handleLogin = () => {
		navigate('/login')
	}

	const handleLogout = () => {
		navigate('/')
	}

	const headerData = async () => {
		try {
			await CrudServices.getHomePage().then((response) => {
				setTitle(response.data.data.attributes.survey_title)
				console.log(title)
			})
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		headerData()
	}, [])

	return (
		<>
			<div className={styles.header_container}>
				<h1 className={styles.title}>{title}</h1>
				<Button
					disabled={false}
					className={styles.button_register}
					buttonText="Login"
					onClick={() => handleLogin()}
				/>
			</div>

			{/* {user ? (
				<div>
					<Button className="auth_button_login" buttonText={user.username} />
					<Button
						className="auth_button_signUp"
						buttonText="logout"
						onClick={() => handleLogout()}
					/>
				</div>
			) : (
				<div>
					<Button
						className="auth_button_login"
						type="link"
						buttonText="login"
					/>
					<Button
						className="auth_button_signUp"
						type="primary"
						buttonText="Signup"
					/>
				</div>
			)} */}
		</>
	)
}

export default Header
