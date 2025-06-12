import { Suspense } from "react";
import { RootLayout } from "./components/layout/RootLayout";
import {
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
      <div className="mt-8">
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
