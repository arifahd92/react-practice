import React from "react";

import { BrowserRouter } from "react-router-dom";
import Rout from "./routing1/Component/Rout";
import CustomApp from "./customHook/CustomApp";
import Contact from "./firebase/Contact";
import Lifecycle from "./UseeffectHook/Lifecycle";
import Simple from "./UseeffectHook/Simple";
import Debounce from "./UseeffectHook/Debounce";
import AppContext from "./contextApi2/AppContext";
import AppOfPracticeContext from "./ContextPractice/AppOfPracticeContext";
import DrawerCenter from "./materialui/DrawerCenter";
export default function App() {
  return (
    <BrowserRouter>
      {/*<Rout />*/}
      {/*<AppContext />*/}
      {/* <AppOfPracticeContext />*/}
      <DrawerCenter />
    </BrowserRouter>
  );
}
