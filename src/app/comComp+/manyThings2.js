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
                <li key={item.id}>{item.name}</li>          //display on return part
            ))}
        </ul>
    );
};

export default DataFetchingComponent; */




    


//when in need of passing data from a parent component to a child component


/* const ChildComponent = ({ messageFromChild }) => {
    return <h3>{messageFromChild}</h3>;
};

const ParentComponent = () => {
    const messageFromParent = "Hello from Parent";

    return <ChildComponent messageFromChild={messageFromParent} />;
};

export default ParentComponent; */

//i dont get why  return <ChildComponent messageFromChild={messageFromParent} />;
//figure ts out.




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


