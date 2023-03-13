import React,{useState} from 'react'

export default function Todo() {
    cost [data,setdata]=useState([])
    const[input,setinput]=useState("")
    function additem(){
        setdata([...data,input])
    }
 function deletedata(ind){
      let newdata=data.filter((elm,indexx)=>indexx!=ind)
      setdata(newdata)
 }
  return (
    <div>
      <input onClick={(e)=>setinput(e.target.value)} type="text" name="" id="" />
      <button onClick={additem} >add</button>
      {
        data.map((elm,ind)=>{
            return(
                <>
                <h1 key={ind} onDoubleClick={()=>deletedata(ind)} >{elm}</h1>
                </>
            )
        })
      }
    </div>
  )
}

