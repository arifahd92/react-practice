import React, { useContext } from 'react'
import { Globalinfo } from './Parent'

function Child() {
    const {fcolor, scolor}=useContext(Globalinfo)
    console.log(fcolor)
  return (
    <div>Child</div>
  )
}

export default Child