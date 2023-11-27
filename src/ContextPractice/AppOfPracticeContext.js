import React, { useContext, useState } from "react";
import CompA from "./CompA";
import CompB from "./CompB";
import Data from "./Datacontext";
import ContextProvider from "./ContextProvider";
export default function AppOfPracticeContext() {
  return (
    <>
      <ContextProvider>
        <CompA />
        <CompB />
      </ContextProvider>
    </>
  );
}
