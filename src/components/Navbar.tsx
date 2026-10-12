"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Search, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import GlobalSearch from "./GlobalSearch";
import { getNavigationHref } from "@/lib/navigation-routes";

const navigation = [
  {
    label: "Products",
    columns: [
      {
        title: "Explore",
        links: ["All Products", "Product Categories", "Featured Products"],
      },
      {
        title: "Technical",
        links: ["Applications"],
      },
    ],
  },
  {
    label: "Solutions",
    columns: [
      {
        title: "Solutions",
        links: ["Solutions", "Capabilities"],
      },
      {
        title: "Markets",
        links: ["Applications", "Industries"],
      },
    ],
  },
  {
    label: "Services",
    columns: [
      {
        title: "Services",
        links: ["Services", "Technical Services"],
      },
      {
        title: "Support",
        links: ["Support"],
      },
    ],
  },
  {
    label: "Industries",
    columns: [
      {
        title: "Industries",
        links: ["Industrial", "Energy", "Infrastructure", "Technology"],
      },
    ],
  },
  {
    label: "Projects",
    columns: [
      {
        title: "Projects",
        links: ["Featured Projects", "Case Studies"],
      },
    ],
  },
  {
    label: "Company",
    columns: [
      {
        title: "About",
        links: ["About", "Our Story"],
      },
      {
        title: "Capabilities",
        links: ["Capabilities", "Quality"],
      },
    ],
  },
  {
    label: "Insights",
    columns: [
      {
        title: "Explore",
        links: ["Insights", "News", "Technical Resources"],
      },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

useEffect(() => {
  const handleSearchShortcut = (event: KeyboardEvent) => {
    if (
      (event.metaKey || event.ctrlKey) &&
      event.key.toLowerCase() === "k"
    ) {
      event.preventDefault();
      setSearchOpen(true);
      setActiveMenu(null);
    }
  };

  window.addEventListener("keydown", handleSearchShortcut);

  return () =>
    window.removeEventListener(
      "keydown",
      handleSearchShortcut
    );
}, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen || searchOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  return (
    <>
      <header
        className={`ob-main-nav ${
          scrolled ? "ob-main-nav-scrolled" : ""
        } ${activeMenu ? "ob-main-nav-menu-open" : ""}`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="ob-main-nav-inner">
          <Link
            href="/"
            className="ob-main-nav-logo"
            aria-label="Orient Blue home"
          >
            <Image
              src="/orient-blue-logo.png"
              alt="Orient Blue"
              width={170}
              height={52}
              priority
            />
          </Link>

          <nav className="ob-desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="ob-nav-item"
                onMouseEnter={() => setActiveMenu(item.label)}
              >
                <Link
  href={getNavigationHref(item.label)}
  className={`ob-nav-link ${
    activeMenu === item.label
      ? "ob-nav-link-active"
      : ""
  }`}
  aria-expanded={activeMenu === item.label}
  onClick={() => setActiveMenu(null)}
>
                  {item.label}
                  <ChevronDown
                    size={13}
                    strokeWidth={1.8}
                    className="ob-nav-chevron"
                  />
                </Link>
              </div>
            ))}
          </nav>

          <div className="ob-nav-actions">
            <button
              type="button"
              className="ob-nav-search"
              onClick={() => {
                setSearchOpen(true);
                setActiveMenu(null);
              }}
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.7} />
              <span>Search</span>
            </button>

            <Link href="/contact" className="ob-nav-enquiry">
              Enquiry
              <ArrowUpRight size={15} strokeWidth={1.8} />
            </Link>

            <button
              type="button"
              className="ob-mobile-toggle"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {activeMenu && (
            <motion.div
              className="ob-mega-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="ob-mega-inner">
                {navigation
                  .find((item) => item.label === activeMenu)
                  ?.columns.map((column, index) => (
                    <div className="ob-mega-column" key={column.title}>
                      <span className="ob-mega-label">
                        0{index + 1} / {column.title}
                      </span>

                      <div className="ob-mega-links">
                        {column.links.map((link) => (
                          <Link
                            href={getNavigationHref(link)}
                            key={link}
                            className="ob-mega-link"
                            onClick={() => setActiveMenu(null)}
                          >
                            <span>{link}</span>
                            <ArrowUpRight size={17} strokeWidth={1.5} />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                <div className="ob-mega-feature">
                  <span>ORIENT BLUE</span>
                  <strong>
                    Engineering with
                    <br />
                    precision.
                  </strong>
                  <Link href="/products">
                    Explore
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <GlobalSearch
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}
