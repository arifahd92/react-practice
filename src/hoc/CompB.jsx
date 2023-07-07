import React from 'react'
import Wrapper from './Hoc'
function CompB(props) {
    console.log(props)
  return (
    <>
    <div onClick={props.fun}>CompB value b={props.val}</div>
    </>
  )
}

export default Wrapper(CompB)