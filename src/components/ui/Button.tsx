import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "filled" | "outlined" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  filled:
    "bg-brand-blue text-white hover:bg-brand-blue-hover shadow-sm",
  outlined:
    "border border-white/80 text-white hover:bg-white/10 backdrop-blur-sm",
  ghost:
    "text-brand-orange hover:text-brand-orange/80 font-semibold p-0",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "filled",
  size = "md",
  href,
  className,
  type = "button",
  disabled = false,
  onClick,
  icon,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 cursor-pointer",
    variant !== "ghost" && sizeStyles[size],
    variantStyles[variant],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      {icon}
    </button>
  );
}
