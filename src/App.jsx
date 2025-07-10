/**@jsxImportSource @emotion/react */
import { useCallback, useRef, useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import ToDoInsert from "./components/ToDoInsert/ToDoInsert";

function App() {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(1);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(localStorage.setItem(nextId, todo.text));
      nextId.current++;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <>
      <ToDoList todos={todos} onRemove={onRemove} />
      <ToDoInsert onInsert={onInsert} />
    </>
  );
}

export default App;
