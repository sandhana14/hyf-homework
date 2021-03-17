import { createContext, useState } from "react";

export const GithubUserContext = createContext();

const GithubUserProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setmessage] = useState("");

  const countValue = {
    inputValue,
    setInputValue,
    users,
    setUsers,
    isLoading,
    setIsLoading,
    message,
    setmessage,
  };
  return (
    <GithubUserContext.Provider value={countValue}>
      {children}
    </GithubUserContext.Provider>
  );
};

export default GithubUserProvider;
