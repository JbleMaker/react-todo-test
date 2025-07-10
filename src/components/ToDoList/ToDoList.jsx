/**@jsxImportSource @emotion/react */
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import * as s from "./styles";

function ToDoList({ todos, onRemove }) {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </ul>
  );
}

export default ToDoList;
