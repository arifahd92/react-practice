import React from 'react'
import { Context } from './CounterContxt'
import { useContext } from 'react'
function Counter2() {
    const { state, increment, decrement } = useContext(Context)
    return (
        <>
            <h1>counter2.js</h1>
            <h1>count {state}</h1>
            <button onClick={increment}>increment</button>
            < br />
            <button onClick={decrement}>decrement</button>
        </>
    )
}

export default Counter2
