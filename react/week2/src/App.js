import "./App.css";
import RenderTodo from "./Todo";
import TimeUserOnWebsite from "./Count";
import React from "react";
import todos from "./Todos";

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
