import React, { memo } from 'react'

function Child({incrementtwo,setincrementtwo,v,fun}){
  fun()
  console.log(v)
  console.log("child component render")                  
  return (
    <div>
      <h1 onClick={()=>setincrementtwo(incrementtwo+1)}>i m child component:-{incrementtwo}</h1>
    </div>
  )
}
// export default Child// parent k har commponent me jab incrementone ko call karte hain to child comp ka
                        //  console chal raha yaani child component rerender ho raha, before memo and use callback
export default memo(Child)//rerendring get stopped