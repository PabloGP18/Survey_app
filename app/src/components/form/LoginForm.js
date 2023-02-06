import React, { useEffect, useContext, useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import CrudServices from '../../services/CrudServices'
import { setToken } from '../../Auth/helpers'
import InputField from '../inputField/InputField'
import Button from '../button/Button'
import styles from './loginForm.module.scss'
import { UserContext } from '../../context/UserContext'

const LoginForm = () => {
	const { loginData, setLoginData, setEmail } = useContext(UserContext)

	const element = useRef()

	const [submitted, setSubmitted] = useState(false)

	const [errors, setErrors] = useState([
		{
			identifier: [],
			password: [],
		},
	])

	const [genericError, SetGenericError] = useState(null)

	const navigate = useNavigate()

	const handleInput = (event) => {
		setLoginData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setSubmitted(true)
		getUserFromDB()
	}

	const getUserFromDB = async () => {
		try {
			await CrudServices.getUser(loginData).then((response) => {
				setToken(response.data.jwt)
				navigate('/survey')
				setEmail(response.data.user.email)
				element.current.style.display = 'none'
				console.log(response.data.user.email)
			})
		} catch (error) {
			console.log(error)

			SetGenericError(error.response.data?.error.message)
			setErrors({
				identifier: error.response.data?.error.details.errors[0].message,
				password: error.response.data?.error.details.errors[1].message,
			})
		}
	}

	useEffect(() => {
		if (submitted === true) {
			getUserFromDB()
		}
	}, [])

	return (
		<form
			className={styles.register_form}
			ref={element}
			onSubmit={(e) => handleSubmit(e)}
		>
			<div className={styles.title_form}>
				<h2>Login</h2>
			</div>
			{submitted && genericError === 'Invalid identifier or password' && (
				<span>{genericError}</span>
			)}
			<div className={styles.container_inputField}>
				<InputField
					id="identifier"
					className={styles.form_field}
					type="text"
					placeholder="username or email"
					name="identifier"
					value={loginData.identifier}
					onChange={(e) => handleInput(e)}
					labelText={undefined}
				/>
			</div>
			{submitted && !loginData.identifier && errors && (
				<span>{errors?.identifier}</span>
			)}
			<div className={styles.container_inputField}>
				<InputField
					id="password"
					className={styles.form_field}
					type="text"
					placeholder="password"
					name="password"
					value={loginData.password}
					onChange={(e) => handleInput(e)}
					labelText={undefined}
				/>
			</div>
			{submitted && !loginData.password && errors && (
				<span>{errors?.password}</span>
			)}
			<Button
				disabled={false}
				className={styles.button_register}
				buttonText="Login"
			/>
		</form>
	)
}

export default LoginForm
