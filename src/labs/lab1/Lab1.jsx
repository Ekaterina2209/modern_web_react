import { useState } from "react"

function Lab1() {
    const [coutner, setCounter] = useState(0)

    function increment() {
        setCounter(coutner + 1)
    }

    function decrement() {
        setCounter(coutner - 1)
    }

    return (
        
        <>
            <h1>Лабораторная 1</h1>
            <p>Счетчик: {coutner}</p>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </>
    )
}

export default Lab1