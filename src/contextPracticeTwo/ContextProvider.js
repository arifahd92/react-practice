import React from 'react'
import { useReducer } from 'react'
import Data from './FormContext'
const initialState={name:"", email:"", password:"",users:[]}
const reducer=(state, action)=>{
    if(action.type==='submit'){
        console.log("in action.type= submit")
       if(state.password.length<8){
        alert("password length must be greater than or equal to 8")
        return state
       }

       console.log({initialState, name:state.name, email:state.email,password:state.password})
      
       alert("form submitted")
     
      let prevUsers=[...state.users]
       prevUsers.push({name:state.name, email:state.email,password:state.password})
       return {...state,name:"", email:"", password:'',users:prevUsers}

    }
    let type= action.type//it will be either name or email, or password
     return {...state,[type]:action.val}
     
}
export default function ContextProvider(props) {
    const [state,dispatch]= useReducer(reducer,initialState)
   const onChange=(e)=>{
    dispatch({type:e.target.name,val:e.target.value})
   }
  const onSubmit=(e)=>{
    e.preventDefault()
    dispatch({type:"submit"})

  }
  return (
    <Data.Provider value={{state,onChange, onSubmit}} >
        {props.children}
    </Data.Provider>
  )
}
