"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ImageReveal({
  children,
  className = "",
  delay = 0,
}: ImageRevealProps) {
  return (
    <motion.div
      className={`ob-image-reveal ${className}`}
      initial={{
        opacity: 0,
        clipPath: "inset(0 0 100% 0)",
        scale: 1.035,
      }}
      whileInView={{
        opacity: 1,
        clipPath: "inset(0 0 0% 0)",
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
