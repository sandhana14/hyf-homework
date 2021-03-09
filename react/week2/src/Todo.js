import React, { useState } from "react";
import "./App.css";
import Addtodo from "./Addtodo";
import TodoItem from "./TodoItem";

function RenderTodo({ todos }) {
  const [currentTodo, setCurrentTodo] = useState(todos);

  const removeTodo = (itemIdToRemove) => {
    const filteredItems = currentTodo.filter(
      (data) => data.id !== itemIdToRemove
    );
    setCurrentTodo(filteredItems);
  };

  const addTodosAfterButtonClick = (inputVal) => {
    setCurrentTodo((prev) => {
      if (inputVal) {
        const idValue = prev.length + 1;
        return [...prev, { id: idValue, description: inputVal }];
      } else {
        return prev;
      }
    });
  };

  return (
    <>
      <Addtodo addTodosAfterButtonClick={addTodosAfterButtonClick} />
      <ul>
        {currentTodo.length !== 0 ? (
          currentTodo.map((todo) => (
            <TodoItem
              key={todo.id}
              description={todo.description}
              removeTodo={removeTodo}
              id={todo.id}
            />
          ))
        ) : (
          <h2>No items found</h2>
        )}
      </ul>
    </>
  );
}

export default RenderTodo;
