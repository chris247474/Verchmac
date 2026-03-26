import { cn } from "@/lib/utils";

export default function Card({
  children,
  className,
  padding = true,
}: {
  children: React.ReactNode;
  className?: string;
  padding?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white overflow-hidden transition-all duration-200",
        padding && "p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
