/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
	darkMode: "class",
	content: [
		"./components/**/*.tsx",
		"./pages/**/*.{ts,tsx}",
		"./node_modules/tailwind-datepicker-react/**/*.js", // <--- Add this line
	],
	plugins: [],
	theme: {},
}
