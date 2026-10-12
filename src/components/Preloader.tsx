"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 0.55,
        duration: 0.45,
        ease: "easeInOut",
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "grid",
        placeItems: "center",
        background: "#061D35",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 22,
        }}
      >
        <Image
  src="/orient-blue-logo.png"
  alt="Orient Blue"
  width={260}
  height={80}
  priority
  style={{
    width: "min(260px, 65vw)",
    height: "auto",
    filter: "brightness(0) invert(1)",
  }}
/>

        <div
          style={{
            width: 80,
            height: 1,
            overflow: "hidden",
            background: "rgba(255,255,255,0.15)",
          }}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              width: "100%",
              height: "100%",
              background: "#149BFF",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}