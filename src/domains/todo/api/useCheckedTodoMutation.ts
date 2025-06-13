import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/queries/queryKeys";
import type { Todo } from "../types/todo";

async function checkTodo(id: string, checked: boolean) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/todos/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ checked }),
  });

  if (!response.ok) {
    throw new Error("할 일 항목을 체크하는데 실패했습니다.");
  }

  const data = await response.json();

  return data;
}

export function useCheckedTodoMutation(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (checked: boolean) => checkTodo(id, checked),
    onMutate: async (checked) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.todos });
      const previousTodos = queryClient.getQueryData<Todo[]>(queryKeys.todos);

      if (previousTodos) {
        queryClient.setQueryData<Todo[]>(queryKeys.todos, (prev) =>
          prev?.map((todo) => (todo.id === id ? { ...todo, checked } : todo))
        );
      }

      return { previousTodos };
    },
    onError: (_error, _checked, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(queryKeys.todos, context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.todos });
    },
  });
}
