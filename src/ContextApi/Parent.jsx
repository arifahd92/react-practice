import React, { createContext } from 'react'
import Child from './Child';
export let Globalinfo=createContext();
function Parent() {
    let colour="red"
  return (
      <Globalinfo.Provider value={{fcolor:colour}} >
      <div>Parent</div>
        <Child/>
      </Globalinfo.Provider>
    
  )
}

export default Parent