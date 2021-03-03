const Title = () => {
  return <h1>Todo list</h1>;
};

function TodoListRendering({ activity, deadline }) {
  return (
    <ul>
      <li>
        {activity},{deadline}
      </li>
    </ul>
  );
}

function TodoList({ todos }) {
  return (
    <>
      <Title />
      {todos.map((todo) => {
        return (
          <TodoListRendering
            activity={todo.activity}
            deadline={todo.deadline}
            key={todo.id}
          />
        );
      })}
    </>
  );
}

export default TodoList;
