import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
export const instant = false;
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { sellCategories, sellProducts } from "@/data/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return sellCategories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function WhatWeSellCategoryPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const category = sellCategories.find((item) => item.slug === slug);

  if (!category) notFound();

  const categoryProducts = sellProducts.filter(
    (product) => product.categorySlug === category.slug
  );

  return (
    <main className="ob-sell-detail">
      <section className="ob-sell-detail-hero">
        <div className="ob-sell-detail-image">
          <Image
            src={category.image}
            alt={category.name}
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="ob-sell-detail-overlay" />

        <div className="ob-sell-detail-container">
          <Link href="/products" className="ob-sell-back">
            <ArrowLeft size={16} />
            Back to catalogue
          </Link>

          <span className="ob-sell-detail-eyebrow">
            ORIENT BLUE / PRODUCT RANGE
          </span>

          <h1>{category.name}</h1>
          <p>{category.description}</p>

          <Link href="/contact" className="ob-sell-detail-button">
            Enquire about products
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="ob-sell-detail-index">
          PRODUCT RANGE / {category.id.toUpperCase()}
        </div>
      </section>

      <section className="ob-sell-detail-body">
        <div className="ob-sell-detail-container">
          <div className="ob-sell-detail-intro">
            <span className="ob-products-eyebrow">
              CATEGORY OVERVIEW
            </span>

            <h2>
              Equipment for
              <br />
              <span>real-world applications.</span>
            </h2>

            <p>{category.description}</p>
          </div>

          <div className="ob-sell-detail-grid">
            <article className="ob-sell-detail-panel">
              <span className="ob-products-eyebrow">
                01 / PRODUCT TYPES
              </span>

              <h3>Explore the range</h3>

              <div className="ob-sell-detail-list">
                {category.productTypes.map((item) => (
                  <div key={item}>
                    <span>{item}</span>
                    <ArrowRight size={16} />
                  </div>
                ))}
              </div>
            </article>

            <article className="ob-sell-detail-panel ob-sell-applications">
              <span className="ob-products-eyebrow">
                02 / APPLICATIONS
              </span>

              <h3>Where it fits</h3>

              <div className="ob-sell-detail-app-list">
                {category.applications.map((item) => (
                  <div key={item}>
                    <CheckCircle2 size={17} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p>
                Ask our team about suitable options for your
                application and technical requirements.
              </p>

              <Link href="/contact" className="ob-sell-contact-link">
                Contact our team
                <ArrowRight size={16} />
              </Link>
            </article>
          </div>

          <section className="ob-sell-products">
            <div className="ob-sell-products-heading">
              <div>
                <span className="ob-products-eyebrow">
                  ORIENT BLUE / CATALOGUE
                </span>
                <h2>Explore products<span>.</span></h2>
                <p>
                  Browse the illustrative product range for this category.
                </p>
              </div>

              <span className="ob-sell-products-count">
                {String(categoryProducts.length).padStart(2, "0")} ITEMS
              </span>
            </div>

            {categoryProducts.length > 0 ? (
              <div className="ob-sell-product-grid">
                {categoryProducts.map((product, index) => (
                  <article className="ob-sell-product-card" key={product.id}>
                    <div className="ob-sell-product-image">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 680px) 100vw, (max-width: 1050px) 50vw, 33vw"
                      />
                      <span className="ob-sell-product-number">
                        PRODUCT / {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="ob-sell-product-content">
                      <span className="ob-sell-product-label">
                        {category.name}
                      </span>

                      <h3>{product.name}</h3>
                      <p>{product.description}</p>

                      <div className="ob-sell-product-features">
                        {product.features.map((feature) => (
                          <span key={feature}>
                            <CheckCircle2 size={14} />
                            {feature}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/contact?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(category.name)}`}
                        className="ob-sell-product-enquire"
                      >
                        <MessageCircle size={16} />
                        Enquire about this product
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="ob-sell-products-empty">
                <p>
                  Product listings for this category are being prepared.
                  Contact our team for availability and details.
                </p>
                <Link href="/contact" className="ob-sell-detail-button">
                  Contact our team <ArrowRight size={16} />
                </Link>
              </div>
            )}

            <div className="ob-sell-detail-notice">
              <span />
              <p>
                Please confirm product availability, specifications, pricing, and
                compatibility with Orient Blue before placing an order.
              </p>
            </div>
          </section>

          <Link href="/products" className="ob-sell-return">
            <ArrowLeft size={16} />
            Explore all product categories
          </Link>
        </div>
      </section>
    </main>
  );
}
