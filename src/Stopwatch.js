import React, { useEffect, useState } from 'react'

function Stopwatch() {
    const [btn1,setbtn1]= useState("start")
    const [updatedminute,setupdatedminute]=useState(5)
    const [updatedsecond, setupdatedsecond]=useState(59)
    const [run,setrun]=useState(false)
    useEffect(()=>{
      if(run){

        mytimer()
      }
      
    },[updatedsecond,run])
    function mytimer(){
        setTimeout(()=>{

         
         setupdatedsecond(updatedsecond-1)
         if(updatedsecond==1 && updatedminute!==0){
          setupdatedsecond(59)
          setupdatedminute(updatedminute-1)
          
         }
         if(updatedminute==0 && updatedsecond==0){
          console.log("else block")
          setupdatedsecond(0)
          setupdatedminute(0)
         }
        },50)
   
      
    }
    function handlebtn1(){
        if(btn1=="start"){
        setbtn1("stop")
        setrun(true)
        }
        else{
            setbtn1("start")
            setrun(false)
        }

    }
    function resettimer(){
      setupdatedsecond(59)
      setupdatedminute(4)
      setrun(false)
      setbtn1("start")
    }
  return (
    <div>
        <h1>{updatedminute}:{updatedsecond}</h1>
      <button onClick={handlebtn1} >{btn1}</button>
      <br />
      <button onClick={resettimer}>reset</button>
    </div>
  )
}

export default Stopwatch
