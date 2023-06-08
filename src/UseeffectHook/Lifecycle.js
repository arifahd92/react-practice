import React, { useEffect, useState } from "react";
import AnotherComponent from "./AnotherComponent";

export default function Lifecycle() {
  const [count, setCount] = useState(false);
  useEffect(() => {
    console.log("component did mount");
    return () => {
      console.log("component will unmount");
    };
  }, []);
  useEffect(() => {
    console.log("component did update");
  }, [count]);
  return (
    <div>
      {count && <AnotherComponent />}
      {!count && (
        <>
          <div>{"first page qwertyuiopsdfghjklrtyujkl"}</div>
          <button onClick={() => setCount((prev) => !prev)}>
            show another component(when it will be clicked )
          </button>
        </>
      )}
    </div>
  );
}
