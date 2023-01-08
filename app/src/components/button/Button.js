import React from 'react'

const Button = ({ onClick, buttonText, disabled, className }) => {
	return (
		<button
			type="submit"
			onClick={(e) => onClick(e)}
			disabled={disabled}
			className={className}
		>
			{buttonText}
		</button>
	)
}

export default Button
