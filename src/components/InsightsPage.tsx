"use client";

import Image from "next/image";
import InsightsDisclaimer from "@/components/InsightsDisclaimer";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Download,
  FileText,
  Newspaper,
} from "lucide-react";
import {
  insightCategories,
  insights,
} from "@/data/insights";

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const categoryIcons = {
  News: Newspaper,
  Articles: FileText,
  "Technical Insights": BookOpen,
  "Product Updates": ArrowRight,
  Resources: BookOpen,
  Downloads: Download,
};

export default function InsightsPage() {
  const featured = insights.find((item) => item.featured) ?? insights[0];
  const remaining = insights.filter((item) => item.id !== featured.id);

  return (
    <main className="ob-insights-page">
      <section className="ob-insights-hero">
        <div className="ob-insights-hero-grid" />

        <div className="ob-container ob-insights-hero-inner">
          <motion.div
            className="ob-insights-hero-copy"
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            <span className="ob-insights-eyebrow">
              INSIGHTS / PUBLICATIONS
            </span>

            <h1>
              Ideas, technical
              <br />
              knowledge & updates.
            </h1>

            <p>
              A publication space for Orient Blue technical insights,
              articles, product updates, resources and approved company news.
            </p>

            <div className="ob-insights-hero-meta">
              <span>ORIENT BLUE FZ-L.L.C.</span>
              <span>TECHNICAL PUBLICATION</span>
            </div>
          </motion.div>

          <motion.div
            className="ob-insights-hero-mark"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <span>OB</span>
            <small>INSIGHTS</small>
          </motion.div>
        </div>

        <div className="ob-insights-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={16} />
        </div>
      </section>

      <section className="ob-insights-categories">
        <div className="ob-container">
          <div className="ob-insights-category-label">
            <span>FILTER BY</span>
          </div>

          <div className="ob-insights-category-list">
            {insightCategories.map((category) => {
              const Icon = categoryIcons[category];

              return (
                <button type="button" key={category}>
                  <Icon size={16} />
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ob-insights-featured ob-section">
        <div className="ob-container">
          <div className="ob-insights-section-intro">
            <div>
              <span className="ob-insights-eyebrow">01 / FEATURED</span>
              <h2>Featured publication.</h2>
            </div>

            <span className="ob-insights-placeholder-note">
              PLACEHOLDER CONTENT
            </span>
          </div>

          <motion.article
            className="ob-insights-featured-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
          >
            <Link
              href={`/insights/${featured.slug}`}
              className="ob-insights-featured-image"
            >
              <Image
  src={featured.image}
  alt=""
  width={1200}
  height={800}
  sizes="(max-width: 768px) 100vw, 50vw"
/>

              <span className="ob-insights-image-label">
                {featured.category}
              </span>
            </Link>

            <div className="ob-insights-featured-content">
              <div className="ob-insights-entry-meta">
                <span>{featured.date}</span>
                <span>{featured.readTime}</span>
              </div>

              <h3>{featured.title}</h3>

              <p>{featured.excerpt}</p>

              <Link
                href={`/insights/${featured.slug}`}
                className="ob-insights-read-link"
              >
                Read publication
                <ArrowRight size={17} />
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="ob-insights-archive ob-section">
        <div className="ob-container">
          <div className="ob-insights-section-intro">
            <div>
              <span className="ob-insights-eyebrow">02 / ARCHIVE</span>
              <h2>Explore the publication.</h2>
            </div>

            <p>
              Placeholder entries are structured for easy replacement with
              approved Orient Blue content.
            </p>
          </div>

          <div className="ob-insights-grid">
            {remaining.map((insight, index) => (
              <motion.article
                key={insight.id}
                className="ob-insight-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={reveal}
                transition={{ delay: index * 0.06 }}
              >
                <Link
                  href={`/insights/${insight.slug}`}
                  className="ob-insight-card-image"
                >
                 <Image
  src={insight.image}
  alt=""
  width={1200}
  height={800}
  sizes="(max-width: 768px) 100vw, 50vw"
/>

                  <span>{insight.category}</span>
                </Link>

                <div className="ob-insight-card-body">
                  <div className="ob-insights-entry-meta">
                    <span>{insight.date}</span>
                    <span>{insight.readTime}</span>
                  </div>

                  <h3>{insight.title}</h3>

                  <p>{insight.excerpt}</p>

                  <Link
                    href={`/insights/${insight.slug}`}
                    className="ob-insights-read-link"
                  >
                    View publication
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="ob-insights-placeholder">
        <div className="ob-container ob-insights-placeholder-inner">
          <div>
            <span className="ob-insights-eyebrow">EDITORIAL SYSTEM</span>
            <h2>
              Built to grow with the Orient Blue knowledge base.
            </h2>
          </div>

          <p>
            News, articles, technical insights, product updates, resources and
            downloads can be added through the same structured publication
            system.
          </p>
        </div>
      </section>
      <InsightsDisclaimer />
    </main>
  );
}
