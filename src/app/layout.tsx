// Next
import type { Metadata } from 'next'

// Components
import Header from "@/components/Header"

import './globals.css'

export const metadata: Metadata = {
	title: 'Intro Section With Dropdown Navigation',
	description: 'A solution to frontend-mentor.io challenge using Next JS and TailwindCss',
	authors: {
		name: 'Mario SHAYA',
		url: "https://www.github.com/marioshaya"
	}
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className='min-h-screen'>
				<Header />
				{children}
			</body>
		</html>
	)
}
