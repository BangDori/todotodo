import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useCreateTodoMutation } from "../api/useCreateTodoMutation";
import { TODO_MAX_LENGTH, TODO_MIN_LENGTH } from "../constants/todo";
import { isLessThanMinLength, isMoreThanMaxLength } from "../utils/validate";

export function TodoForm() {
  const [todo, setTodo] = useState("");
  const {
    mutate: createTodo,
    isPending: isPendingCreateTodo,
    error,
  } = useCreateTodoMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createTodo(todo.trim(), {
      onSuccess: () => setTodo(""),
    });
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
            isPendingCreateTodo ||
            isLessThanMinLength(todo) ||
            isMoreThanMaxLength(todo)
          }
          type="submit"
          role="button"
          aria-label="할 일 추가"
          className="cursor-pointer"
        >
          {isPendingCreateTodo ? "추가중..." : "추가하기"}
        </Button>
      </form>
      <div className="min-h-[24px]">
        {error && <ErrorMessage error={error} />}
        {isMoreThanMaxLength(todo) && <MaxLengthErrorMessage />}
      </div>
    </div>
  );
}

// 에러 메시지 렌더링 함수
const ErrorMessage = ({ error }: { error: Error }) => {
  return <p className="pl-2 text-sm text-red-300">{error.message}</p>;
};

// 경고 메시지 렌더링 함수
const MaxLengthErrorMessage = () => {
  return (
    <p
      data-testid="todo-max-length-message"
      className="pl-2 text-sm text-red-300"
    >
      최대 {TODO_MAX_LENGTH}자까지 입력 가능합니다.
    </p>
  );
};
