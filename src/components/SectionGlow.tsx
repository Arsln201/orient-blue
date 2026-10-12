"use client";

import { motion } from "motion/react";

export default function SectionGlow() {
  return (
    <motion.div
      aria-hidden="true"
      className="ob-section-glow"
      animate={{
        x: [0, 8, 0],
        y: [0, -6, 0],
        opacity: [0.5, 0.72, 0.5],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
