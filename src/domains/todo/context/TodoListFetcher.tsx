import { createContext, useContext, type PropsWithChildren } from "react";
import { useGetTodos } from "../api/useGetTodos";
import type { Todo } from "../types/todo";

const TodoListContext = createContext<Todo[] | undefined>(undefined);

export function TodoListFetcher({ children }: PropsWithChildren) {
  const { data: todos = [] } = useGetTodos();

  return (
    <TodoListContext.Provider value={todos}>
      {children}
    </TodoListContext.Provider>
  );
}

/**
 * ⚠️ useTodoList 훅은 TodoListFetcher 컴포넌트 내부에서만 사용하여야 합니다!
 * 외부에서 사용할 경우, todos가 undefined 값을 가지게 되고 에러가 발생시킵니다.
 */
export function useTodoList() {
  const todos = useContext(TodoListContext);

  if (todos === undefined) {
    throw new Error(
      "useTodoList는 TodoListFetcher 내부에서만 사용할 수 있어요."
    );
  }

  return todos;
}
