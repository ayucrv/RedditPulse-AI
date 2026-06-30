import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "group relative overflow-hidden rounded-full",
        "px-7 py-3",
        "font-semibold",
        "transition-all duration-300",
        "bg-linear-to-r from-orange-600 to-red-700",
        "hover:scale-[1.03]",
        "hover:shadow-[0_0_35px_rgba(255,69,0,.35)]",
        "active:scale-95",
        className
      )}
    >
      <span className="relative z-10">{children}</span>

      <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </button>
  );
}