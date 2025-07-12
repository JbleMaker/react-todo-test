/**@jsxImportSource @emotion/react */
import * as s from "./styles";
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import { FaPlusSquare } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { useCheckStore } from "../store/useCheckStore";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleTodoOnSubmit = () => {
    addTodo(value);
    setValue("");
  };

  const addTodo = (text) => {
    const todo = {
      id: new Date(),
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
  };

  useEffect(() => {
    window.onkeydown = (e) => {
      if (e.keyCode === 13) {
        handleTodoOnSubmit();
      }
    };
  });

  const handleOnRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <div css={s.todoContainer}>
      <div css={s.contentContainer}>
        <h1>일정관리</h1>
        <div css={s.inputContainer}>
          <input
            type="text"
            value={value}
            onChange={handleOnChange}
            placeholder="할 일을 입력하세요."
          />
          <div onClick={handleTodoOnSubmit}>
            <FaPlusSquare />
          </div>
        </div>
        <div css={s.todoList}>
          {todos.map((todo) => (
            <ToDoListItem
              key={todo.id}
              todo={todo}
              setTodos={setTodos}
              handleOnRemove={handleOnRemove}
              onToggle={onToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
