module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx', 'scss'],
			},
		},
	},
	extends: ['airbnb', 'plugin:react/recommended', 'prettier'],
	plugins: ['prettier'],
	parserOptions: {
		ecmaVersion: 2020,
	},
	// add your custom rules here
	rules: {
		'no-console': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		'import/extensions': 'off',
		'react/jsx-filename-extension': 'off',
		'arrow-body-style': 'off',
		'react/display-name': 'off',
		'react/prop-types': 'off',
		semi: 'off',
		'no-trailing-spaces': 'off',
		'no-underscore-dangle': 'off',
		'no-use-before-define': 'off',
		'eol-last': 'off',
		'react/destructuring-assignment': 'off',
		'react/function-component-definition': 'off',
		'max-lines': ['error', 120],
		'react/jsx-props-no-spreading': [
			2,
			{
				custom: 'ignore',
			},
		],
		'import/no-unresolved': [
			2,
			{
				ignore: ['^@'], // @ is the path alias set
			},
		],
	},
}
