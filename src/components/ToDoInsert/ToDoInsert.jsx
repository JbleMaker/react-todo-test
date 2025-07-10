/**@jsxImportSource @emotion/react */
import { useCallback, useState } from "react";
import * as s from "./styles";
import { MdAddBox } from "react-icons/md";

function ToDoInsert({ onInsert }) {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [value]
  );

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder="오늘 할 일"
      />
      <button>
        <MdAddBox />
      </button>
    </form>
  );
}

export default ToDoInsert;
