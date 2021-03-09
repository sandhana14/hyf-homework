import React, { useState } from "react";

function Addtodo({ addTodosAfterButtonClick }) {
  const [inputVal, setInputValue] = useState("");

  const inputFieldValue = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <input
        onChange={inputFieldValue}
        type="text"
        value={inputVal}
        placeholder="Enter the todo item here"
      ></input>
      <button
        onClick={() => {
          addTodosAfterButtonClick(inputVal);
          setInputValue("");
        }}
      >
        Add Todo item
      </button>
    </>
  );
}

export default Addtodo;
