//when in need to write a component that fetches data from an API and displays it


/* import React, { useEffect, useState } from 'react';

const DataFetchingComponent = () => {
    const [data, setData] = useState([]);                   //state for data

    useEffect(() => {
        fetch('https://api.example.com/data')
            .then(response => response.json())              //fetching part
            .then(data => setData(data));
    }, []);

    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>{item.name}</li>          //"key" makes react identify which items have changed, been added, or been removed in a list.
            ))}
        </ul>
    );
};

export default DataFetchingComponent; */





//when in need of passing data from a parent component to a child component


/* const ChildComponent = ({ messageFromChild }) => {               ({ messageFromChild }) its like a const messageFromChild created inside ({}), but used like for data hold
    return <h3>{messageFromChild}</h3>;
};

const ParentComponent = () => {
    const messageFromParent = "Hello from Parent";

    return <ChildComponent messageFromChild={messageFromParent} />;
};

export default ParentComponent; */





//when in need of creating a component that toggles between two states using a button

/* import React, { useState } from 'react';

const ToggleComponent = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <h2>{isOn ? 'On' : 'Off'}</h2>
            <button onClick={() => setIsOn(!isOn)}>Toggle</button>
        </div>
    );
};

export default ToggleComponent; */

//translate to tsx