import type { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
};

export default function Grid({
  children,
  columns = 3,
  className = "",
}: GridProps) {
  return (
    <div className={`ob-ui-grid ob-ui-grid-${columns} ${className}`}>
      {children}
    </div>
  );
}
