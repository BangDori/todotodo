import type { Todo } from "../types/todo";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
  return (
    <section className="space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </section>
  );
}
