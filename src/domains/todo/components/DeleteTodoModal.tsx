import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteTodoModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onDelete: () => void;
}

export function DeleteTodoModal({
  isOpen,
  onOpenChange,
  onDelete,
}: DeleteTodoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid="delete-todo-modal"
        aria-description="delete-todo-modal"
      >
        <DialogHeader>
          <DialogTitle>할 일을 삭제하시겠습니까?</DialogTitle>
          <DialogDescription>이 작업은 되돌릴 수 없습니다.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="button"
              role="button"
              aria-label="할 일 삭제 취소 버튼"
              variant="outline"
              className="cursor-pointer"
            >
              취소
            </Button>
          </DialogClose>
          <Button
            type="button"
            role="button"
            aria-label="할 일 삭제 버튼"
            variant="destructive"
            onClick={onDelete}
            className="cursor-pointer"
          >
            삭제
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
