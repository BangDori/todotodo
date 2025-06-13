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
}

export function DeleteTodoModal({
  isOpen,
  onOpenChange,
}: DeleteTodoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        data-testId="delete-todo-modal"
        aria-description="delete-todo-modal"
      >
        <DialogHeader>
          <DialogTitle>할 일을 삭제하시겠습니까?</DialogTitle>
          <DialogDescription>이 작업은 되돌릴 수 없습니다.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">취소</Button>
          </DialogClose>
          <Button variant="destructive" onClick={() => {}}>
            삭제
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
