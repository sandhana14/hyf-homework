import TodoList from "./Todo";
import "./App.css";

const userActivities = [
  { id: 0, activity: "Return a library  book", deadline: "2021-03-12" },
  { id: 1, activity: "Sending job application", deadline: "2021-02-28" },
  { id: 2, activity: "Booking flight tickets", deadline: "2021-03-5" },
];

function App() {
  return (
    <div>
      <TodoList todos={userActivities} />
    </div>
  );
}

export default App;
