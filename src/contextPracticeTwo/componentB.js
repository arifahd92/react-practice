import React, { useContext } from 'react'
import Data from './FormContext'

export default function ComponentB() {
    const {state}= useContext(Data)
    const printUsers=()=>console.log(state)

  return (
<>
<div>
    i m component B and  will use form value
    {state.users.map((item, ind)=>{
        return(<>
        <ul key={ind}>
            <p>users</p>
            <li>
                {item.name}{""}{item.email}
            </li>
        </ul>
        </>)
    })}
  
</div>
</>
 
  )
}
