/* eslint-disable max-lines */
import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import CrudServices from '../../services/CrudServices'
import InputField from '../inputField/InputField'
import Button from '../button/Button'
import styles from './registerForm.module.scss'
import { setToken } from '../../Auth/helpers'
import { UserContext } from '../../context/UserContext'

const RegisterForm = () => {
	// State where al the data gets stored from the form
	const { dataRegister, setDataRegister } = useContext(UserContext)

	// Validate & submit states
	const [submitted, setSubmitted] = useState(false)

	// errorHandling email state
	const [errorEmail, setErrorEmail] = useState(null)

	// errorHandling state

	const [errors, setErrors] = useState([
		{
			lastName: [],
			firstName: [],
			email: [],
		},
	])

	// const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
	// const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

	// Using useNavigate from react-router
	const navigate = useNavigate()

	const handleLogin = () => {
		navigate('/login')
	}

	// Function to set the input values to the setData state
	const handleInput = (event) => {
		setDataRegister((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}))
	}

	/* Function onSubmit to not refresh the page, check if input data exist and setValid/setSubmit to true 
	& lifting up the state of data to homePage to use the data of the input values their */
	const handleSubmit = (event) => {
		event.preventDefault()
		addToDb()
		setSubmitted(true)
	}

	// Axios post request from input values form to DB (Strapi)
	const addToDb = async () => {
		try {
			const response = await CrudServices.registration(dataRegister)
			setToken(response.data.jwt)
			navigate('/login')
			// console.log(response.data.jwt)
		} catch (error) {
			setErrorEmail(null)
			setErrors(null)

			console.log(error)
			setErrorEmail(error.response.data?.error.message)
			setErrors({
				email: error.response.data?.error.details.errors[0].message,
				username: error.response.data?.error.details.errors[1].message,
				password: error.response.data?.error.details.errors[2].message,
			})
		}
	}

	useEffect(() => {
		addToDb()
	}, [])

	return (
		<>
			<form className={styles.register_form} onSubmit={(e) => handleSubmit(e)}>
				<div className={styles.title_form}>
					<h2>Please register</h2>
				</div>
				<div className={styles.container_inputField}>
					<InputField
						display="none"
						id="first-name"
						className={styles.form_field}
						type="text"
						placeholder="username"
						name="username"
						value={dataRegister.username}
						onChange={(e) => handleInput(e)}
						labelText={undefined}
					/>
				</div>
				{submitted && !dataRegister.username && (
					<span className="error" id="username-error">
						{errors?.username}
					</span>
				)}

				<div className={styles.container_inputField}>
					<InputField
						display="none"
						id="password"
						className={styles.form_field}
						type="text"
						placeholder="password"
						name="password"
						value={dataRegister.password}
						onChange={(e) => handleInput(e)}
						labelText={undefined}
					/>
				</div>
				{submitted && !dataRegister.password && (
					<span className="error" id="password-error">
						{errors?.password}
					</span>
				)}

				<div className={styles.container_inputField}>
					<InputField
						display="none"
						id="email"
						className={styles.form_field}
						type="text"
						placeholder="Email"
						name="email"
						value={dataRegister.email}
						onChange={(e) => handleInput(e)}
						labelText={undefined}
					/>
				</div>
				{submitted && !dataRegister.email && (
					<span className="error" id="email-error">
						{errors?.email}
					</span>
				)}
				{(submitted && errorEmail === 'Email or Username are already taken') ||
				errorEmail === 'password must be at least 6 characters' ||
				errorEmail === 'email must be a valid email' ? (
					<span>{errorEmail}</span>
				) : null}
				<Button
					disabled={false}
					className={styles.button_register}
					buttonText="Register"
				/>
			</form>
			<p>
				Already registered click{' '}
				<span onClick={handleLogin} className={styles.here}>
					here{' '}
				</span>{' '}
				to login
			</p>{' '}
		</>
	)
}

export default RegisterForm
