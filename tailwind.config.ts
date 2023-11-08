import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				sm: "375px",
				md: "768px",
				lg: "960px",
				xl: "1440px",
			},
			colors: {
                secondary: "#696969105",
                dark: "#1414140",
                light: "#fafafa",
            },
			backgroundImage: {
				heromobile: "url(./image-hero-mobile.png)",
				herodesktop: "url(./image-hero-desktop.png)",
			},
		},
	},
	plugins: [],
}
export default config
