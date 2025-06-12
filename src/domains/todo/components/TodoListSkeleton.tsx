import { Skeleton } from "@/components/ui/skeleton";

export function TodoListSkeleton() {
  return (
    <section className="space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <Skeleton key={i} className="h-[54px] w-full rounded-md" />
      ))}
    </section>
  );
}
