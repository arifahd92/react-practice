import React from 'react'
import Child from './Child'
import { useState, useCallback } from 'react'
export default function Parant() {
const [incrementone,setincrementone]=useState(0)
const [incrementtwo,setincrementtwo]=useState(0)
let v = 5

// let fun = ()=>{// isi fxn ki wajah se child rerender ho raha tha memo use karne k baad bhi  so is problem ko fix kar diya usecallback ne
//   console.log("hey arif how are you ")// note v increment two and more variable ko as a prom bhejne par (jab fxn nhi bheja tha) 
//                                       //  memo rerendring rook le raha tha gadbad fxn bhejne par hi hui
// }

let fun = useCallback(()=>{// like useEffect bas fxn variable me assigend
  let i=0;
  while(i<1000000000)
  i++
  console.log("hey arif how are you ")
  setincrementtwo(incrementtwo+1)
},[incrementtwo])

  function one(){
     setincrementone(incrementone+1)
    }
     return (
      <div>
      <h1>i m parant</h1>
      <button onClick={one} > one: {incrementone} </button>
      {/* <Child/> without usecallback */}
   
    <Child incrementtwo={incrementtwo} fun={fun}/>
      // memo failed jaise hi fxn ko as a prop pass kiya even if fxn is not being called in child yet child started rerendring on rendring parent

      </div>
    )
}
