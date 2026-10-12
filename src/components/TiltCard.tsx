"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import type { MouseEvent, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({
  children,
  className = "",
}: TiltCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 240,
    damping: 28,
    mass: 0.4,
  });

  const springY = useSpring(rotateY, {
    stiffness: 240,
    damping: 28,
    mass: 0.4,
  });

  const rotateXValue = useTransform(
    springX,
    [-0.5, 0.5],
    [2.5, -2.5],
  );

  const rotateYValue = useTransform(
    springY,
    [-0.5, 0.5],
    [-2.5, 2.5],
  );

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    rotateX.set(y);
    rotateY.set(x);
  }

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX: rotateXValue,
        rotateY: rotateYValue,
        transformPerspective: 1200,
      }}
    >
      {children}
    </motion.div>
  );
}
