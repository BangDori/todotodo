import { RootLayout } from "./components/layout/RootLayout";
import { TodoHeader } from "./domains/todo/components/TodoHeader";

export function App() {
  return (
    <RootLayout>
      <TodoHeader />
    </RootLayout>
  );
}
