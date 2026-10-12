"use client";

import Link from "next/link";
import { ArrowRight, MoveUpRight } from "lucide-react";
import { motion } from "motion/react";

import { industries } from "@/data/industries";

export default function IndustriesPage() {
  return (
    <main className="ob-industries-page">
      <section className="ob-industries-hero">
        <div className="ob-industries-hero-grid" />

        <div className="ob-container ob-industries-hero-inner">
          <motion.div
            className="ob-industries-hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="ob-section-eyebrow">
              ORIENT BLUE / INDUSTRIES
            </span>

            <h1>
              Technical expertise
              <br />
              in context.
            </h1>

            <p>
              Explore the industries served by Orient Blue
              through products, solutions, technical
              services, and applications.
            </p>
          </motion.div>

          <div className="ob-industries-hero-meta">
            <span>
              {String(industries.length).padStart(2, "0")}
            </span>
            <p>
              Client-confirmed
              <br />
              industries
            </p>
          </div>
        </div>
      </section>

      <section className="ob-industries-intro ob-section">
        <div className="ob-container ob-industries-intro-grid">
          <span className="ob-section-eyebrow">
            01 / INDUSTRY APPROACH
          </span>

          <div>
            <h2>
              The industry
              <br />
              defines the context.
            </h2>

            <p>
              Orient Blue industry pages will connect verified
              industry information with the products, solutions,
              services, and applications relevant to that
              environment.
            </p>
          </div>
        </div>
      </section>

      <section className="ob-industries-list ob-section">
        <div className="ob-container">
          <div className="ob-industries-list-header">
            <span className="ob-section-eyebrow">
              02 / INDUSTRIES
            </span>

            <span>
              {industries.length > 0
                ? "CLIENT-CONFIRMED INDUSTRIES"
                : "INDUSTRY DATA REQUIRED"}
            </span>
          </div>

          {industries.length > 0 ? (
            <div className="ob-industries-list-items">
              {industries.map((industry) => (
                <Link
                  key={industry.id}
                  href={`/industries/${industry.slug}`}
                  className="ob-industry-card"
                >
                  <span>{industry.number}</span>

                  <div>
                    <small>INDUSTRY</small>
                    <h2>{industry.name}</h2>
                    <p>{industry.heroDescription}</p>
                  </div>

                  <ArrowRight size={20} />
                  <i />
                </Link>
              ))}
            </div>
          ) : (
            <div className="ob-industries-empty">
              <span>CLIENT INDUSTRY DATA REQUIRED</span>

              <h2>
                The industry catalogue is ready
                <br />
                for Orient Blue&apos;s confirmed sectors.
              </h2>

              <p>
                No industry has been added to the public
                catalogue until the actual industries served
                by Orient Blue are confirmed.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="ob-industries-cta">
        <div className="ob-industries-cta-grid" />

        <div className="ob-container ob-industries-cta-inner">
          <span className="ob-section-eyebrow">
            03 / TECHNICAL ENQUIRY
          </span>

          <h2>
            Have a requirement
            <br />
            for a specific industry?
          </h2>

          <p>
            Share the technical requirement and the
            appropriate Orient Blue products, solutions, and
            services can be reviewed.
          </p>

          <Link
            href="/#enquiry"
            className="ob-industries-cta-button"
          >
            Request Information
            <MoveUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
