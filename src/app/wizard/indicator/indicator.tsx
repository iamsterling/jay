'use client'

import React, { useContext } from 'react'
import style from './indicator.module.scss'
import { Context } from '../context'



interface indicator {
    steps: Array<any>
}

export const Indicator = () => {

    const context = useContext(Context)


    
    return <div className={style.track}>
        { context.steps.map((i, index) => {
            return <button key={`${i.id} ${index}`}
                className={style.indicator}
                disabled={context.progress !== index}>
            </button>
        })}
    </div>
}