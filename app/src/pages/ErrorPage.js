import React from 'react'
import styles from './errorpage.module.scss'

const ErrorPage = () => (
	<div className={styles.error}>
		<h1 className={styles.title_error}>Oops! Something went wrong.</h1>
		<p className={styles.p_error}>
			We&apos;re sorry, but an error has occurred while trying to load this
			page.
		</p>
		<p className={styles.p_error}>
			Please try again later or contact the site administrator if the problem
			persists.
		</p>
	</div>
)

export default ErrorPage
