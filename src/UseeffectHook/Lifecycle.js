import React, { useEffect, useState } from "react";
import AnotherComponent from "./AnotherComponent";

export default function App() {
  const [count, setCount] = useState(false);

  if (!count) {
    return (
      <div>
        <Lifecycle />
        <button onClick={() => setCount(true)}>
          Show another component (when it is clicked)
        </button>
      </div>
    );
  }

  return (
    <div>
      <Lifecycle />
      <AnotherComponent />
    </div>
  );
}

function Lifecycle() {
  useEffect(() => {
    console.log("component did mount");
    return () => {
      console.log("component will unmount");
    };
  }, []);

  useEffect(() => {
    console.log("component did update");
  }, []);

  return <div>{"first page qwertyuiopsdfghjklrtyujkl"}</div>;
}
