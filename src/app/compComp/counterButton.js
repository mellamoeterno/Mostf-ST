'use client'
import React, {useState} from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

        /* The 0 inside parentheses is an paremeter that will be used along with useState method */
    return (
     <div>
        <h1>{count}</h1>
         {/*{count} - The curly braces {} tell React: "This is JavaScript, not HTML" and is also needed for when 
         you want more than 1 statement*/}
        <button onClick={() => setCount(count + 1)}>
            increment
        </button>
        <button onClick={() => setCount(count - 1)}>
            decrement
        </button>
     </div>
    );
}
