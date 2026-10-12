"use client";

import EnquiryCTA from "./EnquiryCTA";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  MoveUpRight,
} from "lucide-react";

import type { Service } from "@/data/services";

type ServiceDetailPageProps = {
  service: Service;
  relatedServices: Service[];
};

export default function ServiceDetailPage({
  service,
  relatedServices,
}: ServiceDetailPageProps) {
  return (
    <main className="ob-service-detail">
      <section className="ob-service-hero">
        <div className="ob-service-hero-grid" />

        <div className="ob-container ob-service-hero-inner">
          <motion.div
            className="ob-service-hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link href="/services" className="ob-service-back">
              Services
              <ArrowRight size={15} />
            </Link>

            <span className="ob-service-number">
              {service.number} / TECHNICAL SERVICE
            </span>

            <h1>{service.name}</h1>

            <p>{service.heroDescription}</p>

            <Link href="#service-enquiry" className="ob-service-hero-cta">
              Discuss a requirement
              <MoveUpRight size={17} />
            </Link>
          </motion.div>

          <motion.div
            className="ob-service-hero-visual"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <Image
              src={service.image}
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
            />

            <div className="ob-service-image-overlay" />

            <span className="ob-service-image-label">
              ORIENT BLUE / TECHNICAL SERVICES
            </span>
          </motion.div>
        </div>

        <a href="#service-overview" className="ob-service-scroll">
          <span>Explore service</span>
          <ArrowDown size={16} />
        </a>
      </section>

      <section
        id="service-overview"
        className="ob-service-overview ob-section"
      >
        <div className="ob-container ob-service-overview-grid">
          <div>
            <span className="ob-section-eyebrow">
              01 / SERVICE OVERVIEW
            </span>
            <h2>
              Technical support
              <br />
              with context.
            </h2>
          </div>

          <div className="ob-service-overview-copy">
            <p>{service.description}</p>

            {service.clientDataRequired && (
              <span className="ob-service-data-note">
                DEMO SERVICE CONTENT / CLIENT DATA REQUIRED
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="ob-service-capabilities ob-section">
        <div className="ob-container">
          <div className="ob-service-section-heading">
            <div>
              <span className="ob-section-eyebrow">
                02 / CAPABILITIES
              </span>
              <h2>What the service covers.</h2>
            </div>

            <span className="ob-service-index">CAPABILITIES</span>
          </div>

          <div className="ob-service-capability-grid">
            {service.capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                className="ob-service-capability"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <span>0{index + 1}</span>
                <Check size={18} />
                <h3>{capability}</h3>
                <i />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="ob-service-process ob-section">
        <div className="ob-container">
          <div className="ob-service-section-heading ob-service-heading-light">
            <div>
              <span className="ob-section-eyebrow">
                03 / PROCESS
              </span>
              <h2>From requirement to action.</h2>
            </div>
          </div>

          <div className="ob-service-process-line">
            {service.process.map((step, index) => (
              <motion.div
                key={step}
                className="ob-service-process-step"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
              >
                <span>0{index + 1}</span>
                <div className="ob-service-process-dot" />
                <h3>{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="ob-service-applications ob-section">
        <div className="ob-container ob-service-applications-grid">
          <div>
            <span className="ob-section-eyebrow">
              04 / APPLICATIONS
            </span>
            <h2>
              Where technical
              <br />
              expertise connects.
            </h2>
          </div>

          <div className="ob-service-application-list">
            {service.applications.map((application, index) => (
              <div key={application} className="ob-service-application">
                <span>0{index + 1}</span>
                <strong>{application}</strong>
                <ArrowRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ob-service-industries ob-section">
        <div className="ob-container">
          <span className="ob-section-eyebrow">
            05 / INDUSTRIES
          </span>

          <div className="ob-service-industry-list">
            {service.industries.map((industry, index) => (
              <div key={industry} className="ob-service-industry">
                <span>0{index + 1}</span>
                <h3>{industry}</h3>
                <ArrowRight size={18} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="service-enquiry" className="ob-service-enquiry">
        <div className="ob-service-enquiry-grid" />

        <div className="ob-container ob-service-enquiry-inner">
          <span className="ob-section-eyebrow">
            06 / TECHNICAL ENQUIRY
          </span>

          <h2>
            Have a technical
            <br />
            requirement?
          </h2>

          <p>
            Share your requirement and the relevant technical
            information can be discussed with the appropriate
            team.
          </p>

          <Link href="/#enquiry" className="ob-service-main-cta">
            Request Information
            <MoveUpRight size={18} />
          </Link>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="ob-related-services ob-section">
          <div className="ob-container">
            <div className="ob-service-section-heading">
              <div>
                <span className="ob-section-eyebrow">
                  RELATED SERVICES
                </span>
                <h2>Continue exploring.</h2>
              </div>
            </div>

            <div className="ob-related-service-grid">
              {relatedServices.map((related) => (
                <Link
                  key={related.id}
                  href={`/services/${related.slug}`}
                  className="ob-related-service-card"
                >
                  <span>{related.number}</span>
                  <h3>{related.name}</h3>
                  <p>{related.shortName}</p>
                  <ArrowRight size={18} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    
      <EnquiryCTA
        type="service"
        name={service.name}
      />
</main>
  );
}
