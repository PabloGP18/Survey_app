import React from 'react'
import LoginForm from '../components/form/LoginForm'
import styles from './loginpage.module.scss'

const LoginPage = () => {
	return (
		<div className={styles.loginpage}>
			<LoginForm />
		</div>
	)
}

export default LoginPage
