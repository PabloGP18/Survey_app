import React from 'react'
import RegisterForm from '../components/form/RegisterForm'
import styles from './homepage.module.scss'

const HomePage = () => {
	return (
		<div className={styles.homepage}>
			<RegisterForm />
		</div>
	)
}

export default HomePage
