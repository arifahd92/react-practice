import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Links from './Links'
import Login from './Login'
import Protection from './Protection'

export default function Rout() {
    return (
        <div>
            <Links />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/contact" element={<Protection Comp={<Contact />} />} />
                <Route path="/about" element={<Protection Comp={<About />} />} />
                <Route path="/home" element={<Home />} />
                <Route path="/*" element={<h1>Error page</h1>} />
            </Routes>
        </div>
    )
}
