import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Todo } from "../types/todo";
import { queryKeys } from "@/queries";

async function createTodo(todo: string): Promise<Todo> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: todo, checked: false }),
  });

  if (!response.ok) {
    throw new Error("할 일 항목을 만드는데 실패했습니다.");
  }

  const data = await response.json();

  return data;
}

export function useCreateTodoMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.todos });
    },
  });
}
