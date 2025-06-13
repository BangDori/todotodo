import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OverlayProvider } from "overlay-kit";
import { TodoItem } from "../components/TodoItem";
import type { Todo } from "../types/todo";
import { QueryProvider } from "@/queries/provider";

const user = userEvent.setup();
const Provider = ({ children }: { children: React.ReactNode }) => (
  <QueryProvider>
    <OverlayProvider>{children}</OverlayProvider>
  </QueryProvider>
);

describe("할 일 항목 삭제 모달창 테스트", () => {
  const todo: Todo = { id: "1", text: "테스트 할 일", checked: false };

  it("삭제 아이콘 클릭 시 삭제 모달창이 렌더링된다", async () => {
    // given: 할 일 항목이 렌더링된 상태에서
    render(<TodoItem {...todo} />, { wrapper: Provider });

    // when: 삭제 버튼을 클릭하면
    const deleteButton = screen.getByTestId("delete-todo-button");
    await user.click(deleteButton);

    // then: 삭제 모달창이 렌더링된다
    await waitFor(() => {
      expect(screen.getByTestId("delete-todo-modal")).toBeInTheDocument();
    });
  });
});
