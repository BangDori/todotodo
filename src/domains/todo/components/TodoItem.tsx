import { XIcon } from "lucide-react";
import { overlay } from "overlay-kit";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/utils/style";
import { notify } from "@/utils/toastify";
import { useCheckedTodoMutation } from "../api/useCheckedTodoMutation";
import { useDeleteTodoMutation } from "../api/useDeleteTodoMutation";
import type { Todo } from "../types/todo";
import { DeleteTodoModal } from "./DeleteTodoModal";

export function TodoItem({ id, text, checked }: Todo) {
  const { mutate: checkTodo } = useCheckedTodoMutation(id);
  const { mutate: deleteTodo } = useDeleteTodoMutation();

  return (
    <div className="flex items-center justify-between rounded-md border px-4 py-2 shadow-xs">
      <div className="flex items-center gap-3">
        <Checkbox
          checked={checked}
          onCheckedChange={(checked) => {
            if (typeof checked === "boolean") {
              checkTodo(checked, {
                onError: (error) => notify(error.message, { type: "error" }),
              });
            }
          }}
          className="cursor-pointer"
        />
        <Label
          className={cn(
            "flex-1 cursor-pointer select-none text-base transition-colors",
            checked && "line-through text-muted-foreground"
          )}
        >
          {text}
        </Label>
      </div>
      <Button
        data-testid="delete-todo-button"
        variant="ghost"
        size="icon"
        aria-label="삭제"
        className="cursor-pointer hover:bg-gray-200"
        onClick={() =>
          overlay.open(({ isOpen, close }) => (
            <DeleteTodoModal
              isOpen={isOpen}
              onOpenChange={close}
              onDelete={() => {
                deleteTodo(id, {
                  onSuccess: () =>
                    notify("할 일 항목이 정상적으로 삭제되었습니다.", {
                      type: "success",
                    }),
                  onError: (error) => notify(error.message, { type: "error" }),
                  onSettled: close,
                });
              }}
            />
          ))
        }
      >
        <XIcon className="size-4" />
      </Button>
    </div>
  );
}
