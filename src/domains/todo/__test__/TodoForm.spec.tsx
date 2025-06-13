import { vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { TodoForm } from "../components/TodoForm";
import { TODO_MAX_LENGTH, TODO_MIN_LENGTH } from "../constants/todo";
import { QueryProvider } from "@/queries/provider";

vi.mock("../api/useCreateTodoMutation", () => ({
  useCreateTodoMutation: vi.fn().mockReturnValue({
    mutate: (_todo: string, { onSuccess }: { onSuccess: () => void }) => {
      onSuccess();
    },
    isPending: false,
    error: null,
  }),
}));

describe("할 일 추가 폼 입력 테스트", () => {
  beforeEach(() => {
    // given: 할 일 추가 폼이 렌더링된 상태에서
    render(<TodoForm />, { wrapper: QueryProvider });
  });

  it(`입력값이 ${TODO_MIN_LENGTH}글자 미만이면 추가하기 버튼이 비활성화된다`, () => {
    // when: 입력값이 비어 있을 때
    const input = screen.getByTestId("todo-input");
    const button = screen.getByTestId("todo-add-button");

    // then: 추가하기 버튼이 비활성화된다
    expect(input).toHaveValue("");
    expect(button).toBeDisabled();
  });

  it(`입력값이 ${TODO_MIN_LENGTH}글자 이상이면 추가하기 버튼이 활성화된다`, () => {
    // when: 입력값이 1글자 이상일 때
    const input = screen.getByTestId("todo-input");
    const button = screen.getByTestId("todo-add-button");

    fireEvent.change(input, { target: { value: "테스트" } });

    // then: 추가하기 버튼이 활성화된다
    expect(input).toHaveValue("테스트");
    expect(button).not.toBeDisabled();
  });

  it(`입력값이 ${TODO_MIN_LENGTH}글자 이상일 때 추가하기 버튼을 클릭하면 입력값이 초기화된다`, () => {
    // when: 입력값의 길이가 TODO_MIN_LENGTH 이상일 때 추가하기 버튼을 클릭하면
    const input = screen.getByTestId("todo-input");
    const button = screen.getByTestId("todo-add-button");

    fireEvent.change(input, { target: { value: "테스트" } });
    fireEvent.click(button);

    // then: 입력값이 초기화된다
    expect(input).toHaveValue("");
  });

  it("공백이 입력되면 추가하기 버튼이 비활성화된다", () => {
    // when: 입력값이 공백일 때
    const input = screen.getByTestId("todo-input");
    const button = screen.getByTestId("todo-add-button");

    fireEvent.change(input, { target: { value: " " } });

    // then: 추가하기 버튼이 비활성화된다
    expect(input).toHaveValue(" ");
    expect(button).toBeDisabled();
  });

  it(`${TODO_MAX_LENGTH + 1}자 이상 입력되면 추가 버튼이 비활성화된다`, () => {
    // when: 입력값이 길이가 TODO_MAX_LENGTH + 1 이상일 때
    const input = screen.getByTestId("todo-input");
    const button = screen.getByTestId("todo-add-button");

    fireEvent.change(input, {
      target: { value: "a".repeat(TODO_MAX_LENGTH + 1) },
    });

    // then: 추가하기 버튼이 비활성화된다
    expect(input).toHaveValue("a".repeat(TODO_MAX_LENGTH + 1));
    expect(button).toBeDisabled();
  });

  it(`${TODO_MAX_LENGTH + 1}자 이상 입력되면 경고 메시지가 표시된다`, () => {
    // when: 입력값이 길이가 TODO_MAX_LENGTH + 1 이상일 때
    const input = screen.getByTestId("todo-input");

    fireEvent.change(input, {
      target: { value: "a".repeat(TODO_MAX_LENGTH + 1) },
    });

    // then: 경고 메시지가 표시된다
    const maxLengthMessage = screen.getByTestId("todo-max-length-message");
    expect(input).toHaveValue("a".repeat(TODO_MAX_LENGTH + 1));
    expect(maxLengthMessage).toBeInTheDocument();
  });
});
