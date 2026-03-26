//when in need of writting a higher-order component that logs props to the console.


/* import React from 'react';

const withLogging = (WrappedComponent) => {
    return (props) => {
        console.log('Props:', props);
        return <WrappedComponent {...props} />;
    };
};

export default withLogging; */

 


//when in need of demonstrating how to utilize the useContext hook in React (allowing components to access context data 
//without having to pass props through every level of the component tree)

/* import React, { useContext, createContext } from 'react';

const MyContext = createContext();

const ContextProvider = ({ children }) => {
    return <MyContext.Provider value="Hello from Context">{children}</MyContext.Provider>;
};

const ComponentUsingContext = () => {
    const value = useContext(MyContext);
    return <h2>{value}</h2>;
};

const App = () => {
    return (
        <ContextProvider>
            <ComponentUsingContext />
        </ContextProvider>
    );
};

export default App; */





 
//a component that fetches data using async/await and (showing how to fetch data asynchronously using the async/await 
//syntax within a functional component, also showcasing the use of the useEffect hook for side effects)

/* import React, { useEffect, useState } from 'react';

const AsyncFetchComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.example.com/data');
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

export default AsyncFetchComponent; */





//translate to tsx