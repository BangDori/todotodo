import { toast, type ToastOptions } from "react-toastify";

/**
 * 토스트 알림 메시지 표시
 *
 * @example
 * notify("할 일 항목이 정상적으로 삭제되었습니다.", { type: "success" });
 * notify("할 일 삭제에 실패했습니다.", { type: "error" });
 *
 * @param message 표시할 메시지
 * @param options 토스트 옵션
 * @returns 토스트 알림 메시지
 */
export function notify(message: string, options?: ToastOptions) {
  return toast(message, options);
}
