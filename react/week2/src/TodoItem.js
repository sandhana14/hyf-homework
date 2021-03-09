import React, { useState } from "react";

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

export default TodoItem;
