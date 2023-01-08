import React from 'react'
import styles from './inputField.module.scss'

const InputField = ({
	id,
	className,
	type,
	placeholder,
	name,
	value,
	onChange,
	labelText,
	disabled,
	error = null,
	display,
}) => {
	return (
		<label htmlFor={id}>
			<span
				className={`${styles.label} ${error && styles.error} ${
					disabled && styles.disabled
				}`}
			>
				{labelText}
			</span>
			<input
				disabled={disabled}
				id={id}
				className={className}
				type={type}
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={(e) => onChange(e)}
				display={display}
			/>
		</label>
	)
}

export default InputField
