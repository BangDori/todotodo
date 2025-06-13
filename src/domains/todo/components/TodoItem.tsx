import { XIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/utils/style";

import type { Todo } from "../types/todo";

export function TodoItem({ text, checked }: Todo) {
  return (
    <div className="flex items-center justify-between rounded-md border px-4 py-2 shadow-xs">
      <div className="flex items-center gap-3">
        <Checkbox checked={checked} />
        <Label
          className={cn(
            "flex-1 cursor-pointer select-none text-base transition-colors",
            checked && "line-through text-muted-foreground"
          )}
        >
          {text}
        </Label>
      </div>
      <Button
        variant="ghost"
        size="icon"
        aria-label="삭제"
        className="hover:bg-gray-200"
      >
        <XIcon className="size-4" />
      </Button>
    </div>
  );
}
