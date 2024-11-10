import { Montserrat } from 'next/font/google'
import Head from "next/head";
import "./globals.css";

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '600']
})

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
	return (
		<html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link
				href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
				rel="stylesheet"
				/>
			</Head>
			<body className={`${montserrat.className} antialiased`}>
				{children}
				<div id="modal-root"></div>
			</body>
		</html>
	);
}
