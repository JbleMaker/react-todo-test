import { css } from "@emotion/react";

export const todoContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const contentContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
  width: 40rem;
  height: 80%;

  & > h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

export const inputContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;

  & > input {
    box-sizing: border-box;
    border-radius: 0.5rem;
    width: 90%;
    height: 4rem;
  }

  & > input::placeholder {
    font-size: 2rem;
  }

  & > div > svg {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    color: #06cc80;
  }
`;

export const todoList = css`
  box-sizing: border-box;
  border: 0.1rem solid #000000;
  border-radius: 0.5rem;
  margin: 4rem 2rem;
  width: 90%;
  flex-grow: 1;
  overflow: hidden;
  overflow-y: visible;
  ::-webkit-scrollbar {
    display: none;
  }
`;
