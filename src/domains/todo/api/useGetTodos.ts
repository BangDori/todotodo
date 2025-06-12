import { useSuspenseQuery } from "@tanstack/react-query";
import { queryKeys } from "@/queries/queryKeys";

import type { Todo } from "../types/todo";

async function getTodos(): Promise<Todo[]> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/todos`);
  const data = await response.json();

  return data;
}

export function useGetTodos() {
  return useSuspenseQuery({
    queryKey: queryKeys.todos,
    queryFn: getTodos,
    staleTime: 1000 * 60 * 5,
  });
}
