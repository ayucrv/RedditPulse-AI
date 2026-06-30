import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Section({
  children,
  className,
}: Props) {
  return (
    <section
      className={cn(
        "py-28 md:py-36",
        className
      )}
    >
      {children}
    </section>
  );
}