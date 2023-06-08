import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Todo from "./todo/Todo";
import Lifecycle from "./UseeffectHook/Lifecycle";
import Reducer from "./useReducer/Reducer";
import SellerPage from "./sellerAdminPage/SellerPage";

export default function App() {
  return (
    <div>
      <SellerPage />
    </div>
  );
}
