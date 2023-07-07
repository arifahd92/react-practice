import React, { useState } from 'react';

export default function Batching() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // Multiple state updates within a single event handler
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        console.log(count + "inside handle click")
    };

    console.log(count);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}
