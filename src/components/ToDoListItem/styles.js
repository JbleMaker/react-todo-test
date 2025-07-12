import { css } from "@emotion/react";

export const todoItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 4rem;
  margin: 0 2rem;
  font-size: 2rem;
  cursor: pointer;
`;

export const textContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;

  & > h1 {
    margin-left: 1rem;
  }
`;

export const checked = css`
  color: #22b25d;
`;

export const deleteItem = css`
  color: #ff5c77;
`;
