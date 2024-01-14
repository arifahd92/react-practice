import React, { useRef, useState } from 'react'
const clg=console.log
const Todo=()=>{
    const [todo,setTodo]= useState([])
    const [editId, setEditId]=useState(0)
    const [val, setVal]= useState("")
    const inputRef=useRef()
  const handleAdd=()=>{
    let val =inputRef.current.value
    if(!!val){
        let obj={
            name:val,
            id:Math.floor(Math.random()*1000+50)
        }
        setTodo((prev)=>[...prev,obj])
        inputRef.current.value=""
    }
    else{
        alert('input is empty')
    }

  }
  const handleEdit=(id,val)=>{
    setEditId(id)
    setVal(val)
  }
  const handleDelete=(id)=>{
     setTodo((prev)=>prev.filter((item)=>item.id !=id))
  }
  const handleChange=(e)=>{
    setVal(e.target.value)
  }
 const handleSave=(id)=>{
    const oldTodo=[...todo]
    //let newTodo=oldTodo.filter((item)=>item.id==id?{name:val, id:id}:item)//it works based on true false return
    let newTodo=oldTodo.map((item)=>item.id==id?{...item,name:val}:item)
    clg({oldTodo, id,newTodo})
    setTodo(newTodo)
    setEditId(0)
    setVal('')

 }
   return (
   <>
   <input  ref={inputRef}/>
   <button onClick={handleAdd} > add </button>
   <br/>
  {
    todo.map((item, ind)=>{
        return (
        <div key={item.id}>
       {item.id===editId? <>
        <input type="text" value={val} onChange={(e)=>handleChange(e)}/>
         <button onClick={()=>setEditId(0)}>cancel</button>
         <button onClick={()=>handleSave(item.id)}>save</button>
       </>
         :
       <><span>{item.name}</span>
        <button onClick={()=>handleEdit(item.id,item.name)}>edit</button> 
        <button onClick={()=>handleDelete(item.id)}>delete</button>
       </>}
        
      
        </div>
        )
    })
  }
   </>
   )  
}
export default Todo