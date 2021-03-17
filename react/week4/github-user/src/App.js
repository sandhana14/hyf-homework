import "./App.css";
import FetchDataContext from "./FetchDataContext";
import HackYourFutureRepos from "./GithubRepos";
import GithubUserProvider from "./GithubStates";

function App() {
  return (
    <div className="app">
      <div className="user column-one">
        <GithubUserProvider>
          <FetchDataContext />
        </GithubUserProvider>
      </div>

      <div className="repos column-two">
        <HackYourFutureRepos />
      </div>
    </div>
  );
}

export default App;
