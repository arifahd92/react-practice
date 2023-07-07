import React, { useState, useEffect } from "react";

const Contact = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [savedData, setSavedData] = useState([]);

  const fetchData = async () => {
    const url =
      "https://bold-impulse-382818-default-rtdb.firebaseio.com/userdetail.json";

    const response = await fetch(url);
    const data = await response.json();
    // Store the retrieved data in state
    console.log(typeof data);
    let value = Object.values(data);
    console.log(value);
    //array of object having name and emasil key
    if (response.status === 200) {
      setSavedData(Object.values(data));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async () => {
    const url =
      "https://bold-impulse-382818-default-rtdb.firebaseio.com/userdetail.json";

    const response = await fetch(url, {
      //url k baad ek hi object hai uske andar sab key:value
      //headers key hai iska value object hai 
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status === 200) {
      setUser({ name: "", email: "" });
      // Fetch the updated data after saving
      fetchData();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={changeHandler}
        name="name"
        value={user.name}
      />
      <br />
      <input
        type="text"
        placeholder="email"
        onChange={changeHandler}
        name="email"
        value={user.email}
      />
      <button onClick={submitHandler}>submit</button>

      {/* Display the saved data */}
      <ul>
        {savedData.map((item, index) => (
          <li key={index}>
            {item.name} - {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
