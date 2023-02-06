import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router'
import CrudServices from '../services/CrudServices'
import { getToken, removeToken } from '../Auth/helpers'
import Button from '../components/button/Button'
import Question from '../components/question/Question'
import styles from './surveyPage.module.scss'
import { UserContext } from '../context/UserContext'

const SurveyPage = () => {
	const [apiData, setApiData] = useState([])
	const [loading, setLoading] = useState(true)
	const [checked, setChecked] = useState(true)
	const [counter, setCounter] = useState(1)
	const [val, setVal] = useState('')

	const { responseSurvey, setResponseSurvey, emailUser } =
		useContext(UserContext)

	const token = getToken()

	const navigate = useNavigate()

	const getQuestion = async (id) => {
		try {
			await CrudServices.getAllQuestions(id).then((response) => {
				setApiData(response.data.data.attributes)
				setLoading(false)
			})
		} catch (error) {
			console.error(error.response)
			if (!token) {
				navigate('/error')
			}
		}
	}
	const handleSubmit = async (event) => {
		event.preventDefault()
		setChecked(false)
		setCounter(counter + 1)
		getQuestion(counter)

		if (counter === 6) {
			addToResponse()
		}

		setVal(`response${counter}`)
		if (val === 'response6') {
			navigate('/thank-you')
		}
	}

	const addToResponse = async () => {
		try {
			await CrudServices.postAnswers({
				data: {
					email: emailUser,
					surveyResponse: responseSurvey,
				},
			})
			setResponseSurvey([])
		} catch (error) {
			console.log(error.response.message)
		}
	}

	const handleLogout = () => {
		navigate('/')
		removeToken()
	}

	const handleChange = (event) => {
		const newQuestion = {
			question: event.target.name,
			answer: event.target.value,
		}
		setResponseSurvey((oldArray) => [...oldArray, newQuestion])
		console.log(responseSurvey)
	}

	useEffect(() => {
		getQuestion(counter)
		setResponseSurvey(responseSurvey)
	}, [checked, responseSurvey])

	return (
		<div>
			<div className={styles.header__button}>
				{token && (
					<Button
						disabled={false}
						className={styles.button_logout}
						buttonText="Logout"
						onClick={() => handleLogout()}
					/>
				)}
			</div>
			<div className={styles.surveyPage}>
				{loading ? (
					<p className={styles.loading}>loading...</p>
				) : (
					<Question
						questionData={apiData.question}
						answersData={apiData.Answers[0]}
						handleSubmit={(e) => handleSubmit(e)}
						value={apiData.Answers[0]}
						onChange={(e) => handleChange(e)}
						name={apiData.question}
						checked={checked}
					/>
				)}
			</div>
		</div>
	)
}

export default SurveyPage
