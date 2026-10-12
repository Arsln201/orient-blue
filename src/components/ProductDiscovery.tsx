"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Check,
  ChevronDown,
  Filter,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import type { Product, ProductCategory } from "@/data/products";

type ProductDiscoveryProps = {
  products: Product[];
  categories: ProductCategory[];
};

type FilterKey =
  | "category"
  | "industry"
  | "application"
  | "technology";

type FilterValues = {
  category: string;
  industry: string;
  application: string;
  technology: string;
};

const emptyFilters: FilterValues = {
  category: "All",
  industry: "All",
  application: "All",
  technology: "All",
};

function uniqueSorted(values: string[]) {
  return Array.from(new Set(values))
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
}

function formatCategory(value: string) {
  return value
    .replaceAll("-", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function ProductResultCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{
        duration: 0.35,
        delay: Math.min(index * 0.035, 0.18),
      }}
      className="ob-discovery-product-card"
    >
      <a href={`/products/${product.slug}`}>
        <div className="ob-discovery-product-image">
          {product.images[0] ? (
            <Image
  src={product.images[0]}
  alt={product.name}
  width={800}
  height={600}
  loading={index < 3 ? "eager" : "lazy"}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
          ) : (
            <div className="ob-discovery-image-placeholder">
              Technical Visual
            </div>
          )}

          <div className="ob-discovery-product-image-grid" />

          <div className="ob-discovery-product-number">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="ob-discovery-product-view">
            View Product
          </div>
        </div>

        <div className="ob-discovery-product-content">
          <span>
            {formatCategory(product.category)}
          </span>

          <h3>{product.name}</h3>

          <p>{product.shortDescription}</p>

          <div className="ob-discovery-product-meta">
            {product.technology.slice(0, 2).map((technology) => (
              <span key={`${product.id}-${technology}`}>
                {technology}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.article>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="ob-discovery-filter">
      <span>{label}</span>

      <div className="ob-discovery-select-wrap">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
        >
          <option value="All">All {label}</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown size={16} />
      </div>
    </label>
  );
}

export default function ProductDiscovery({
  products,
  categories,
}: ProductDiscoveryProps) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<FilterValues>(
    emptyFilters,
  );
  const [mobileFiltersOpen, setMobileFiltersOpen] =
    useState(false);

  const industries = useMemo(
    () =>
      uniqueSorted(
        products.flatMap((product) => product.industries),
      ),
    [products],
  );

  const applications = useMemo(
    () =>
      uniqueSorted(
        products.flatMap((product) => product.applications),
      ),
    [products],
  );

  const technologies = useMemo(
    () =>
      uniqueSorted(
        products.flatMap((product) => product.technology),
      ),
    [products],
  );

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const searchableText = [
        product.name,
        product.category,
        product.shortDescription,
        product.description,
        ...product.features,
        ...product.applications,
        ...product.industries,
        ...product.technology,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !normalizedQuery ||
        searchableText.includes(normalizedQuery);

      const matchesCategory =
        filters.category === "All" ||
        product.category === filters.category;

      const matchesIndustry =
        filters.industry === "All" ||
        product.industries.includes(filters.industry);

      const matchesApplication =
        filters.application === "All" ||
        product.applications.includes(filters.application);

      const matchesTechnology =
        filters.technology === "All" ||
        product.technology.includes(filters.technology);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesIndustry &&
        matchesApplication &&
        matchesTechnology
      );
    });
  }, [filters, products, query]);

  const hasActiveFilters =
    query.trim() !== "" ||
    filters.category !== "All" ||
    filters.industry !== "All" ||
    filters.application !== "All" ||
    filters.technology !== "All";

  function updateFilter(
    key: FilterKey,
    value: string,
  ) {
    setFilters((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function clearFilters() {
    setQuery("");
    setFilters(emptyFilters);
  }

  return (
    <section className="ob-discovery">
      <div className="ob-discovery-toolbar">
        <div className="ob-discovery-search">
          <Search size={19} />

          <input
            type="search"
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="Search products, technologies, applications..."
            aria-label="Search products"
          />

          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
            >
              <X size={17} />
            </button>
          )}
        </div>

        <button
          type="button"
          className="ob-discovery-mobile-filter-button"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <SlidersHorizontal size={17} />
          Filters
        </button>
      </div>

      <div className="ob-discovery-layout">
        <aside className="ob-discovery-sidebar">
          <div className="ob-discovery-sidebar-heading">
            <div>
              <span>REFINE</span>
              <strong>Product Discovery</strong>
            </div>

            <Filter size={18} />
          </div>

          <div className="ob-discovery-filter-stack">
            <FilterSelect
              label="Category"
              value={filters.category}
              options={categories.map(
                (category) => category.slug,
              )}
              onChange={(value) =>
                updateFilter("category", value)
              }
            />

            <FilterSelect
              label="Industry"
              value={filters.industry}
              options={industries}
              onChange={(value) =>
                updateFilter("industry", value)
              }
            />

            <FilterSelect
              label="Application"
              value={filters.application}
              options={applications}
              onChange={(value) =>
                updateFilter("application", value)
              }
            />

            <FilterSelect
              label="Technology"
              value={filters.technology}
              options={technologies}
              onChange={(value) =>
                updateFilter("technology", value)
              }
            />
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              className="ob-discovery-clear"
              onClick={clearFilters}
            >
              <X size={15} />
              Clear all filters
            </button>
          )}
        </aside>

        <div className="ob-discovery-results">
          <div className="ob-discovery-results-header">
            <div>
              <span>TECHNICAL CATALOGUE</span>

              <strong>
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1
                  ? "product"
                  : "products"}
              </strong>
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
              >
                Clear filters
              </button>
            )}
          </div>

          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              <motion.div
                layout
                className="ob-discovery-product-grid"
              >
                {filteredProducts.map(
                  (product, index) => (
                    <ProductResultCard
                      key={product.id}
                      product={product}
                      index={index}
                    />
                  ),
                )}
              </motion.div>
            ) : (
              <motion.div
                className="ob-discovery-empty"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="ob-discovery-empty-icon">
                  <Search size={22} />
                </div>

                <span>NO MATCHING PRODUCTS</span>

                <h3>
                  No products match your current search.
                </h3>

                <p>
                  Try another keyword or remove one or more
                  filters to broaden the catalogue results.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                >
                  Clear filters
                  <ArrowRightIcon />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {mobileFiltersOpen && (
          <motion.div
            className="ob-discovery-mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="ob-discovery-mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 32,
              }}
            >
              <div className="ob-discovery-mobile-drawer-header">
                <div>
                  <span>REFINE</span>
                  <strong>Filters</strong>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setMobileFiltersOpen(false)
                  }
                  aria-label="Close filters"
                >
                  <X size={21} />
                </button>
              </div>

              <div className="ob-discovery-filter-stack">
                <FilterSelect
                  label="Category"
                  value={filters.category}
                  options={categories.map(
                    (category) => category.slug,
                  )}
                  onChange={(value) =>
                    updateFilter("category", value)
                  }
                />

                <FilterSelect
                  label="Industry"
                  value={filters.industry}
                  options={industries}
                  onChange={(value) =>
                    updateFilter("industry", value)
                  }
                />

                <FilterSelect
                  label="Application"
                  value={filters.application}
                  options={applications}
                  onChange={(value) =>
                    updateFilter("application", value)
                  }
                />

                <FilterSelect
                  label="Technology"
                  value={filters.technology}
                  options={technologies}
                  onChange={(value) =>
                    updateFilter("technology", value)
                  }
                />
              </div>

              <div className="ob-discovery-mobile-drawer-actions">
                <button
                  type="button"
                  onClick={clearFilters}
                >
                  Clear all
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setMobileFiltersOpen(false)
                  }
                >
                  <Check size={16} />
                  Show {filteredProducts.length}{" "}
                  {filteredProducts.length === 1
                    ? "product"
                    : "products"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ArrowRightIcon() {
  return <span aria-hidden="true">→</span>;
}
