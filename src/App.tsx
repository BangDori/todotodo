import { RootLayout } from "./components/layout/RootLayout";
import { TodoHeader, TodoList } from "./domains/todo";

export function App() {
  /**
   * @todo 임시 데이터
   */
  const todos = [
    { id: 1, text: "test", checked: false },
    { id: 2, text: "test2", checked: true },
  ];

  return (
    <RootLayout>
      <TodoHeader />
      <div className="mt-8">
        <TodoList todos={todos} />
      </div>
    </RootLayout>
  );
}
