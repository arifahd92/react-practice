import React from "react";

import { BrowserRouter } from "react-router-dom";
import Rout from "./routing1/Component/Rout";
import CustomApp from "./customHook/CustomApp";
import Contact from "./firebase/Contact";
import Lifecycle from "./UseeffectHook/Lifecycle";
import Simple from "./UseeffectHook/Simple";
import Debounce from "./UseeffectHook/Debounce";
import AppContext from "./contextApi2/AppContext";
export default function App() {
  return (
    <BrowserRouter>
      {/*<Rout />*/}
      <AppContext />
    </BrowserRouter>
  );
}
