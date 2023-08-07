import React, { useState } from 'react'
import { Context } from './CounterContxt'

export default function CounterProvider(props) {
  const [state, setState] = useState(0)
  function increment() {
    setState((current) => current + 1)
  }
  function decrementValue() {
    setState((current) => current - 1)
  }
  return (
    <div>
      <Context.Provider value={{ state, increment, decrement: decrementValue }}>
        {props.children}
      </Context.Provider>
    </div>
  )
}
//CounterProvider ko app me use karenge
