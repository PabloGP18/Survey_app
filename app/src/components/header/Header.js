import React, { useState, useEffect } from 'react'
import CrudServices from '../../services/CrudServices'
import styles from './header.module.scss'

const Header = () => {
	const [title, setTitle] = useState('')

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
		<div className={styles.header_container}>
			<h1 className={styles.title}>{title}</h1>
		</div>
	)
}

export default Header
