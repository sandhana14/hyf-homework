import "./App.css";
import UsersList from "./FetchDataContext";
import HackYourFutureRepos from "./GithubRepos";
import GithubUserProvider from "./GithubStates";

function App() {
  return (
    <div className="app">
      <div className="user column-one">
        <GithubUserProvider>
          <UsersList />
        </GithubUserProvider>
      </div>

      <div className="repos column-two">
        <HackYourFutureRepos />
      </div>
    </div>
  );
}

export default App;
