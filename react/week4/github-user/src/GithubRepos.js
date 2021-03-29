import { useState } from "react";

const HackYourFutureRepos = () => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = () => {
    fetch("https://api.github.com/users/HackYourFuture-CPH/repos")
      .then((response) => response.json())
      .then((repos) => setRepos(repos));
  };

  return (
    <div>
      <h1>Hack your future- CPh Repos</h1>
      <button onClick={fetchRepos}>Get Repos</button>
      {repos.map((repo) => (
        <div key={repo.id}>{repo.name}</div>
      ))}
    </div>
  );
};

export default HackYourFutureRepos;
