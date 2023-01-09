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
				setFooterForData([response.data?.data.attributes.footer_for])
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
					<address key={e.id}>
						<div className={styles.footer__textFrom}>
							<a href="https://www.blackboxed.be/">{e.text_from}</a>
						</div>
						<div className={styles.footer__addressFrom}>
							<a href={`https://www.google.be/maps/search/${e.address_from}`}>
								{e.address_from}
							</a>
						</div>
						<div className={styles.footer__mailFrom}>
							<a
								className={styles.footer__mailFrom_mail}
								href={`mailto:${e.email_from}`}
							>
								{e.email_from}
							</a>
						</div>
						<div className={styles.footer__numberFrom}>
							<a
								className={styles.footer__numberFrom_number}
								href={`tel:${e.number_from}`}
							>
								{e.number_from}
							</a>
						</div>
					</address>
				))}
			{loading &&
				footerForData.map((e) => (
					<address key={e.id}>
						<div className={styles.footer__textFor}>
							<a href="https://www.kdg.be/">{e.text_for}</a>
						</div>
						<div className={styles.footer__addressFor}>
							<a href={`https://www.google.be/maps/search/${e.address_for}`}>
								{e.address_for}
							</a>
						</div>
						<div className={styles.footer__mailFor}>
							<a
								className={styles.footer__mailFor_mail}
								href={`mailto:${e.email_for}`}
							>
								{e.email_for}
							</a>
						</div>
						<div className={styles.footer__numberFor}>
							<a
								className={styles.footer__numberFor_number}
								href={`tel:${e.number_for}`}
							>
								{e.number_for}
							</a>
						</div>
					</address>
				))}
		</footer>
	)
}

export default Footer
