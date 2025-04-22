import React, { useState, useEffect, useRef } from "react";

export default function Stopwatch() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  // Handle stopping and starting of the timer
  useEffect(() => {
    return () => {
      // Cleanup on component unmount or when interval is cleared
      if (ref.current) {
        clearInterval(ref.current);
      }
    };
  }, []);

  function start() {
    //if once start is clicked its setInterval will be running continualsly and count will be updated each second

    // If the stopwatch is already running, do nothing, 
    //Without if another timer will be registerd on every start click
    // so each time on start click a brand new timer will be added that will update count multiple time 
    if (ref.current) {
      return;
    }
    ref.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }

  function stop() {
    // Stop the stopwatch
    if (ref.current) {
      clearInterval(ref.current);// why this is important 
      // this is actual logic that is stopping timer by clearing timer other wise timer will be running continuously 
      ref.current = null;// it will help in restart so that if condition inside start is false and a new timer is registerd since we clear last one 
    }
  }

  function reset() {
    // Reset the stopwatch
    if (ref.current) {
      clearInterval(ref.current);
      ref.current = null;
    }
    setCount(0);
  }

  return (
    <div>
      <div>Stopwatch</div>
      <div>{count}</div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
