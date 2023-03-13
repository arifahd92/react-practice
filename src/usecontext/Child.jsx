import React, { useContext } from 'react'
import { Globalinfo } from './Parent'
export default function Child() {
    const {scolor}=useContext(Globalinfo)
    console.log(scolor)
  return (
    <div>
      <h1>i m child </h1>
    </div>
  )
}
