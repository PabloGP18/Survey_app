import React, { useState, useEffect } from 'react'
import CrudServices from '../../services/CrudServices'
import styles from './footer.module.scss'

const Footer = () => {
	const [footerFromData, setFooterFromData] = useState([])
	const [footerForData, setFooterForData] = useState([])
	const [loading, setLoading] = useState(false)
	// const [footerForData, setFooterForData] = useState('')

	const footerData = async () => {
		try {
			await CrudServices.getHomePage().then((response) => {
				setFooterFromData([response.data?.data.attributes.footer_from])
				setFooterForData([response.data.data.attributes.footer_for])
				setLoading(true)
			})
		} catch (error) {
			console.error('error ocurred:', error.response.data.error.message)
		}
	}
	useEffect(() => {
		footerData()
	}, [])
	return (
		<footer className={styles.footer}>
			{loading &&
				footerFromData.map((e) => (
					<div key={e.id}>
						<div>{e.text_from}</div>
						<div>{e.address_from}</div>
						<div>{e.email_from}</div>
						<div>{e.number_from}</div>
					</div>
				))}
			{loading &&
				footerForData.map((e) => (
					<div key={e.id}>
						<div>{e.text_for}</div>
						<div>{e.address_for}</div>
						<div>{e.email_for}</div>
						<div>{e.number_for}</div>
					</div>
				))}
		</footer>
	)
}

export default Footer
