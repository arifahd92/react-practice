import React from 'react'
import Counter from './Counter'
import Counter2 from './Counter2'
import CounterProvider from './CounterProvider'
export default function AppContext() {
    return (
        <CounterProvider>
            <Counter />

            <Counter2 />
        </CounterProvider>
    )
}
