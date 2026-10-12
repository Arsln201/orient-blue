"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import type { MouseEvent, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function MagneticButton({
  children,
  href = "#",
  className = "",
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 420,
    damping: 32,
    mass: 0.35,
  });

  const springY = useSpring(y, {
    stiffness: 420,
    damping: 32,
    mass: 0.35,
  });

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const offsetX =
      event.clientX - (rect.left + rect.width / 2);
    const offsetY =
      event.clientY - (rect.top + rect.height / 2);

    x.set(Math.max(-7, Math.min(7, offsetX * 0.08)));
    y.set(Math.max(-7, Math.min(7, offsetY * 0.08)));
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      className={className}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.985 }}
    >
      {children}
    </motion.a>
  );
}
