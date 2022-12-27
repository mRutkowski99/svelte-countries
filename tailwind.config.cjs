/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			dark_element: 'hsl(209, 23%, 22%)',
			dark_bg: 'hsl(207, 26%, 17%)',
			dark_color: 'hsl(0, 0%, 100%)',
			light_color: 'hsl(200, 15%, 8%)',
			light_inputColor: 'hsl(0, 0%, 52%)',
			light_bg: 'hsl(0, 0%, 98%)',
			light_element: 'hsl(0, 0%, 100%)'
		},
		fontFamily: {
			sans: ['Nunito Sans', 'sans-serif']
		},
		fontWeight: {
			medium: '600',
			thin: '300',
			bold: '800'
		},
		extend: {
			fontSize: {
				homepage: '14px',
				details: '16px'
			}
		}
	},
	plugins: []
};
