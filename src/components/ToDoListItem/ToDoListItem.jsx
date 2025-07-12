/**@jsxImportSource @emotion/react */
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import * as s from "./styles";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useCallback, useEffect, useState } from "react";
import { useCheckStore } from "../store/useCheckStore";

function ToDoListItem({ todo, onToggle, handleOnRemove }) {
  const { id, text, checked } = todo;

  return (
    <>
      <div key={id} css={s.todoItem}>
        <div css={s.textContainer} onClick={() => onToggle(id)}>
          {checked ? (
            <ImCheckboxChecked css={s.checked} />
          ) : (
            <ImCheckboxUnchecked />
          )}
          <h1>{text}</h1>
        </div>
        <div css={s.deleteItem} onClick={() => handleOnRemove(id)}>
          <RiDeleteBin5Line />
        </div>
      </div>
    </>
  );
}

export default ToDoListItem;
