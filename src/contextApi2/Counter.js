import React from "react";
import { Context } from "./CounterContxt";
import { useContext } from "react";
export default function Counter() {
  const { state, increment, decrement } = useContext(Context);
  console.log({ state });
  return (
    <div>
      <h1>counter.js</h1>
      <h1>count: {state}</h1>
      <button onClick={increment}>increment</button>
      <br />
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
