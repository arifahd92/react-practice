import React, { useReducer } from 'react';

// Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
        isEven: (state.count + 1) % 2 === 0,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
        isEven: (state.count - 1) % 2 === 0,
      };
    case RESET:
      return {
        count: 0,
        isEven: false,
      };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    isEven: false,
  });

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Is Even: {state.isEven.toString()}</p>

      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
    </div>
  );
};

export default Counter;
