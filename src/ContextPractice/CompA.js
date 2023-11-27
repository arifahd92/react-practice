import React, { useContext } from "react";
import { Data } from "./Datacontext";

function CompA() {
  const data = useContext(Data);
  console.log({ data });
  return (
    <div>
      <p> comp A i m using context value name and email</p>
      <input type="text" name="name" id="" />
      <input type="email" name="email" id="" />
    </div>
  );
}

export default CompA;
