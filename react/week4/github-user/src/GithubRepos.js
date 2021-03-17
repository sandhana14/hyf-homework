import { useState } from "react";

const HackYourFutureRepos = () => {
  const [repos, setrepos] = useState([]);

  const hyfRepos = () => {
    fetch("https://api.github.com/users/HackYourFuture-CPH/repos")
      .then((response) => response.json())
      .then((repos) => {
        console.log(repos);
        return setrepos(repos);
      });
  };

  return (
    <div>
      <h1 onClick={hyfRepos}>Hack your future- CPh Repos</h1>
      {repos.map((repo) => (
        <div key={repo.id}>{repo.name}</div>
      ))}
    </div>
  );
};

export default HackYourFutureRepos;
