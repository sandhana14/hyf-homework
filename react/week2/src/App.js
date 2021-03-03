import "./App.css";
import RenderTodo from "./Todo";
import TimeUserOnWebsite from "./Count";
import React from "react";
const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

function App() {
  return (
    <div>
      <h1>Todo list</h1>
      <TimeUserOnWebsite />
      <RenderTodo todos={todos} />
    </div>
  );
}

export default App;
