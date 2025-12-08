'use client'
import React, {useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

        /* The 0 inside parentheses is the initial value

        When the component first loads, the state starts at 0

        You could use any initial value: useState(100), useState("hello"), useState([]), etc. */
    return (
     <div>
        <h1>{count}</h1>
         {/*{count} - The curly braces {} tell React: "This is JavaScript, not HTML"*/}
        <button onClick={() => setCount(count + 1)}>
            increment
        </button>
        <button onClick={() => setCount(count - 1)}>
            decrement
        </button>
     </div>
    );
}
