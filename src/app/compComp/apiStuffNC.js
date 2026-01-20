/* // Pattern 1: Data fetching with states
const useFetchData = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });
  
  useEffect(() => {
    // Fetch logic here
  }, [url]);
};

// Pattern 2: Form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);
  try {
    // Submit logic
  } catch (error) {
    // Error handling
  } finally {
    setSubmitting(false);
  }
};

// Pattern 3: Search with debounce
const useDebouncedSearch = (searchTerm, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(searchTerm);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(searchTerm);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [searchTerm, delay]);
}; */