import { TODO_MAX_LENGTH, TODO_MIN_LENGTH } from "../constants/todo";

/**
 * 할 일 입력값의 유효성을 검증합니다.
 * 1글자 이상 50자 이하인 경우 유효합니다.
 *
 * @param todo 할 일 입력값
 * @returns 할 일 입력값이 유효한지 여부
 */
export function isTodoValid(todo: string) {
  const len = todo.trim().length;

  return len >= TODO_MIN_LENGTH && len <= TODO_MAX_LENGTH;
}
