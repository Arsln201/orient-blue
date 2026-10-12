"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  X,
} from "lucide-react";
import { useState } from "react";
import { getNavigationHref } from "@/lib/navigation-routes";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const sections = [
  {
    label: "Products",
    links: [
      "All Products",
      "Product Categories",
      "Featured Products",
      "Applications",
    ],
  },
  {
    label: "Solutions",
    links: [
      "Solutions",
      "Capabilities",
      "Applications",
      "Industries",
    ],
  },
  {
    label: "Services",
    links: ["Services", "Technical Services", "Support"],
  },
  {
    label: "Industries",
    links: ["Industrial", "Energy", "Infrastructure", "Technology"],
  },
  {
    label: "Projects",
    links: ["Featured Projects", "Case Studies"],
  },
  {
    label: "Company",
    links: ["About", "Our Story", "Capabilities", "Quality"],
  },
  {
    label: "Insights",
    links: ["Insights", "News", "Technical Resources"],
  },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="ob-mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="ob-mobile-menu-top">
            <Link href="/" onClick={onClose}>
              <span className="ob-mobile-brand">ORIENT BLUE</span>
            </Link>

            <button
              type="button"
              className="ob-mobile-close"
              onClick={onClose}
              aria-label="Close navigation"
            >
              <X size={25} strokeWidth={1.5} />
            </button>
          </div>

          <div className="ob-mobile-scroll">
            <nav className="ob-mobile-links">
              {sections.map((section, index) => {
                const isActive = active === section.label;

                return (
                  <motion.div
                    key={section.label}
                    className="ob-mobile-section"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.05 + index * 0.035,
                      duration: 0.4,
                    }}
                  >
                    <button
                      type="button"
                      className={`ob-mobile-main-link ${
                        isActive
                          ? "ob-mobile-main-link-active"
                          : ""
                      }`}
                      onClick={() =>
                        setActive(
                          isActive ? null : section.label
                        )
                      }
                    >
                      <span>
                        <small>
                          {String(index + 1).padStart(2, "0")}
                        </small>
                        {section.label}
                      </span>

                      <ChevronDown
                        size={22}
                        strokeWidth={1.4}
                        className={`ob-mobile-chevron ${
                          isActive
                            ? "ob-mobile-chevron-active"
                            : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          className="ob-mobile-submenu"
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                        >
                          {section.links.map((link) => (
                            <Link
                              href={getNavigationHref(link)}
                              key={link}
                              onClick={onClose}
                            >
                              {link}
                              <ArrowUpRight
                                size={16}
                                strokeWidth={1.5}
                              />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </nav>

            <div className="ob-mobile-bottom">
              <Link href="/contact" onClick={onClose}>
                Make an enquiry
                <ArrowUpRight size={19} />
              </Link>

              <span>
                Engineering · Technology · Precision
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
