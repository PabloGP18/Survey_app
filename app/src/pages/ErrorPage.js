import React from 'react'
import styles from './errorpage.module.scss'

const ErrorPage = () => (
	<div className={styles.error}>
		<h1>Oops! Something went wrong.</h1>
		<p>
			We&apos;re sorry, but an error has occurred while trying to load this
			page.
		</p>
		<p>
			Please try again later or contact the site administrator if the problem
			persists.
		</p>
	</div>
)

export default ErrorPage
