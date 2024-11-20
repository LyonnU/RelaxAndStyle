/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary100: '#FF4081',
				primary200: '#ff79b0',
				primary300: '#ffe4ff',
				accent100: '#00E5FF',
				accent200: '#00829b',
				text100: '#333333',
				text200: '#5c5c5c',
				bg100: '#F5F5F5',
				bg200: '#ebebeb',
				bg300: '#c2c2c2'
				  
			}
		},
	},
	plugins: [],
}
