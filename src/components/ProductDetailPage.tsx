"use client";

import EnquiryCTA from "./EnquiryCTA";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Factory,
  Mail,
  MoveUpRight,
  Settings2,
  ShieldCheck,
} from "lucide-react";

import type { Product } from "@/data/products";

type ProductDetailPageProps = {
  product: Product;
  relatedProducts: Product[];
};

function ProductImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="ob-product-detail-image">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 900px) 100vw, 58vw"
      />

      <div className="ob-product-detail-image-grid" />
      <div className="ob-product-detail-image-line ob-product-detail-image-line-one" />
      <div className="ob-product-detail-image-line ob-product-detail-image-line-two" />

      <div className="ob-product-detail-image-label">
        <span>TECHNICAL VISUAL</span>
        <span>01 / 01</span>
      </div>
    </div>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: string;
  index: number;
}) {
  return (
    <motion.article
      className="ob-product-feature-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
    >
      <div className="ob-product-feature-number">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="ob-product-feature-icon">
        <Check size={17} strokeWidth={1.7} />
      </div>

      <h3>{feature}</h3>
    </motion.article>
  );
}

function RelatedProductCard({
  product,
}: {
  product: Product;
}) {
  const image = product.images[0];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="ob-product-related-card"
    >
      <div className="ob-product-related-image">
        {image ? (
          <Image
            src={image}
            alt={product.name}
            fill
            sizes="(max-width: 760px) 100vw, 33vw"
          />
        ) : (
          <div className="ob-product-related-placeholder">
            Technical Visual
          </div>
        )}

        <div className="ob-product-related-overlay" />
      </div>

      <div className="ob-product-related-content">
        <div>
          <span className="ob-product-related-category">
            {product.category.replaceAll("-", " ")}
          </span>

          <h3>{product.name}</h3>
        </div>

        <span className="ob-product-related-arrow">
          <MoveUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}

