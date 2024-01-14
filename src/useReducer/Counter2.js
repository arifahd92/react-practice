import React, { useReducer } from "react"; 
const INCREMENT='INCREMENT'
const DECREMENT="DECREMENT"
const initialState={count:0,isEven:false}
const reducerFunction=(state,action)=>{
switch(action.type){
    case INCREMENT:
        return{
            count:state.count+1,
            isEven:(state.count +1 )%2===0
        }
         case DECREMENT:
        return{
            count:state.count-1,
             isEven: (state.count -1)%2===0
        }    
               default:
        return state    
}
}
const Counter2=()=>{
    const [state,dispatch]= useReducer(reducerFunction,initialState)
    return (<>
     <div>count:{state.count}type:{state.isEven?'even':'odd'}</div> <button onClick={()=>dispatch({type:INCREMENT})}>increment</button> 
     <button onClick={()=>dispatch({type:"DECREMENT"})}>decrement</button> 
     <br/>
    </>)
}
export default Counter2