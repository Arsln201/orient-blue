"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Cpu,
  Gauge,
  Layers3,
  MoveUpRight,
  Network,
  Settings2,
  Zap,
} from "lucide-react";

import type { Product, ProductCategory } from "@/data/products";

type ProductCategoryPageProps = {
  category: ProductCategory;
  products: Product[];
};

const visualIcons = {
  "automation-network": Network,
  "power-distribution": Zap,
  "sensor-array": Gauge,
  "motion-control": Settings2,
};

function TechnicalVisual({ category }: { category: ProductCategory }) {
  const Icon =
    visualIcons[category.technicalVisual as keyof typeof visualIcons] ?? Cpu;

  return (
    <div className="ob-category-technical-visual">
      <div className="ob-category-visual-grid" />
      <div className="ob-category-visual-orbit ob-category-visual-orbit-one" />
      <div className="ob-category-visual-orbit ob-category-visual-orbit-two" />

      <div className="ob-category-visual-core">
        <Icon size={42} strokeWidth={1.2} />
      </div>

      <span className="ob-category-node ob-category-node-one" />
      <span className="ob-category-node ob-category-node-two" />
      <span className="ob-category-node ob-category-node-three" />

      <div className="ob-category-visual-label">
        <span>TECHNICAL SYSTEM</span>
        <strong>ORIENT BLUE</strong>
      </div>
    </div>
  );
}

