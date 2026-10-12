"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
}

export default function TextReveal({
  children,
  className = "",
}: TextRevealProps) {
  return (
    <div className={`ob-text-reveal ${className}`}>
      <motion.div
        initial={{
          opacity: 0,
          y: "105%",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
