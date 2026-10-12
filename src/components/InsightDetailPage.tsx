"use client";

import Image from "next/image";
import InsightsDisclaimer from "@/components/InsightsDisclaimer";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Download,
} from "lucide-react";
import type { Insight } from "@/data/insights";

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

type InsightDetailPageProps = {
  insight: Insight;
  relatedInsights: Insight[];
};

export default function InsightDetailPage({
  insight,
  relatedInsights,
}: InsightDetailPageProps) {
  return (
    <main className="ob-insight-detail">
      <section className="ob-insight-detail-hero">
        <div className="ob-container">
          <Link
            href="/insights"
            className="ob-insight-back"
          >
            <ArrowLeft size={16} />
            Back to Insights
          </Link>

          <motion.div
            className="ob-insight-detail-heading"
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            <div className="ob-insight-detail-category">
              {insight.category}
            </div>

            <span className="ob-insights-placeholder-badge">
              PLACEHOLDER — REPLACE WITH APPROVED CONTENT
            </span>

            <h1>{insight.title}</h1>

            <p>{insight.excerpt}</p>

            <div className="ob-insight-detail-meta">
              <span>{insight.date}</span>
              <span>{insight.readTime}</span>
              <span>ORIENT BLUE FZ-L.L.C.</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="ob-insight-detail-cover">
        <div className="ob-container">
          <motion.div
            className="ob-insight-detail-image"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
  src={insight.image}
  alt=""
  width={1200}
  height={800}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
          </motion.div>
        </div>
      </section>

      <section className="ob-insight-detail-body ob-section">
        <div className="ob-container ob-insight-detail-layout">
          <aside className="ob-insight-detail-index">
            <span>PUBLICATION</span>

            <strong>{insight.number}</strong>

            <div />

            <span>{insight.category}</span>
          </aside>

          <article className="ob-insight-article">
            <div className="ob-insight-article-intro">
              {insight.content.introduction}
            </div>

            {insight.content.sections.map((section, index) => (
              <motion.section
                key={section.heading}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                className="ob-insight-article-section"
              >
                <span>0{index + 1}</span>

                <div>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                </div>
              </motion.section>
            ))}

            {insight.category === "Downloads" && (
              <div className="ob-insight-download-placeholder">
                <Download size={20} />

                <div>
                  <strong>Download pending</strong>
                  <p>
                    The approved Orient Blue document will be connected here
                    once supplied.
                  </p>
                </div>
              </div>
            )}

            <div className="ob-insight-replacement-note">
              <strong>Content replacement note</strong>
              <p>
                This publication currently contains placeholder material.
                Replace it with approved Orient Blue content before publishing
                the production website.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="ob-insight-related">
        <div className="ob-container">
          <div className="ob-insights-section-intro">
            <div>
              <span className="ob-insights-eyebrow">RELATED</span>
              <h2>More publications.</h2>
            </div>
          </div>

          <div className="ob-insight-related-grid">
            {relatedInsights.slice(0, 3).map((item) => (
              <Link
                href={`/insights/${item.slug}`}
                className="ob-insight-related-card"
                key={item.id}
              >
                <span>{item.category}</span>
                <h3>{item.title}</h3>

                <div>
                  Read publication
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <InsightsDisclaimer />
    </main>
  );
}