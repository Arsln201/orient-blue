"use client";

import { ArrowUp } from "lucide-react";
import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (value) => {
      setVisible(value > 600);
    });
  }, [scrollY]);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <motion.button
      type="button"
      aria-label="Back to top"
      onClick={scrollTop}
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 14,
        scale: visible ? 1 : 0.94,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="ob-back-to-top"
    >
      <ArrowUp size={17} strokeWidth={1.6} />
    </motion.button>
  );
}
