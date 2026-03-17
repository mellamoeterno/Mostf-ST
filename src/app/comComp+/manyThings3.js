//when in need of using the useEffect hook to mimic componentDidMount

/* import React, { useEffect } from 'react';

const ComponentDidMountExample = () => {
    useEffect(() => {
        console.log('Component Mounted');
    }, []);                                                     // Empty dependency array mimics componentDidMount

    return <h2>Check the console for a message.</h2>;
};

export default ComponentDidMountExample; */



//when in need of creating a component that displays a list of items and highlights the selected item

/* import React, { useState } from 'react';

const HighlightList = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const [selectedIndex, setSelectedIndex] = useState(null);

    return (
        <ul>
            {items.map((item, index) => (
                <li 
                    key={index} 
                    onClick={() => setSelectedIndex(index)}                             figure out why is setSelectedIndex(index) and not (items)
                    style={{ backgroundColor: selectedIndex === index ? 'yellow' : 'white' }}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default HighlightList; */








//when in need to create a simple form with validation for an email input


/* 
import React, { useState } from 'react';

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Invalid email format');
        } else {
            setError('');
            console.log('Email submitted:', email);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter your email" 
            />
            <button type="submit">Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default EmailForm; */

  