import { cn } from "@/lib/utils";

export default function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  className,
}: {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-12",
        alignment === "center" && "text-center",
        className
      )}
    >
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal text-brand-gray-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-brand-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
