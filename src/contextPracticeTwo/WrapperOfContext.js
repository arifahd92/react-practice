import React from 'react'
import ContextProvider from './ContextProvider'
import ComponentA from './ComponentA'
import ComponentB from './componentB'

export default function WrapperOfContext() {
  return (
    
        <ContextProvider>
            <ComponentA/>
            <ComponentB/>
        </ContextProvider>
  
  )
}
