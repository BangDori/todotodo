import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/queries/queryKeys";

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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.todos });
    },
  });
}
