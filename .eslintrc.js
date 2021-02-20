module.exports = {
	env: {
		browser: true,
		es2021: true,
		amd: true,
		node: true
	},
	extends: [
		'plugin:react/recommended',
		'eslint:recommended'
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: [
		'react',
		'jest'
	],
	rules: {
		quotes: [
			'error',
			'single'
		],
		semi: ['error', 'never'
		],
		indent: ['error', 'tab'
		]
	},
	overrides: [
		{
			files: [
				'**/*.spec.js'
			],
			env: {
				'jest': true
			}
		}
	]
}