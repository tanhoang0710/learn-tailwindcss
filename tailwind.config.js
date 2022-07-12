/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		screens: {
			xs: "475px",
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				coffee: {
					50: "e8d6d0",
					200: "#c89f94",
					400: "#a25f4b",
					600: "#744838",
				},
			},
			fontFamily: {
				Karla: ["Karla", "sans-serif"],
			},
			keyframes: {
				slideDown: {
					"0%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(0)" },
				},
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
			animation: {
				slideDown: "slideDown .5s ease-in-out",
				fadeIn: "fadeIn .5s ease-in-out",
			},
			backgroundImage: {
				"slider-bg": 'url("./img/Header-Pic.jpg")',
			},
		},
	},
	plugins: [],
};
