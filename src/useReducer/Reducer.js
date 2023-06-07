import React, { useEffect, useReducer, useState } from "react";
const reducerFunction = (state, action) => {
    if (action.type === "type") {
        //action me dispatched object aata hai
        if (action.value.length > 6) {
            return { ...state, val: action.value, isValid: true };
        } else {
            return { ...state, val: action.value, isValid: false };
        }
    }
    return state;
};
export default function Reducer() {
    const [stateFlag, setstateFlag] = useState(false);
    const [state, dispatch] = useReducer(reducerFunction, {
        val: "",
        isValid: false,
    });
    function changeHandeler(e) {
        console.log(e.target.value);
        if (state.isValid) {
            console.log("valid input");
            setstateFlag(true);
        }
        dispatch({ type: "type", value: e.target.value });
    }

    return (
        <div>
            <input type="text" value={state.val} onChange={changeHandeler} />
            <button
                className={state.isValid ? "valid" : "invalid"}
                disabled={!state.isValid}
                onClick={() => console.log("i got clicked")}
            >
                {state.isValid ? "you can click" : "youcannotclick"}
            </button>
        </div>
    );
}
