import { useState, useEffect } from "react";

const useDebounce = (inputValue) => {
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    if (inputValue) {
      const timeout = setTimeout(() => {
        setDebouncedQuery(inputValue);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [inputValue]);

  return debouncedQuery;
};

export default useDebounce;
