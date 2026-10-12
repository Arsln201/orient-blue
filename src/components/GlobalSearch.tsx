"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Command,
  Search,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  searchData,
  type SearchCategory,
  type SearchItem,
} from "@/data/searchData";

type GlobalSearchProps = {
  open: boolean;
  onClose: () => void;
};

const categories: Array<"All" | SearchCategory> = [
  "All",
  "Products",
  "Solutions",
  "Services",
  "Industries",
  "Projects",
  "Insights",
];

function scoreResult(item: SearchItem, query: string) {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) {
    return item.featured ? 100 : 0;
  }

  const title = item.title.toLowerCase();
  const description = item.description.toLowerCase();
  const keywords = item.keywords.join(" ").toLowerCase();
  const category = item.category.toLowerCase();

  let score = 0;

  if (title === normalizedQuery) score += 100;
  if (title.startsWith(normalizedQuery)) score += 70;
  if (title.includes(normalizedQuery)) score += 45;
  if (keywords.includes(normalizedQuery)) score += 35;
  if (category.includes(normalizedQuery)) score += 25;
  if (description.includes(normalizedQuery)) score += 15;

  for (const word of normalizedQuery.split(/\s+/)) {
    if (word.length < 2) continue;

    if (title.includes(word)) score += 15;
    if (keywords.includes(word)) score += 10;
    if (description.includes(word)) score += 5;
  }

  return score;
}

export default function GlobalSearch({
  open,
  onClose,
}: GlobalSearchProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] =
    useState<(typeof categories)[number]>("All");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const results = useMemo(() => {
    const filtered = searchData
      .filter(
        (item) =>
          category === "All" || item.category === category
      )
      .map((item) => ({
        item,
        score: scoreResult(item, query),
      }))
      .filter(({ score }) => !query.trim() || score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ item }) => item);

    return filtered.slice(0, 12);
  }, [category, query]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();

        setSelectedIndex((current) =>
          results.length
            ? (current + 1) % results.length
            : 0
        );
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();

        setSelectedIndex((current) =>
          results.length
            ? (current - 1 + results.length) % results.length
            : 0
        );
      }

      if (event.key === "Enter" && results[selectedIndex]) {
        event.preventDefault();

        window.location.href = results[selectedIndex].href;
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose, results, selectedIndex]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="ob-global-search"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="ob-global-search-panel"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="ob-global-search-top">
              <span className="ob-global-search-brand">
                ORIENT BLUE
              </span>

              <button
                type="button"
                className="ob-global-search-close"
                onClick={onClose}
                aria-label="Close search"
              >
                <span>Close</span>
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="ob-global-search-field">
              <Search
                size={28}
                strokeWidth={1.4}
                aria-hidden="true"
              />

              <input
                autoFocus
                type="search"
                value={query}
                onChange={(event) =>
                  setQuery(event.target.value)
                }
                placeholder="Search products, solutions, services..."
                aria-label="Search Orient Blue"
              />

              <div className="ob-search-key">
                <Command size={13} />
                <span>K</span>
              </div>
            </div>

            <div className="ob-search-categories">
              {categories.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={
                    category === item
                      ? "ob-search-category-active"
                      : ""
                  }
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="ob-global-search-results">
              <div className="ob-search-results-header">
                <span>
                  {query
                    ? `${results.length} results`
                    : "Explore Orient Blue"}
                </span>

                <span className="ob-search-hint">
                  ↑ ↓ Navigate · Enter Open · Esc Close
                </span>
              </div>

              {results.length > 0 ? (
                <div className="ob-search-result-list">
                  {results.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      className={`ob-search-result ${
                        selectedIndex === index
                          ? "ob-search-result-selected"
                          : ""
                      }`}
                      onMouseEnter={() =>
                        setSelectedIndex(index)
                      }
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="ob-search-result-link"
                      >
                        <div className="ob-search-result-number">
                          {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="ob-search-result-main">
                          <span className="ob-search-result-category">
                            {item.category}
                          </span>

                          <strong>{item.title}</strong>

                          <p>{item.description}</p>
                        </div>

                        <ArrowUpRight
                          className="ob-search-result-arrow"
                          size={21}
                          strokeWidth={1.4}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  className="ob-search-empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <span className="ob-search-empty-mark">
                    0
                  </span>

                  <strong>No results found</strong>

                  <p>
                    Try a product name, technology, industry or
                    service.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setCategory("All");
                    }}
                  >
                    Clear search
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
