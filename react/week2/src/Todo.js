import React, { useState } from "react";
import "./App.css";

function TodoItem({ id, description, removeTodo }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="Render-item">
      <input onChange={() => setChecked(!checked)} type="checkbox"></input>
      <p style={{ textDecoration: checked ? "line-through" : "none" }}>
        {description}
      </p>
      <button onClick={() => removeTodo(id)}>Delete</button>
    </div>
  );
}

function Addtodo({ addTodosAfterButtonClick }) {
  const [inputVal, setInputValue] = useState("");

  const inputFieldValue = (event) => {
    let inputValue = event.target.value;
    setInputValue(inputValue);
  };

  return (
    <>
      <input
        onChange={inputFieldValue}
        type="text"
        placeholder="Enter the todo item here"
      ></input>
      <button onClick={() => addTodosAfterButtonClick(inputVal)}>
        Add Todo item
      </button>
    </>
  );
}

function RenderTodo({ todos }) {
  const [currentTodo, setCurrentTodo] = useState(todos);

  const removeTodo = (itemIdToRemove) => {
    const filteredItems = currentTodo.filter((data) => {
      return data.id !== itemIdToRemove;
    });
    setCurrentTodo(filteredItems);
  };

  const addTodosAfterButtonClick = (inputVal) => {
    setCurrentTodo((prev) => {
      if (inputVal) {
        const idValue = prev.length + 1;
        return prev.concat({ id: idValue, description: inputVal });
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
