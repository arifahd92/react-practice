import React from 'react'
import useCounter from './useCounter'
function CompA() {
   let [val,counter]=useCounter()
  return (
    <div onClick={counter}>CompA value of A ={val}</div>
  )
}

export default CompA