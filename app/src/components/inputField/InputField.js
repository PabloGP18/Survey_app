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
	required,
}) => {
	return (
		<label htmlFor={id}>
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
				required={required}
			/>
			<span
				className={`${styles.label} ${error && styles.error} ${
					disabled && styles.disabled
				}`}
			>
				{labelText}
			</span>
		</label>
	)
}

export default InputField
