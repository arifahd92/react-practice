import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Links from './Links'
import Login from './Login'
import Protection from './Protection'
import HomeDynamic from './HomeDynamic'

export default function Rout() {
    // protection is working as heigher order component
    //it is taking a component as parameter and returning a component 
    return (
        <div>
            <Links />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/contact" element={<Protection Comp={<Contact />} />} />
                <Route path="/about" element={<Protection Comp={<About />} />} />
                <Route path="/home/:dynamic" element={<HomeDynamic />} />
                <Route path="/home" element={<Home />} />
                <Route path="/*" element={<h1>Error page</h1>} />
            </Routes>
        </div>
    )
}
