import { useTodoList } from "../context/TodoListFetcher";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const todos = useTodoList();

  return (
    <section className="space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </section>
  );
}
