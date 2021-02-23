function Title() {
  return (
    <>
      <h1>Todo list</h1>
    </>
  );
}

function TodoListRenedering(props) {
  return (
    <>
      <ul>
        <li>
          {props.activity},{props.deadline}
        </li>
      </ul>
    </>
  );
}

function TodoList(props) {
  return (
    <>
      <Title />
      {props.todos.map((todo) => {
        return (
          <TodoListRenedering
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
