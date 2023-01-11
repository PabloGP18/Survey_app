/* eslint-disable max-lines */
import React, { useState, useEffect } from 'react'
import CrudServices from '../services/CrudServices'
import { getToken } from '../Auth/helpers'
import Question from '../components/question/Question'
import styles from './surveyPage.module.scss'

const SurveyPage = () => {
	const [apiData, setApiData] = useState([])
	const [loading, setLoading] = useState(true)
	const [counter, setCounter] = useState(1)
	// const [test, setTest] = useState([])
	const [val, setVal] = useState(0)
	const [res, setRes] = useState({
		response1: '',
		response2: '',
		response3: '',
		response4: '',
		response5: '',
		response6: '',
	})

	const token = getToken()
	console.log(token)

	const getQuestion = async (id) => {
		try {
			await CrudServices.getAllQuestions(id).then((response) => {
				setApiData(response.data.data.attributes)
				console.log(response.data.data.attributes.question)
				setLoading(false)
			})
		} catch (error) {
			console.error(error.response)
		}
		// try {
		// 	await axios
		// 		.get(`http://localhost:1337/api/question${id}s?populate=*`)
		// 		.then((response) => {
		// 			// console.log('data:', response)
		// 			setApiData(response)
		// 			setLoading(false)
		// 			console.log(
		// 				'path to question:',
		// 				response.data.data[0].attributes.question
		// 			)
		// 			console.log(
		// 				'path to answers:',
		// 				response.data.data[0].attributes.answerZone[0].a
		// 			)
		// 		})
		// } catch (error) {
		// 	console.error(error)
		// }
	}
	const handleSubmit = async (event) => {
		event.preventDefault()
		// try {
		// 	const resp = await axios.put(
		// 		`http://localhost:1337/api/responses/${test}`,
		// 		{
		// 			data: {
		// 				surveyResponse: [
		// 					{
		// 						__component: 'responses.responses',
		// 						response1: res.response1,
		// 						response2: res.response2,
		// 						response3: res.response3,
		// 						response4: res.response4,
		// 						response5: res.response5,
		// 						response6: res.response6,
		// 					},
		// 				],
		// 			},
		// 		}
		// 	)
		// 	setTest(resp.data.data)(
		// console.log(resp.data.data[0].id)
		// 		test[test.length - 1].id
		// 	)
		// 	console.log(test)
		// } catch (error) {
		// 	console.log(error)
		// }
	}

	const handleNextQuestion = () => {
		setCounter(counter + 1)
		setVal(`response${counter}`)
		console.log(val)
		getQuestion(counter)
	}

	const handleChange = (event) => {
		setRes((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}))
		console.log(res)
	}

	useEffect(() => {
		getQuestion(1)
		handleNextQuestion()
		// setTest()
	}, [])

	return (
		<div className={styles.surveyPage}>
			{loading ? (
				<p className={styles.loading}>loading...</p>
			) : (
				<Question
					questionData={apiData.question}
					answersData={apiData.Answers[0]}
					handleNextQuestion={(e) => handleNextQuestion(e)}
					handleSubmit={(e) => handleSubmit(e)}
					value={apiData.Answers[0]}
					onChange={(e) => handleChange(e)}
					name={val}
				/>
			)}
		</div>
	)
}

export default SurveyPage
