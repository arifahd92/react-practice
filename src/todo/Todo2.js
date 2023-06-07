import React, { useState } from 'react'
import "bootstrap"
export default function App(){
  const [input, setinput]=useState("")
  const [data, setdata]=useState([])

  function funcadd(){
    if(input){
      setdata([...data,input])
      setinput("")
    }
  }
  function handledelete(ind){
   console.log("delete called")
   let newdata=data.filter((item,i)=>{
    return i!==ind
   })
   setdata(newdata)

  }
  return(
    <>
<input type="text" value={input} onChange={(e)=>setinput(e.target.value)} />
<button onClick={funcadd}>add</button>
{
  data.length !==0?(

  

  data.map((item,ind)=>{
     return(
      <>
<h1 key={ind}>{item}</h1><button onClick={()=>handledelete(ind)}>delete</button> 

      </>
     )
  }
  ))
  :""
}
    </>
  )
}