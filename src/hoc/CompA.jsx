import React from 'react'
import Wrapper from "./Hoc"
 function CompA(props) {
    console.log(props)// {village: 'sihoriya', val: 0, name: 'taslim', fun: ƒ}
  return (
    <>
    <div onClick={props.fun}>CompA - value={props.val}</div>
    </>
  )
}
export default Wrapper(CompA)