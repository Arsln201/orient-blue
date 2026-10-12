import type { ReactNode } from "react";

type TextBlockProps = {
  children: ReactNode;
  className?: string;
  size?: "small" | "default" | "large";
};

export default function TextBlock({
  children,
  className = "",
  size = "default",
}: TextBlockProps) {
  return (
    <div className={`ob-type-text ob-type-text-${size} ${className}`}>
      {children}
    </div>
  );
}
