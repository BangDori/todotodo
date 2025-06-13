import { TODO_MAX_LENGTH, TODO_MIN_LENGTH } from "../constants/todo";

/**
 * 할 일 입력값이 최소 길이보다 짧은지 여부를 검증합니다.
 *
 * @param todo 할 일 입력값
 * @returns 할 일 입력값이 최소 길이보다 짧은지 여부
 */
export function isLessThanMinLength(todo: string) {
  return todo.trim().length < TODO_MIN_LENGTH;
}

/**
 * 할 일 입력값이 최대 길이보다 긴지 여부를 검증합니다.
 *
 * @param todo 할 일 입력값
 * @returns 할 일 입력값이 최대 길이보다 긴지 여부
 */
export function isMoreThanMaxLength(todo: string) {
  return todo.trim().length > TODO_MAX_LENGTH;
}
