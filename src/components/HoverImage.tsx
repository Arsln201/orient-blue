"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface HoverImageProps {
  children: ReactNode;
  className?: string;
}

export default function HoverImage({
  children,
  className = "",
}: HoverImageProps) {
  return (
    <motion.div
      className={`ob-hover-image ${className}`}
      whileHover={{ scale: 1.018 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        overflow: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
}
