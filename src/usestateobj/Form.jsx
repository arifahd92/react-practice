import React, { useState } from 'react'

export default function Form() {
    let [fdata,setfdata]=useState([])
    let [data, setdata]=useState({
       name:"",email:"",pass:"" 
    })
    let name;
    let handleinput=(e)=>{
     name= e.target.name
     setdata({...data,[name]:e.target.value})
     console.log(name)
    }
  let   hndlesubmit=(e)=>{
     e.preventDefault()
     setfdata([...fdata,data])//array of obj
    }
  return (
    <div>
        <h1>i m form</h1>
      <form action="" method="get" onSubmit={hndlesubmit}>
        <input type="text" name="name" id=""  placeholder='enter name'   onChange={handleinput} />
        <input type="email" name="email" id=""  placeholder='enter name'  onChange={handleinput}/>
        <input type="password" name="pass" id=""  placeholder='enter name' onChange={handleinput} />
        {
            fdata.map((elm,ind)=>{
                return(
                    <>
                    <h1 key={ind}>{elm.name}</h1>
                    <h1 key={ind}>{elm.email}</h1>
                    </>
                )
            })
        }
        <input type="submit" value="submit" />
      </form>

    </div>
  )
} 
