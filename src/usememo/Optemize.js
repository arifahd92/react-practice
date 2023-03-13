import React, { useCallback, useEffect, useMemo, useState } from 'react'

export default function Optemize() {
    const [incrementone,setincrementone]=useState(0)
    const [incrementtwo,setincrementtwo]=useState(0)
    function one(){
        console.log("i m increment0ne")
        setincrementone(incrementone+1)
    }
    function two(){
        setincrementtwo(incrementtwo+1)
    }
    // let even=()=>{//fxn even is being called in each rerendering yani jab two increment ho 
    //              // raha tab bhi to avoid this i will wrap it inside usememo
    //     console.log("even fxn got called")
    //     let i = 0;
    //     while(i<900000000){
    //         i++
    //     }
        
    //     return incrementone%2==0
    // }


    // usememo useCallback blkl useEffect ki tarah bas in dono ko usi fxn name k varible me assigned to that fxn 
    let even=useMemo(()=>{
        let i = 0;
        console.log("even fxn got called")
            while(i<900000000){
                i++
            }
            
            return incrementone%2==0//return even k andar assign ho jayega , jabki dekha jaaye to ye return usememo k callback fxn ka return hai
    },[incrementone])
    console.log(typeof(even))//boolean variable not a fxn
    console.log(typeof(setincrementone))//fxn
    console.log(typeof(incrementone))//number

    //note useEffect cannot do this because we cannot assign useEffect to even so  line 46 will call that fxn , line 47 will not work
  return (
    <div>
      <button onClick={one}> incrementone: {incrementone} </button>
      <br/>
      <button onClick={two}> incrementtwo: {incrementtwo}</button>
      <br/>
      {/* <div>{even()?"even":"odd"}</div>//without usememo */}// har baar rerender incrementtwo k bhi update hone par
      //jab event listner nhi hai yaani closing tag k bahar koi fxn call karna hai to () lagega bas us fxn k andar state variable nhi hona chahiye
      <div>{even?"even":"odd"}</div>// yaha pe even fxn nhi raha ek variable ho gaya
    </div>
  )
}
