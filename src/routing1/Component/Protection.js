import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protection(props) {
    const navigate = useNavigate(null)
    const { Comp } = props
    useEffect(() => {
        let loggedin = JSON.parse(localStorage.getItem("login"))
        console.log(loggedin)
        if (!loggedin) {
            alert("log in fist")
            navigate("/")
        }

    })
    return (
        <div>
            {Comp}
        </div>
    )
}
