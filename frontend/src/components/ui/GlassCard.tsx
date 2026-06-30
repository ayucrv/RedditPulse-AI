import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass",
        "glass-hover",
        "rounded-3xl",
        "p-6",
        "shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}