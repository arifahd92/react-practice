import React from "react";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div>
      <Link to="/home">home</Link>
      <br />
      <Link to="/contact">contact</Link>
      <br />
      <Link to="/about">about</Link>
      <br />
      <Link to="/"> login</Link>
      <br />
      <br />
    </div>
  );
}
