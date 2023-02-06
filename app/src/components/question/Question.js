/* eslint-disable max-lines */
import React from 'react'
// import axios from 'axios'
import InputField from '../inputField/InputField'
import Button from '../button/Button'
import styles from './question.module.scss'

const Question = ({
	questionData,
	answersData,
	handleSubmit,
	value,
	onChange,
	name,
}) => {
	return (
		<form className={styles.question_answerForm} onSubmit={handleSubmit}>
			<div className={styles.question__question}>
				<h4>{questionData}</h4>
			</div>
			<div className={styles.container_Fields}>
				<InputField
					className={styles.question_field}
					labelText={answersData.a}
					type="radio"
					id="response1"
					name={questionData}
					value={value.a}
					onChange={onChange}
				/>

				<InputField
					className={styles.question_field}
					labelText={answersData.b}
					type="radio"
					id="response2"
					name={name}
					value={value.b}
					onChange={onChange}
				/>
			</div>

			<Button
				disabled={false}
				className={styles.button_question}
				buttonText="Next"
			/>
		</form>
	)
}

export default Question
