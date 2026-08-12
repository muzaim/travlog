/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["'Plus Jakarta Sans'", "sans-serif"],
				circular: ["Outfit", "sans-serif"],
				outfit: ["Outfit", "sans-serif"],
				jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
			},
		},
	},
	plugins: [],
};
