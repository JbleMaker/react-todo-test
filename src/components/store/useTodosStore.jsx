import { create } from "zustand";

export const useTodosStore = create((set) => ({
  todos: [],
  setTodos: (todo) =>
    set((prev) => ({
      todos: [...prev.todos, ...todo],
    })),
}));
