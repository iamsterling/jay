'use client'
import React, { Suspense, useContext } from 'react'
import { Context } from './context'
import Link from 'next/link'




export default function Steps() {
	const [ activeStep, setActiveStep ] = React.useState<number>(0)
	

	const context = useContext(Context)
	



	return <>
		<p>Wizard instructions go here</p>

		<Link href="Step/1">Start</Link>
	</>
}
