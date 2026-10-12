"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import ProductDiscovery from "@/components/ProductDiscovery";

import {
  productCategories,
  products,
  sellCategories,
} from "@/data/products";

export default function ProductsPage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <main className="ob-products-page">

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="ob-products-intro">
        <div className="ob-products-intro-grid">
          <div>
            <span className="ob-products-eyebrow">
              Orient Blue / Product Catalogue
            </span>

            <h1>
              Technical products
              <br />
              <span>built for industry.</span>
            </h1>
          </div>

          <div className="ob-products-intro-copy">
            <p>
              Explore a structured catalogue of industrial
              technologies, equipment and technical systems.
            </p>

            <div className="ob-products-demo-note">
              <span />

              <p>
              Explore Orient Blue&apos;s range of technical products and equipment
              across industrial applications, electrical systems,
              instrumentation, and motion control.
             </p>
            </div>
          </div>
        </div>

        <div className="ob-products-intro-line">
          <span>01</span>
          <span>Explore technical portfolio</span>
        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <section className="ob-products-categories">
        <div className="ob-products-container">

          <div className="ob-products-section-heading">
            <div>
              <span className="ob-products-eyebrow">
                Product architecture
              </span>

              <h2>
                Find the right
                <br />
                <span>technology.</span>
              </h2>
            </div>

            <p>
              Browse the catalogue by technical discipline,
              application and system type.
            </p>
          </div>

          <div className="ob-products-category-grid">
            {productCategories.map((category, index) => (
              <Link
                key={category.id}
                href={`/products/${category.slug}`}
                className="ob-products-category-card"
              >
                <div className="ob-products-category-top">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowRight size={18} />
                </div>

                <div className="ob-products-category-visual">
                <Image
                 src={category.heroImage}
                 alt={category.name}
                 fill
                 sizes="(max-width: 650px) 100vw, (max-width: 1100px) 50vw, 25vw"
                 className="ob-products-category-image"
                 />
                 <div className="ob-products-category-image-overlay" />
                 </div>

                <h3>{category.name}</h3>

                <p>{category.description}</p>

                <span className="ob-products-category-link">
                  View products
                  <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT WE SELL
      ====================================================== */}

      <section className="ob-sell-section">
        <div className="ob-products-container">
          <div className="ob-sell-heading">
            <div>
              <span className="ob-products-eyebrow">
                Explore our range
              </span>

              <h2>
                What we
                <br />
                <span>sell.</span>
              </h2>
            </div>

            <p>
              Explore tools and equipment across practical product
              categories. Detailed specifications and availability
              can be added once approved by Orient Blue.
            </p>
          </div>

          <div className="ob-sell-grid">
            {sellCategories.map((category, index) => (
              <Link
                key={category.id}
                href={`/what-we-sell/${category.slug}`}
                className="ob-sell-card"
              >
                <div className="ob-sell-image">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 650px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  />

                  <div className="ob-sell-image-overlay" />

                  <span className="ob-sell-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="ob-sell-arrow">
                    <ArrowRight size={18} />
                  </span>
                </div>

                <div className="ob-sell-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>

                  <span className="ob-sell-link">
                    Explore category
                    <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED
      ====================================================== */}

      <section className="ob-products-featured">
        <div className="ob-products-container">

          <div className="ob-products-featured-header">
            <div>
              <span className="ob-products-eyebrow">
                Featured catalogue
              </span>

              <h2>
                Selected
                <br />
                <span>technologies.</span>
              </h2>
            </div>

            <p>
              A preview of the product architecture. Final
              product selection will use client-approved data.
            </p>
          </div>

          <div className="ob-products-featured-grid">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          PRODUCT DISCOVERY
      ====================================================== */}

      <section className="ob-products-catalogue">
        <div className="ob-products-container">

          <div className="ob-products-catalogue-heading">
            <div>
              <span className="ob-products-eyebrow">
                Complete catalogue
              </span>

              <h2>
                Discover
                <br />
                <span>technical products.</span>
              </h2>
            </div>

            <p>
              Search and refine the technical catalogue by
              product, industry, application and technology.
            </p>
          </div>

          <ProductDiscovery
            products={products}
            categories={productCategories}
          />

        </div>
      </section>

      {/* =====================================================
          APPLICATIONS
      ====================================================== */}

      <section className="ob-products-applications">
        <div className="ob-products-applications-glow" />

        <div className="ob-products-container">
          <div className="ob-products-applications-grid">

            <div>
              <span className="ob-products-eyebrow">
                Technical applications
              </span>

              <h2>
                Technology
                <br />
                <span>in context.</span>
              </h2>

              <p>
                Product selection becomes more useful when
                connected to the technical environments where
                systems operate.
              </p>

              <Link
                href="/solutions"
                className="ob-products-primary-button"
              >
                Explore Solutions
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="ob-products-application-list">
              {[
                "Industrial Automation",
                "Power Distribution",
                "Process Monitoring",
                "Equipment Control",
                "Infrastructure Systems",
                "Technical Operations",
              ].map((application, index) => (
                <div
                  key={application}
                  className="ob-products-application-row"
                >
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{application}</strong>

                  <ArrowRight size={18} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 22,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.06, 0.24),
      }}
      className="ob-product-card"
    >
      <Link href={`/products/${product.slug}`}>

        <div className="ob-product-image">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="
              (max-width: 700px) 100vw,
              (max-width: 1100px) 50vw,
              33vw
            "
          />

          <div className="ob-product-image-overlay" />

          <div className="ob-product-technical-lines">
            <span />
            <span />
            <span />
          </div>

          <div className="ob-product-index">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="ob-product-arrow">
            <ArrowRight size={18} />
          </div>
        </div>

        <div className="ob-product-content">

          <div className="ob-product-category">
            {product.category.replaceAll("-", " ")}
          </div>

          <h3>{product.name}</h3>

          <p>{product.shortDescription}</p>

          <div className="ob-product-footer">
            <span>View Product</span>
            <ArrowRight size={16} />
          </div>

          <div className="ob-product-spec-preview">
            {product.specifications
              .slice(0, 2)
              .map((specification) => (
                <div key={specification.label}>
                  <span>
                    {specification.label}
                  </span>

                  <strong>
                    {specification.value}
                  </strong>
                </div>
              ))}
          </div>

        </div>

      </Link>
    </motion.article>
  );
}
