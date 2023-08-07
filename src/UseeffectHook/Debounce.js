import React, { useState, useEffect } from "react";

export default function Debounce() {
  const [item, setItem] = useState([]);
  const [input, setInput] = useState("");
  /*
  useEffect(() => {
    const fetchData = async () => {
      console.log("being called again and again");
      try {
        
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setItem(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

  }, [input]);
  console.log("at each click it is being called");
  */
  useEffect(() => {
    const timeOut = setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setItem(data);
      console.log(
        "being callet at the delay  of 1 second on each clik jab cleanup fxn was not used, but after"
        // cleanup function cleanup function clearing timeout and then it is setting ,if in typing there is delay of 1 second api being fetched"
      );
    }, 1000);
    return () => {
      clearTimeout(timeOut);
      console.log("from the secomd time it wil run on priority ");
    };
  }, [input]);
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {item.map((item) => {
        return <h1 key={item.id}>{item.name}</h1>;
      })}
    </div>
  );
}
