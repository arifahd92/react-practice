import React, { createContext } from 'react'
import Child from './Child'
export let Globalinfo= createContext()
function Parent() {
  return (
<Globalinfo.Provider value={{color:"red",scolor:"blue"}}>
  <Child/>
</Globalinfo.Provider>

  )
}

export default Parent
