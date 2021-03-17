import { useContext, useEffect } from "react";
import { GithubUserContext } from "./GithubStates";

const FetchDataContext = () => {
  const GithubUserContextValue = useContext(GithubUserContext);

  const onChangeInputHandle = (event) => {
    event.preventDefault();
    GithubUserContextValue.setInputValue(event.target.value);
  };

  const githubFetchApi = () => {
    if (GithubUserContextValue.inputValue) {
      GithubUserContextValue.setIsLoading(true);
      fetch(
        `https://api.github.com/search/users?q=${GithubUserContextValue.inputValue}`
      )
        .then((response) => response.json())
        .then((data) => {
          GithubUserContextValue.setIsLoading(false);
          if (data.message) {
            GithubUserContextValue.setmessage(data.message);
          } else if (data.items.length) {
            GithubUserContextValue.setUsers(data.items);
          } else {
            GithubUserContextValue.setmessage("No results......");
          }
        });
    }
  };

  useEffect(() => {
    githubFetchApi();
  }, [GithubUserContextValue.inputValue]);

  return (
    <div>
      <h1>Github user searcher</h1>
      <input
        type="text"
        onChange={onChangeInputHandle}
        value={GithubUserContextValue.inputValue}
        placeholder="Search...."
      ></input>

      <div>{GithubUserContextValue.isLoading && <h2>loading....</h2>}</div>
      {GithubUserContextValue.message !== "" && (
        <div>{GithubUserContextValue.message}</div>
      )}

      {GithubUserContextValue.users.length === 0
        ? "No Results"
        : GithubUserContextValue.users.map((data, index) => (
            <div key={index}>{data.login}</div>
          ))}
    </div>
  );
};

export default FetchDataContext;
