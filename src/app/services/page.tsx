"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  MoveUpRight,
} from "lucide-react";

import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main className="ob-services-page">
      <section className="ob-services-hero">
        <div className="ob-services-hero-grid" />

        <div className="ob-container ob-services-hero-inner">
          <motion.div
            className="ob-services-hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="ob-section-eyebrow">
              ORIENT BLUE / TECHNICAL SERVICES
            </span>

            <h1>
              Technical expertise
              <br />
              in action.
            </h1>

            <p>
              Technical services designed around equipment,
              systems, operational requirements, and the
              environments in which they operate.
            </p>
          </motion.div>

          <div className="ob-services-hero-meta">
            <span>06</span>
            <p>Technical service areas</p>
          </div>
        </div>
      </section>

      <section className="ob-services-intro ob-section">
        <div className="ob-container ob-services-intro-grid">
          <span className="ob-section-eyebrow">
            01 / SERVICE APPROACH
          </span>

          <div>
            <h2>
              More than a service.
              <br />
              A technical workflow.
            </h2>

            <p>
              From understanding a requirement to assessing
              equipment, defining technical actions, and
              supporting implementation, each service is
              structured around the technical context.
            </p>
          </div>
        </div>
      </section>

      <section className="ob-services-list ob-section">
        <div className="ob-container">
          <div className="ob-service-list-header">
            <span className="ob-section-eyebrow">
              02 / SERVICES
            </span>
            <span>EXPLORE TECHNICAL CAPABILITIES</span>
          </div>

          <div className="ob-service-list">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="ob-service-card"
              >
                <div className="ob-service-card-number">
                  {service.number}
                </div>

                <div className="ob-service-card-image">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 34vw"
                  />
                  <div className="ob-service-card-image-overlay" />
                </div>

                <div className="ob-service-card-content">
                  <span>TECHNICAL SERVICE</span>

                  <h2>{service.name}</h2>

                  <p>{service.heroDescription}</p>

                  <div className="ob-service-card-bottom">
                    <span>Explore service</span>
                    <ArrowRight size={18} />
                  </div>
                </div>

                <div className="ob-service-card-line" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ob-services-cta">
        <div className="ob-services-cta-grid" />

        <div className="ob-container ob-services-cta-inner">
          <span className="ob-section-eyebrow">
            03 / TECHNICAL ENQUIRY
          </span>

          <h2>
            Tell us what
            <br />
            you&apos;re solving.
          </h2>

          <p>
            Share the requirement, application, equipment,
            or technical challenge. The appropriate service
            pathway can then be identified.
          </p>

          <Link href="/#enquiry" className="ob-services-cta-button">
            Request Information
            <MoveUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
