import React, { useContext, useState } from 'react';
//import './ComponentA.css';
import Data from './FormContext';
function ComponentA() {
const {onSubmit,onChange, state}=useContext(Data)


  return (
    <div className="App">
      <h1>React Form component A</h1>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={onChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={(e)=>onChange(e)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={onChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComponentA;
