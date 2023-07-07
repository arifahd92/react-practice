import React from 'react'

export default function AnotherComponent({ count, setCount }) {
    return (
        <div>
            im an other component
            <button onClick={() => setCount((prev) => !prev)}>
                show another component(when it will be clicked )
            </button>
        </div>
    )
}
