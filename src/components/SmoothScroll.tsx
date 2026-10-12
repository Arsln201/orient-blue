"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const link = target.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );

      if (!link) return;

      const href = link.getAttribute("href");

      if (!href || href === "#") return;

      const element = document.querySelector(href);

      if (!element) return;

      event.preventDefault();

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}