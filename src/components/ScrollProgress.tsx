"use client";

import { motion, useScroll } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="ob-scroll-progress"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}
