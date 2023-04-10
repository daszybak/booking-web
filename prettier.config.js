module.exports = {
	arrowParens: 'always',
	semi: true,
	trailingComma: 'all',
	singleQuote: true,
	plugins: [require('prettier-plugin-tailwindcss')],
	tailwindConfig: './tailwind.config.js',
	useTabs: true,
	tabWidth: 4,
};
