import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Simple() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("inside");
  }, [count]);
  console.log("outside");
  // op outside inside
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>inc</button>
    </div>
  );
}
