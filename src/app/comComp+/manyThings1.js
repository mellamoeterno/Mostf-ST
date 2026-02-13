// when in need of creating functional component that takes a name prop and displays a greeting message.
 

/* const Greeting = ({ name }) => {
    return <h2>Hello, {name}!</h2>;
};

export default Greeting;

 */


// when in need of creating a component that maintains a count state and has buttons to increment and decrement the count.

/* import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>counting: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default Counter;
 */





//when in need of creating a controlled component for an input field.

/* import React, { useState } from 'react';

const ControlledInput = () => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return <input type="text" value={value} onChange={handleChange} />;
};

export default ControlledInput;
 */















