import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "light";
};

export default function Button({
  children,
  href = "#",
  className = "",
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`ob-ui-button ob-ui-button-${variant} ${className}`}
    >
      <span>{children}</span>
      <span className="ob-ui-button-arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}
