import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./ContextPractice/ContextProvider";
import TodoEdit from "./todo/TodoEdit";
import AppOfPracticeContext from "./ContextPractice/AppOfPracticeContext";
import WrapperOfContext from "./contextPracticeTwo/WrapperOfContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <WrapperOfContext />
  </>
);
