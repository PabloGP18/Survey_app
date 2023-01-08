/* eslint-disable max-lines */

import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import InputField from '../inputField/InputField'
import Button from '../button/Button'
import styles from './registerForm.module.scss'

const RegisterForm = () => {
	// State where al the data gets stored from the form
	const [data, setData] = useState({
		firstName: '',
		lastName: '',
		email: '',
	})

	// Validate & submit states
	const [submitted, setSubmitted] = useState(false)
	const [valid, setValid] = useState(false)

	// errorHandling email state
	const [errorEmail, setErrorEmail] = useState('')

	// errorHandling state
	const [genericError, setGenericError] = useState('')

	// todo array of errors

	// test error array
	// const [errors, setErrors] = useState([
	// 	{
	// 		lastName: [],
	// 		firstName: [],
	// 		email: [],
	// 	},
	// ])

	// Using useNavigate from react-router
	const navigate = useNavigate()

	// Function to set the input values to the setData state
	const handleInput = (event) => {
		setData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}))
	}

	/* Function onSubmit to not refresh the page, check if input data exist and setValid/setSubmit to true 
     & lifting up the state of data to homePage to use the data of the input values their */
	const handleSubmit = (event) => {
		event.preventDefault()
		if (
			data.firstName &&
			data.lastName &&
			data.email &&
			!errorEmail &&
			!genericError
		) {
			setValid(true)
		}
		setSubmitted(true)
	}

	// Function to rout onClick to the survey page with useNavigate
	const startSurvey = (event) => {
		event.preventDefault()
		navigate('/survey')
	}

	// Axios post request from input values form to DB (Strapi)
	const addToDb = async () => {
		setErrorEmail(null)
		setGenericError(null)
		try {
			await axios.post(`http://localhost:1337/api/responses/`, {
				data: {
					email: data.email,
					firstName: data.firstName,
					lastName: data.lastName,
				},
			})
		} catch (error) {
			setErrorEmail(
				`${
					error.response.data.error.details.errors[0].message
				}: ${error.response.data.error.details.errors[0].path.join()}`
			)
			setGenericError(error.response.data.error.details.errors[0].message)
		}
	}

	return (
		<form className={styles.register_form} onSubmit={(e) => handleSubmit(e)}>
			{submitted &&
			data.firstName &&
			data.lastName &&
			!errorEmail &&
			!genericError ? (
				<>
					<span id={styles.start}>
						Hello {data.firstName}, thanks for registering. Please click the
						button to start the survey
					</span>
					<Button
						disabled={false}
						className={styles.button_start}
						buttonText="Start Survey"
						onClick={(e) => startSurvey(e)}
					/>
				</>
			) : (
				<>
					<div className={styles.title_form}>
						<h2>Please register</h2>
					</div>
					<div className={styles.container_inputField}>
						<InputField
							display="none"
							id="first-name"
							className={styles.form_field}
							type="text"
							placeholder="First Name"
							name="firstName"
							value={data.firstName}
							onChange={(e) => handleInput(e)}
							labelText={undefined}
						/>
						{submitted && !data.firstName && (
							<span id="last-name-error">Please enter a first name</span>
						)}
					</div>

					<div className={styles.container_inputField}>
						<InputField
							display="none"
							id="last-name"
							className={styles.form_field}
							type="text"
							placeholder="Last Name"
							name="lastName"
							value={data.lastName}
							onChange={(e) => handleInput(e)}
							labelText={undefined}
						/>
						{submitted && !data.lastName && (
							<span id="last-name-error">Please enter a last name</span>
						)}
					</div>

					<div className={styles.container_inputField}>
						<InputField
							display="none"
							id="email"
							className={styles.form_field}
							type="text"
							placeholder="Email"
							name="email"
							value={data.email}
							onChange={(e) => handleInput(e)}
							labelText={undefined}
							error={errorEmail}
						/>
						{submitted && !data.email && (
							<span id="email-error">Please enter an email address</span>
						)}
					</div>

					<Button
						disabled={false}
						className={styles.button_register}
						buttonText="Register"
						onClick={() => addToDb()}
					/>

					{(valid && !errorEmail) || (valid && genericError) ? (
						<p>{errorEmail}</p>
					) : (
						<p>{genericError}</p>
					)}
				</>
			)}
		</form>
	)
}

export default RegisterForm