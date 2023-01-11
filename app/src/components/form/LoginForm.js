import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import CrudServices from '../../services/CrudServices'
import InputField from '../inputField/InputField'
import Button from '../button/Button'
import styles from './loginForm.module.scss'

const LoginForm = () => {
	const [data, setData] = useState({
		identifier: '',
		password: '',
	})

	const navigate = useNavigate()

	const handleInput = (event) => {
		setData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}))
		console.log(data)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		navigate('/survey')
	}

	const getUserFromDB = async () => {
		try {
			const response = await CrudServices.getUser(data)
			console.log(response)
		} catch (error) {
			console.log(error.response)
		}
	}

	useEffect(() => {
		getUserFromDB()
	}, [])

	return (
		<form className={styles.register_form} onSubmit={(e) => handleSubmit(e)}>
			<div className={styles.title_form}>
				<h2>Login</h2>
			</div>
			<div className={styles.container_inputField}>
				<InputField
					id="identifier"
					className={styles.form_field}
					type="text"
					placeholder="identifier"
					name="identifier"
					value={data.identifier}
					onChange={(e) => handleInput(e)}
					labelText={undefined}
				/>
			</div>
			<div className={styles.container_inputField}>
				<InputField
					id="password"
					className={styles.form_field}
					type="text"
					placeholder="password"
					name="password"
					value={data.password}
					onChange={(e) => handleInput(e)}
					labelText={undefined}
				/>
			</div>
			<Button
				disabled={false}
				className={styles.button_register}
				buttonText="Login"
				onClick={() => getUserFromDB()}
			/>
		</form>
	)
}

export default LoginForm
