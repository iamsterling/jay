'use client'
import React, { FormEvent, Suspense, useContext, useRef } from 'react'
import style from './page.module.scss'
import { Context } from '../context'

import { useRouter } from 'next/navigation'


export default function Steps({ params }: { params: { slug: string }} ) {

	const router = useRouter()
	const context = useContext(Context)

	const page = context.steps[parseInt(params.slug) - 1]


	const ref = {
		form: useRef(),
		input: useRef<HTMLInputElement>()
	}

	const handle = {
		submit(e: FormEvent) {
			e.preventDefault()
			router.replace(`${parseInt(params.slug) + 1}`)
			page.state.set(ref.input.current && ref.input.current.value)
		}
	}


	React.useEffect(() => {
		context.setProgress(parseInt(params.slug) - 1)
	}, [])


	return <>
		<div className={style.container}>
			<Suspense>
				{page.directions}
			</Suspense>


			<form onSubmit={(e) => handle.submit(e)}
				className={style.form}>
				<div className={style.container}>
					<input ref={ref.input} type="number" />
					<span className={style.placeholder}>
						{page.placeholder}
					</span>
				</div>
				<button>Submit</button>
			</form>

			{/* use router to push the next screen? */}
		</div>
	</>
}