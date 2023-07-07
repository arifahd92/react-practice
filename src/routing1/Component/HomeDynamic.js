import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'

export default function HomeDynamic() {
    const dynamiclink = useParams()
    console.log(dynamiclink)
    //{dynamic:t}
    console.log(dynamiclink.dynamic)
    //t
    return (
        <div>
            i m home dynamic page
            <Routes>

                <Route path='/home/inside/t' element={<h1>inside home</h1>} />
            </Routes>
        </div>
    )
}
