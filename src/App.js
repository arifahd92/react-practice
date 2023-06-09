import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./foodOrderApp/Layout/Header";
import Meals from "./foodOrderApp/Meals/Meals";

export default function App() {
  return (
    <>
      <Header />
      <Meals />
    </>
  );
}