function categoryLabel(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function CategoryProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  return (
    <motion.article
      className="ob-category-product-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
    >
      <Link href={`/products/${product.slug}`}>
        <div className="ob-category-product-image">
          {product.images?.[0] ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
            />
          ) : (
            <div className="ob-category-product-image-placeholder">
              <Cpu size={36} strokeWidth={1.2} />
            </div>
          )}

          <span className="ob-category-product-index">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="ob-category-product-arrow">
            <MoveUpRight size={17} strokeWidth={1.8} />
          </span>
        </div>

        <div className="ob-category-product-body">
          <span className="ob-category-product-category">
            {categoryLabel(product.category)}
          </span>

          <h3>{product.name}</h3>
          <p>{product.shortDescription}</p>

          {product.specifications?.length > 0 && (
            <div className="ob-category-product-specs">
              {product.specifications.slice(0, 2).map((spec, specIndex) => (
                <span key={`${product.id}-spec-${specIndex}`}>
                  <strong>{spec.label}</strong>
                  <em>{spec.value}</em>
                </span>
              ))}
            </div>
          )}

          <div className="ob-category-product-link">
            <span>View Product</span>
            <ArrowRight size={15} strokeWidth={1.8} />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default function ProductCategoryPage({
  category,
  products,
}: ProductCategoryPageProps) {
  const featuredProducts = products.slice(0, 2);

  return (
    <main className="ob-category-page">
      <section className="ob-category-hero">
        <div className="ob-category-hero-image">
          <Image
            src={category.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="ob-category-hero-overlay" />
        <div className="ob-category-hero-grid" />

        <div className="ob-container">
          <div className="ob-category-hero-content">
            <Link href="/products" className="ob-category-back-link">
              <ArrowRight
                size={14}
                className="rotate-180"
                strokeWidth={1.8}
              />
              Product Catalogue
            </Link>

            <div className="ob-category-hero-label">
              <span />
              Technical Product Category
            </div>

            <h1>{category.name}</h1>

            <p>{category.description}</p>

            <div className="ob-category-hero-meta">
              <span>
                <strong>{String(products.length).padStart(2, "0")}</strong>
                Products
              </span>

              <span>
                <strong>
                  {String(category.applications.length).padStart(2, "0")}
                </strong>
                Applications
              </span>

              <span>
                <strong>OB</strong>
                Technical Portfolio
              </span>
            </div>
          </div>
        </div>

        <div className="ob-category-hero-scroll">
          <span>Explore category</span>
          <span className="ob-category-scroll-line" />
        </div>
      </section>

      <section className="ob-category-intro ob-section-white">
        <div className="ob-container">
          <div className="ob-category-intro-grid">
            <div>
              <div className="ob-category-eyebrow">01 / Category</div>

              <h2>
                Technical capability,
                <br />
                structured for industry.
              </h2>
            </div>

            <div className="ob-category-intro-copy">
              <p>{category.description}</p>

              <p>
                The catalogue structure is designed to make technical
                information easier to explore, compare and connect with wider
                engineering requirements.
              </p>

              <div className="ob-category-intro-rule" />
            </div>
          </div>
        </div>
      </section>

      <section className="ob-category-technical-section">
        <div className="ob-container">
          <div className="ob-category-technical-grid">
            <div>
              <div className="ob-category-eyebrow ob-category-eyebrow-light">
                02 / Technical System
              </div>

              <h2>
                A structured view
                <br />
                of the technology.
              </h2>

              <p>
                Category architecture connects products, applications and
                technical requirements into one scalable catalogue.
              </p>

              <div className="ob-category-technical-points">
                {category.technicalAdvantages.slice(0, 3).map((advantage, index) => (
                  <div key={`${category.id}-advantage-${index}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{advantage}</strong>
                  </div>
                ))}
              </div>
            </div>

            <TechnicalVisual category={category} />
          </div>
        </div>
      </section>

      {featuredProducts.length > 0 && (
        <section className="ob-category-featured ob-section-soft">
          <div className="ob-container">
            <div className="ob-category-section-heading">
              <div>
                <div className="ob-category-eyebrow">
                  03 / Featured Products
                </div>

                <h2>Selected from the category.</h2>
              </div>

              <span className="ob-category-count">
                {String(featuredProducts.length).padStart(2, "0")} FEATURED
              </span>
            </div>

            <div className="ob-category-featured-grid">
              {featuredProducts.map((product, index) => (
                <CategoryProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="ob-category-products ob-section-white">
        <div className="ob-container">
          <div className="ob-category-section-heading">
            <div>
              <div className="ob-category-eyebrow">
                04 / Product Portfolio
              </div>

              <h2>All products.</h2>
            </div>

            <span className="ob-category-count">
              {String(products.length).padStart(2, "0")} PRODUCTS
            </span>
          </div>

          {products.length > 0 ? (
            <div className="ob-category-products-grid">
              {products.map((product, index) => (
                <CategoryProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="ob-category-empty">
              <Layers3 size={30} strokeWidth={1.2} />
              <strong>Product information coming soon.</strong>
              <p>
                Client-approved products will be added to this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="ob-category-applications">
        <div className="ob-category-applications-grid" />

        <div className="ob-container">
          <div className="ob-category-applications-layout">
            <div>
              <div className="ob-category-eyebrow ob-category-eyebrow-light">
                05 / Applications
              </div>

              <h2>
                Where the technology
                <br />
                fits.
              </h2>

              <p>
                Applications shown here are structured as replaceable catalogue
                content and can be updated with approved Orient Blue
                application information.
              </p>
            </div>

            <div className="ob-category-applications-list">
              {category.applications.map((application, index) => (
                <div key={`${category.id}-application-${index}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{application}</strong>
                  <ChevronRight size={17} strokeWidth={1.6} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ob-category-advantages ob-section-white">
        <div className="ob-container">
          <div className="ob-category-advantages-grid">
            <div>
              <div className="ob-category-eyebrow">
                06 / Technical Advantages
              </div>

              <h2>
                Designed around
                <br />
                technical requirements.
              </h2>
            </div>

            <div className="ob-category-advantage-list">
              {category.technicalAdvantages.map((advantage, index) => (
                <div key={`${category.id}-technical-${index}`}>
                  <div className="ob-category-check">
                    <Check size={15} strokeWidth={2} />
                  </div>

                  <div>
                    <span>
                      ADVANTAGE {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong>{advantage}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ob-category-solutions">
        <div className="ob-container">
          <div className="ob-category-solutions-heading">
            <div>
              <div className="ob-category-eyebrow ob-category-eyebrow-light">
                07 / Related Solutions
              </div>

              <h2>
                From product
                <br />
                to application.
              </h2>
            </div>

            <p>
              Connect this product category with the wider Orient Blue
              solutions architecture.
            </p>
          </div>

          <div className="ob-category-solutions-grid">
            {category.relatedSolutions.map((solution, index) => (
              <Link
                key={`${category.id}-solution-${index}`}
                href="#"
                className="ob-category-solution"
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{solution}</strong>
                <ArrowRight size={18} strokeWidth={1.6} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ob-category-final">
        <div className="ob-container">
          <div className="ob-category-final-inner">
            <div>
              <div className="ob-category-eyebrow ob-category-eyebrow-light">
                Orient Blue / Technical Portfolio
              </div>

              <h2>
                Explore the complete
                <br />
                product catalogue.
              </h2>
            </div>

            <Link href="/products" className="ob-category-final-button">
              <span>Back to Products</span>
              <ArrowRight size={16} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