export default function ProductDetailPage({
  product,
  relatedProducts,
}: ProductDetailPageProps) {
  const primaryImage = product.images[0];

  return (
    <main className="ob-product-detail-page">
      {/* =====================================================
          01 — PRODUCT HERO
          ===================================================== */}
      <section className="ob-product-detail-hero">
        <div className="ob-product-detail-hero-grid" />

        <div className="ob-container">
          <div className="ob-product-detail-breadcrumb">
            <Link href="/products">Products</Link>
            <span>/</span>
            <span>{product.category.replaceAll("-", " ")}</span>
          </div>

          <div className="ob-product-detail-hero-layout">
            <motion.div
              className="ob-product-detail-copy"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="ob-product-detail-index">
                <span>01</span>
                <span>PRODUCT</span>
              </div>

              <div className="ob-product-detail-eyebrow">
                {product.category.replaceAll("-", " ")}
              </div>

              <h1>{product.name}</h1>

              <p className="ob-product-detail-short-description">
                {product.shortDescription}
              </p>

              <div className="ob-product-detail-actions">
                <a
                  href={`mailto:mirzaarsalan906@gmail.com?subject=Request Product Information - ${encodeURIComponent(product.name)}`}
                  className="ob-product-detail-primary-cta"
                >
                  Request Product Information
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#overview"
                  className="ob-product-detail-scroll"
                >
                  <span>Explore product</span>
                  <ArrowDown size={17} />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="ob-product-detail-hero-visual"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {primaryImage ? (
                <ProductImage
                  src={primaryImage}
                  alt={product.name}
                  priority
                />
              ) : (
                <div className="ob-product-detail-no-image">
                  Technical Product Visual
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — OVERVIEW
          ===================================================== */}
      <section
        id="overview"
        className="ob-product-detail-overview ob-section-white ob-layout-section"
      >
        <div className="ob-container">
          <div className="ob-product-detail-section-heading">
            <div className="ob-product-detail-section-number">
              02
            </div>

            <div>
              <span className="ob-type-eyebrow">Overview</span>

              <h2>
                Engineered for
                <br />
                technical environments.
              </h2>
            </div>
          </div>

          <div className="ob-product-detail-overview-grid">
            <div className="ob-product-detail-overview-lead">
              {product.description}
            </div>

            <div className="ob-product-detail-overview-side">
              <div className="ob-product-detail-side-line" />

              <p>
                This product information is presented as a
                development catalogue reference and can be
                replaced with the final client-approved
                technical documentation.
              </p>

              {product.clientDataRequired && (
                <div className="ob-product-demo-note">
                  <span />
                  <strong>CLIENT DATA REQUIRED</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — KEY FEATURES
          ===================================================== */}
      <section className="ob-product-detail-features ob-section-soft ob-layout-section">
        <div className="ob-container">
          <div className="ob-product-detail-section-heading">
            <div className="ob-product-detail-section-number">
              03
            </div>

            <div>
              <span className="ob-type-eyebrow">
                Key Features
              </span>

              <h2>
                Built around
                <br />
                technical performance.
              </h2>
            </div>
          </div>

          <div className="ob-product-features-grid">
            {product.features.map((feature, index) => (
              <FeatureCard
                key={`${product.id}-feature-${index}`}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — TECHNICAL SPECIFICATIONS
          ===================================================== */}
      <section className="ob-product-detail-specs ob-section-white ob-layout-section">
        <div className="ob-container">
          <div className="ob-product-detail-section-heading">
            <div className="ob-product-detail-section-number">
              04
            </div>

            <div>
              <span className="ob-type-eyebrow">
                Technical Specifications
              </span>

              <h2>
                Technical data,
                <br />
                clearly structured.
              </h2>
            </div>
          </div>

          <div className="ob-product-spec-table">
            <div className="ob-product-spec-header">
              <span>PARAMETER</span>
              <span>VALUE</span>
            </div>

            {product.specifications.map(
              (specification, index) => (
                <div
                  className="ob-product-spec-row"
                  key={`${product.id}-spec-${index}`}
                >
                  <span>{specification.label}</span>
                  <strong>{specification.value}</strong>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — APPLICATIONS
          ===================================================== */}
      <section className="ob-product-detail-applications ob-section-dark ob-layout-section">
        <div className="ob-product-detail-blue-grid" />

        <div className="ob-container">
          <div className="ob-product-detail-section-heading ob-product-detail-section-heading-light">
            <div className="ob-product-detail-section-number">
              05
            </div>

            <div>
              <span className="ob-type-eyebrow">
                Applications
              </span>

              <h2>
                Designed for
                <br />
                real-world systems.
              </h2>
            </div>
          </div>

          <div className="ob-product-application-grid">
            {product.applications.map((application, index) => (
              <motion.div
                key={`${product.id}-application-${index}`}
                className="ob-product-application-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Settings2 size={20} strokeWidth={1.5} />

                <h3>{application}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — INDUSTRIES
          ===================================================== */}
      <section className="ob-product-detail-industries ob-section-ice ob-layout-section">
        <div className="ob-container">
          <div className="ob-product-detail-section-heading">
            <div className="ob-product-detail-section-number">
              06
            </div>

            <div>
              <span className="ob-type-eyebrow">
                Industries
              </span>

              <h2>
                Supporting demanding
                <br />
                industrial environments.
              </h2>
            </div>
          </div>

          <div className="ob-product-industries-grid">
            {product.industries.map((industry, index) => (
              <div
                key={`${product.id}-industry-${index}`}
                className="ob-product-industry-card"
              >
                <div className="ob-product-industry-icon">
                  <Factory size={22} strokeWidth={1.5} />
                </div>

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{industry}</h3>

                <ArrowRight size={18} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          07 — RELATED PRODUCTS
          ===================================================== */}
      {relatedProducts.length > 0 && (
        <section className="ob-product-detail-related ob-section-white ob-layout-section">
          <div className="ob-container">
            <div className="ob-product-detail-section-heading">
              <div className="ob-product-detail-section-number">
                07
              </div>

              <div>
                <span className="ob-type-eyebrow">
                  Related Products
                </span>

                <h2>
                  Explore related
                  <br />
                  technical products.
                </h2>
              </div>
            </div>

            <div className="ob-product-related-grid">
              {relatedProducts.map((relatedProduct) => (
                <RelatedProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          08 — ENQUIRY
          ===================================================== */}
      <section className="ob-product-detail-enquiry">
        <div className="ob-product-enquiry-grid" />

        <div className="ob-container">
          <div className="ob-product-enquiry-content">
            <div className="ob-product-detail-index ob-product-detail-index-light">
              <span>08</span>
              <span>ENQUIRY</span>
            </div>

            <div className="ob-product-enquiry-icon">
              <Mail size={22} strokeWidth={1.5} />
            </div>

            <span className="ob-type-eyebrow">
              Need technical information?
            </span>

            <h2>
              Let&apos;s discuss
              <br />
              your requirement.
            </h2>

            <p>
              Request product information, technical
              documentation or application guidance.
            </p>

            <a
              href={`mailto:mirzaarsalan906@gmail.com?subject=Request Product Information - ${encodeURIComponent(product.name)}`}
              className="ob-product-enquiry-button"
            >
              Request Product Information
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="ob-product-enquiry-meta">
            <div>
              <ShieldCheck size={18} />
              <span>Technical information</span>
            </div>

            <div>
              <Factory size={18} />
              <span>Industrial applications</span>
            </div>

            <div>
              <Settings2 size={18} />
              <span>Product support</span>
            </div>
          </div>
        </div>
      </section>
    
      <EnquiryCTA
        type="product"
        name={product.name}
      />
</main>
  );
}
