import { ReactNode } from "react";
import { cn } from "../../lib/utils";

type Props = {
  title: string;
  subtitle?: string;
  className?: string;
  children?: ReactNode;
};

export default function SectionTitle({
  title,
  subtitle,
  className,
  children,
}: Props) {
  return (
    <div className={cn("mb-10", className)}>
      <h2 className="gradient-text text-4xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 max-w-2xl text-gray-400">
          {subtitle}
        </p>
      )}

      {children}
    </div>
  );
}