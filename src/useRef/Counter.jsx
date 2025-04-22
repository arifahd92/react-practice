import React, { useState, useEffect, useRef } from "react";
//1: use ref is persistant across rerender (like state variable ) means it donot loose values like normal variable in rerender
//2: it donot cause rerender on update (unlike useState variable )
// so it is has one property of state variable (persistant across rerender )
//and one property like normal variable on update no rerender
function Counter() {
  const [count, setCount] = useState(0);

  // Create a ref to keep track of the latest state without re-render
  const countRef = useRef(count);

  useEffect(() => {
    // Update the ref whenever the state updates
    countRef.current = count;
  }, [count]);

  const handleClick = () => {
    // Increment count
    setCount(count + 1);
  };

  const logCurrentState = () => {
    // Access the latest state using the ref, without triggering a re-render
    console.log("Current count (via ref):", countRef.current);
  };

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <button onClick={logCurrentState}>Log Current State</button>
      <p>Current Count: {count}</p>
    </div>
  );
}

export default Counter;
