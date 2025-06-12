import { RootLayout } from "./components/layout/RootLayout";
import { TodoHeader, TodoList, TodoListFetcher } from "./domains/todo";

export function App() {
  return (
    <RootLayout>
      <TodoHeader />
      <div className="mt-8">
        <TodoListFetcher>
          <TodoList />
        </TodoListFetcher>
      </div>
    </RootLayout>
  );
}
