/* import React, { useEffect, useState} from "react";

//data fetching with states
const useFetchData = (url) => {
    const [state, setState] = useState({
        data:null,
        loading:true,
        error:null,
    })

    useEffect(() => {

    },[url]);
};

//search with debounce 

const useDebouncedSearch = (searhTerm, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(searhTerm);

    useEffect(() => {
        const timer = setTimoeout(() => {
            setDebouncedValue(searchTerm);
        },delay);
        return () => ClearTimeout(timer);
    },[searchTerm, delay])
};





 */