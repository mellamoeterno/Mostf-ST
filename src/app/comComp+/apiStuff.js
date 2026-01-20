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

const useDebouncedSearch = (searchTerm, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(searchTerm);

  useEffect(() => {
        const timer = timeOut(() => {
            setDebouncedValue(searchTerm);
        },delay);
        return () => ClearTimeout(timer);
    }, [searchTerm, delay])
    
}




 */