import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate(null);
  function handleLogin() {
    alert("logged in ");
    localStorage.setItem("login", true);
    navigate("/contact");
  }
  return (
    <div>
      <h1>i m login page</h1>

      <button onClick={handleLogin}> click to login</button>
    </div>
  );
}
