import { createContext, useContext, type PropsWithChildren } from "react";
import { useGetTodos } from "../api/useGetTodos";
import type { Todo } from "../types/todo";

const TodoListContext = createContext<Todo[]>([]);

export function TodoListFetcher({ children }: PropsWithChildren) {
  const { data: todos = [] } = useGetTodos();

  return (
    <TodoListContext.Provider value={todos}>
      {children}
    </TodoListContext.Provider>
  );
}

// ⚠️ useTodoList 훅은 TodoListFetcher 컴포넌트 내부에서만 사용하여야 합니다!
export function useTodoList() {
  const todos = useContext(TodoListContext);

  if (!todos) {
    throw new Error("useTodoList must be used within a TodoListFetcher");
  }

  return todos;
}
