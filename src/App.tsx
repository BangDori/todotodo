import { Suspense } from "react";
import { RootLayout } from "./components/layout/RootLayout";
import {
  TodoHeader,
  TodoList,
  TodoListFetcher,
  TodoListSkeleton,
} from "./domains/todo";

export function App() {
  return (
    <RootLayout>
      <TodoHeader />
      <div className="mt-8">
        <Suspense fallback={<TodoListSkeleton />}>
          <TodoListFetcher>
            <TodoList />
          </TodoListFetcher>
        </Suspense>
      </div>
    </RootLayout>
  );
}
