import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

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
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <Label htmlFor="todo-input" className="sr-only">
        할 일 입력 (1글자 이상)
      </Label>
      <Input
        id="todo-input"
        data-testid="todo-input"
        placeholder="할 일을 입력해주세요. (1글자 이상)"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button
        data-testid="todo-add-button"
        disabled={todo.trim().length < 1}
        type="submit"
        role="button"
        aria-label="할 일 추가"
        className="cursor-pointer"
      >
        추가하기
      </Button>
    </form>
  );
}
