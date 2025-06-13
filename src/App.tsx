import { Suspense } from "react";
import { RootLayout } from "./components/layout/RootLayout";
import {
  TodoForm,
  TodoHeader,
  TodoList,
  TodoListFetcher,
  TodoListSkeleton,
} from "./domains/todo";
import { ApiErrorBoundary } from "./components/error-boundary/ApiErrorBoundary";

export function App() {
  return (
    <RootLayout>
      <TodoHeader />
      <div className="space-y-8 mt-8">
        <TodoForm />

        <ApiErrorBoundary>
          <Suspense fallback={<TodoListSkeleton />}>
            <TodoListFetcher>
              <TodoList />
            </TodoListFetcher>
          </Suspense>
        </ApiErrorBoundary>
      </div>
    </RootLayout>
  );
}
