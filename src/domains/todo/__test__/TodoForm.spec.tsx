import { fireEvent, render, screen } from "@testing-library/react";
import { TodoForm } from "../components/TodoForm";

describe("할 일 추가 폼 입력 테스트", () => {
  it("입력값이 1글자 미만이면 추가하기 버튼이 비활성화된다", () => {
    // given: 할 일 추가 폼이 렌더링된 상태에서
    render(<TodoForm />);

    // when: 입력값이 비어 있을 때
    const input = screen.getByTestId("todo-input");
    const button = screen.getByTestId("todo-add-button");

    // then: 추가하기 버튼이 비활성화된다
    expect(input).toHaveValue("");
    expect(button).toBeDisabled();
  });

  it("입력값이 1글자 이상이면 추가하기 버튼이 활성화된다", () => {
    // given: 할 일 추가 폼이 렌더링된 상태에서
    render(<TodoForm />);

    // when: 입력값이 1글자 이상일 때
    const input = screen.getByTestId("todo-input");
    const button = screen.getByTestId("todo-add-button");

    fireEvent.change(input, { target: { value: "테스트" } });

    // then: 추가하기 버튼이 활성화된다
    expect(input).toHaveValue("테스트");
    expect(button).not.toBeDisabled();
  });
});
