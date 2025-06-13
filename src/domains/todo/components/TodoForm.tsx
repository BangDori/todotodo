import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const TODO_MIN_LENGTH = 1;
export const TODO_MAX_LENGTH = 50;

export function TodoForm() {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /**
     * @todo 할 일 항목 제출 시 trim 처리 필요
     */

    setTodo("");
  };

  return (
    <div className="flex flex-col gap-2">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <Label htmlFor="todo-input" className="sr-only">
          할 일 입력 ({TODO_MIN_LENGTH}글자 이상)
        </Label>
        <Input
          id="todo-input"
          data-testid="todo-input"
          placeholder={`할 일을 입력해주세요. (${TODO_MIN_LENGTH}글자 이상)`}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button
          data-testid="todo-add-button"
          disabled={
            todo.trim().length > TODO_MAX_LENGTH ||
            todo.trim().length < TODO_MIN_LENGTH
          }
          type="submit"
          role="button"
          aria-label="할 일 추가"
          className="cursor-pointer"
        >
          추가하기
        </Button>
      </form>
      {todo.trim().length > TODO_MAX_LENGTH && (
        <p
          data-testid="todo-max-length-message"
          className="pl-2 text-sm text-red-300"
        >
          최대 {TODO_MAX_LENGTH}자까지 입력 가능합니다.
        </p>
      )}
    </div>
  );
}
