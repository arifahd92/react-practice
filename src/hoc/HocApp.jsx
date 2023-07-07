import React from 'react'
import CompA from './CompA'
import CompB from './CompB'

function Hocapp() {
  return (
    <>
    <CompA name="arif"/>
    <CompB name="taslim"/>
    {/* these all are accessible in hoc.jsx only from that we can pass in comp with help of {...props} */}
    {/* but in hoc.jsx directly accessible */}
    </>

  )
}

export default Hocapp