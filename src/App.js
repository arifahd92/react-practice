import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Todo from "./todo/Todo";
import Lifecycle from "./UseeffectHook/Lifecycle";
import Reducer from "./useReducer/Reducer";
import SellerPage from "./sellerAdminPage/SellerPage";
import Header from "./foodOrderApp/Layout/Header";
import Meals from "./foodOrderApp/Meals/Meals";

export default function App() {
  return (
    <>
      <Header />
      <Meals />
      <h1>i m jinda</h1>
    </>
  );
}
