import React from 'react'
import { useNavigate } from 'react-router'
import Button from '../components/button/Button'
import styles from './thankYouPage.module.scss'

const ThankYouPage = () => {
	const navigate = useNavigate()

	const handleRestartButton = () => {
		navigate('/survey')
	}

	return (
		<div className={styles.thankYouPage}>
			<h1>Thank you for your submission!</h1>
			<p>We appreciate your participation.</p>
			<p>Click on the button to restart survey</p>
			<Button
				buttonText="Restart"
				className={styles.restartButton}
				onClick={(e) => handleRestartButton(e)}
			/>
		</div>
	)
}
export default ThankYouPage
