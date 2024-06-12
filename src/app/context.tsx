'use client'

import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'

export const Context = createContext<{
    steps: Array<any>,
    progress: number,
    setProgress: React.Dispatch<React.SetStateAction<number>>,
    a: number,
    b: number,
    c: number
}>({
    steps: [],
    progress: 0,
    setProgress: function (value: React.SetStateAction<number>): void {
        throw new Error('Function not implemented.')
    },
    a: 0,
    b: 0,
    c: 0
})

export const Provider = ({ children }: { children: ReactNode }) => {
    const [ progress, setProgress ] = React.useState<number>(0)
    const [ a, setA ] = React.useState<number>(0)
    const [ b, setB ] = React.useState<number>(0)
    const [ c, setC ] = React.useState<number>(0)


    const steps = [
        {
            id: "A",
            state: { get: a, set: setA },
            
            directions: <p>Input the <strong>total</strong> number you found from your worksheet here and hit <strong><a>submit</a></strong> to move forward:</p>,
            placeholder: ""
            
        },
        {
            id: "B",
            state: { get: b, set: setB },
            directions: <p>Now, input the <strong>second number</strong> you found from the worksheet you completed on <strong><u>this</u></strong> page:</p>,
            placeholder: ""
        },
        {
            id: "C",
            state: { get: c, set: setC },
            directions: <p>Congrats, you&apos;ve found this much money through this challenge! Now...what can you do with that money?</p>,
            placeholder: <p>Total number of <span style={{ color: "blue" }}>Variable A</span> + <span style={{ color: "red" }}>Variable B</span> added together</p>
        },
    ]


    return <Context.Provider value={{ steps, progress, setProgress, a, b, c }}>
        { children }
    </Context.Provider>
}