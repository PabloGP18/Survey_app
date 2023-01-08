/* eslint-disable max-lines */
import React from 'react'
// import axios from 'axios'
import InputField from '../inputField/InputField'
import Button from '../button/Button'
import styles from './question.module.scss'

const Question = ({
	questionData,
	answersData,
	handleNextQuestion,
	handleSubmit,
	value,
	onChange,
	name,
}) => {
	// const [test, setTest] = useState({
	// 	answers: '',
	// })

	// const addToDb = async () => {
	// 	try {
	// 		await axios.post(`http://localhost:1337/api/answers/`, {
	// 			data: {
	// 				answers: test.answers,
	// 			},
	// 		})
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	// const handleChange = (event) => {
	// 	setTest((prevState) => ({
	// 		...prevState,
	// 		[event.target.name]: event.target.value,
	// 	}))
	// }
	return (
		<>
			<form className={styles.question_answerForm} onSubmit={handleSubmit}>
				<h4>{questionData}</h4>
				<div className={styles.container_Fields}>
					<div className={styles.container_inputField}>
						<InputField
							className={styles.question_field}
							labelText={answersData.a}
							type="radio"
							id="answer_a"
							name={name}
							value={value.a}
							onChange={onChange}
						/>
					</div>
					<div className={styles.container_inputField}>
						<InputField
							className={styles.question_field}
							labelText={answersData.b}
							type="radio"
							id="answer_b"
							name={name}
							value={value.b}
							onChange={onChange}
						/>
					</div>
					<div className={styles.container_inputField}>
						<InputField
							className={styles.question_field}
							labelText={answersData.c}
							type="radio"
							id="answer_c"
							name={name}
							value={value.c}
							onChange={onChange}
							// onChange={(e) => handleInput(e)}
						/>
					</div>
					<div className={styles.container_inputField}>
						<InputField
							className={styles.question_field}
							labelText={answersData.d}
							type="radio"
							id="answers_c"
							name={name}
							value={value.d}
							onChange={onChange}
							// onChange={(e) => handleInput(e)}
						/>
					</div>
				</div>

				<Button
					disabled={false}
					className={styles.button_question}
					buttonText="Next"
					onClick={handleNextQuestion}
				/>
			</form>

			{/* <div className="container-question">
				<div className="question">
					<h4>{questionData}</h4>
				</div>
				<div className="radio_option">
					{answersData.a}
					<input type="radio" id="answer" />
				</div>
				<div className="radio_option">
					{answersData.b}
					<input type="radio" id="answer" />
				</div>
				<div className="radio_option">
					{answersData.c}
					<input type="radio" id="answer" />
				</div>
				<div className="radio_option">
					{answersData.d}
					<input type="radio" id="answer" />
				</div>
				<button type="button" onClick={handleNextQuestion}>
					next
				</button>
			</div> */}
		</>
	)
}

export default Question
