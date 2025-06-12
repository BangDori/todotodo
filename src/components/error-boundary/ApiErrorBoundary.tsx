import type { PropsWithChildren } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import { Button } from "../ui/button";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

export function ApiErrorBoundary({ children }: PropsWithChildren) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary fallbackRender={Fallback} onReset={reset}>
      {children}
    </ErrorBoundary>
  );
}

function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  const message = error.message || "알 수 없는 에러가 발생했어요";

  return (
    <section className="mx-auto">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-md font-medium">
          데이터를 요청하는 중 오류가 발생했어요
        </h1>
        <p className="text-sm text-muted-foreground">{message}</p>
        <Button
          className="mt-4 cursor-pointer hover:bg-gray-600"
          onClick={resetErrorBoundary}
          aria-label="다시 시도하기"
        >
          다시 시도하기
        </Button>
      </div>
    </section>
  );
}
