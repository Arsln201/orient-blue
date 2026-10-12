import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export default function Eyebrow({
  children,
  className = "",
}: EyebrowProps) {
  return (
    <div className={`ob-type-eyebrow ${className}`}>
      <span className="ob-type-eyebrow-line" />
      <span>{children}</span>
    </div>
  );
}
