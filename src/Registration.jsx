import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('arif');
  const email= "taslim@12";
  const password=12344

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/register",{
          
    method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
      username,email,password
      
      })
    
    })

  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Create database</button>
    </form>
  );
};

export default Register;
