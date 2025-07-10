/**@jsxImportSource @emotion/react */
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import * as s from "./styles";
import { useEffect, useState } from "react";
import { CiSquareRemove } from "react-icons/ci";

function ToDoListItem({ todo, onRemove }) {
  const { id, text, checked } = todo;
  const [check, setCheck] = useState(checked);

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  const handleCheckedOnClick = () => {
    setCheck((prev) => !prev);
  };

  return (
    <li key={id}>
      <div>
        {check ? (
          <ImCheckboxChecked onClick={handleCheckedOnClick} />
        ) : (
          <ImCheckboxUnchecked onClick={handleCheckedOnClick} />
        )}
        <div>{text}</div>
        <div onClick={() => onRemove(id)}>
          <CiSquareRemove />
        </div>
      </div>
    </li>
  );
}

export default ToDoListItem;
