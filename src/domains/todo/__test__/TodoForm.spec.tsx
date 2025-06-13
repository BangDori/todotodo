import { fireEvent, render, screen } from "@testing-library/react";
import { TodoForm } from "../components/TodoForm";

describe("할 일 추가 폼 입력 테스트", () => {
  beforeEach(() => {
    // given: 할 일 추가 폼이 렌더링된 상태에서
    render(<TodoForm />);
  });

  it("입력값이 1글자 미만이면 추가하기 버튼이 비활성화된다", () => {
    // when: 입력값이 비어 있을 때
    const input = screen.getByTestId("todo-input");
    const button = screen.getByTestId("todo-add-button");

    // then: 추가하기 버튼이 비활성화된다
    expect(input).toHaveValue("");
    expect(button).toBeDisabled();
  });

  it("입력값이 1글자 이상이면 추가하기 버튼이 활성화된다", () => {
    // when: 입력값이 1글자 이상일 때
    const input = screen.getByTestId("todo-input");
    const button = screen.getByTestId("todo-add-button");

    fireEvent.change(input, { target: { value: "테스트" } });

    // then: 추가하기 버튼이 활성화된다
    expect(input).toHaveValue("테스트");
    expect(button).not.toBeDisabled();
  });

  it("입력값이 1글자 이상일 때 추가하기 버튼을 클릭하면 입력값이 초기화된다", () => {
    // given: 입력값이 1글자 이상일 때
    const input = screen.getByTestId("todo-input");
    const button = screen.getByTestId("todo-add-button");

    fireEvent.change(input, { target: { value: "테스트" } });

    // when: 추가하기 버튼을 클릭하면
    fireEvent.click(button);

    // then: 입력값이 초기화된다
    expect(input).toHaveValue("");
  });
});
