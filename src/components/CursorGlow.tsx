"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-120);
  const y = useMotionValue(-120);

  const springX = useSpring(x, {
    stiffness: 90,
    damping: 28,
    mass: 0.5,
  });

  const springY = useSpring(y, {
    stiffness: 90,
    damping: 28,
    mass: 0.5,
  });

  useEffect(() => {
    const media = window.matchMedia(
      "(pointer: fine) and (min-width: 900px)",
    );

    const update = () => setEnabled(media.matches);

    update();
    media.addEventListener("change", update);

    function move(event: MouseEvent) {
      x.set(event.clientX);
      y.set(event.clientY);
    }

    window.addEventListener("mousemove", move);

    return () => {
      media.removeEventListener("change", update);
      window.removeEventListener("mousemove", move);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="ob-cursor-glow"
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
}
