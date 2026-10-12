import type { ElementType, ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
};

export default function Heading({
  children,
  level = 2,
  className = "",
}: HeadingProps) {
  const Tag: ElementType = `h${level}`;

  return (
    <Tag className={`ob-type-heading ob-type-heading-${level} ${className}`}>
      {children}
    </Tag>
  );
}