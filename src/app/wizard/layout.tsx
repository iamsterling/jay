import type { Metadata } from "next"
import { Inter } from "next/font/google"
import style from "./layout.module.scss"
import { Provider } from './context'
import React from "react"
import { Indicator } from "./indicator/indicator"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Wizard",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {


	return <Provider>
		<Indicator />
		{ children }
	</Provider>
}
