import React from "react";
import { useReducer } from "react";
import Data from "./Datacontext";
//const initialState = { name: "", mail: "" };
const reducer = (state, action) => {
  if (action.type === "name") {
    //  state.name = action.value;// it will not work
    //do not modify always return a new state
    return { ...state, name: action.value };
  } else if (action.type === "mail") {
    return { ...state, mail: action.value };
  } else return state;
};
export default function ContextProvider(props) {
  const initialState = { name: "", mail: "" };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const mailHandeler = (e) => {
    const val = e.target.value;
    dispatch({ type: "mail", value: val });
  };

  const nameHandeler = (e) => {
    const val = e.target.value;
    dispatch({ type: "name", value: val });
  };
  return (
    <Data.Provider value={{ state, nameHandeler, mailHandeler }}>
      {props.children}
    </Data.Provider>
  );
}
