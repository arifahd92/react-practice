import React, { useState } from "react";

function useCounter(defaultvalue = 5) {
  let [val, setval] = useState(defaultvalue);
  function increment() {
    setval(val + 1);
  }
  return [val, increment];
}

export default useCounter;
