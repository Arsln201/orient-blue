"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  MoveUpRight,
} from "lucide-react";

import type { Industry } from "@/data/industries";
import type { Product } from "@/data/products";
import type { Service } from "@/data/services";

type IndustryDetailPageProps = {
  industry: Industry;
  products: Product[];
  services: Service[];
};

export default function IndustryDetailPage({
  industry,
  products,
  services,
}: IndustryDetailPageProps) {
  return (
    <main className="ob-industry-detail">
      <section className="ob-industry-hero">
        <div className="ob-industry-hero-grid" />

        <div className="ob-container ob-industry-hero-inner">
          <motion.div
            className="ob-industry-hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              href="/industries"
              className="ob-industry-back"
            >
              Industries
              <ArrowRight size={15} />
            </Link>

            <span className="ob-industry-number">
              {industry.number} / INDUSTRY
            </span>

            <h1>{industry.name}</h1>

            <p>{industry.heroDescription}</p>

            <Link
              href="#industry-enquiry"
              className="ob-industry-hero-cta"
            >
              Discuss a requirement
              <MoveUpRight size={17} />
            </Link>
          </motion.div>

          {industry.image ? (
            <motion.div
              className="ob-industry-hero-visual"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <Image
                src={industry.image}
                alt=""
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
              />

              <div className="ob-industry-image-overlay" />

              <span className="ob-industry-image-label">
                ORIENT BLUE / INDUSTRY
              </span>
            </motion.div>
          ) : (
            <div className="ob-industry-hero-placeholder">
              <span>CLIENT INDUSTRY VISUAL</span>
              <strong>IMAGE REQUIRED</strong>
            </div>
          )}
        </div>

        <a
          href="#industry-overview"
          className="ob-industry-scroll"
        >
          <span>Explore industry</span>
          <ArrowDown size={16} />
        </a>
      </section>

      <section
        id="industry-overview"
        className="ob-industry-overview ob-section"
      >
        <div className="ob-container ob-industry-overview-grid">
          <div>
            <span className="ob-section-eyebrow">
              01 / INDUSTRY CONTEXT
            </span>

            <h2>
              Technical context
              <br />
              comes first.
            </h2>
          </div>

          <div className="ob-industry-overview-copy">
            <p>{industry.description}</p>

            {industry.clientDataRequired && (
              <span className="ob-industry-data-note">
                CLIENT INDUSTRY DATA REQUIRED
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="ob-industry-challenges ob-section">
        <div className="ob-container">
          <div className="ob-industry-section-heading">
            <div>
              <span className="ob-section-eyebrow">
                02 / INDUSTRY CHALLENGES
              </span>

              <h2>
                The requirements
                <br />
                behind the system.
              </h2>
            </div>
          </div>

          {industry.challenges.length > 0 ? (
            <div className="ob-industry-challenge-list">
              {industry.challenges.map((challenge, index) => (
                <motion.div
                  key={challenge}
                  className="ob-industry-challenge"
                  whileHover={{ x: 6 }}
                >
                  <span>0{index + 1}</span>
                  <h3>{challenge}</h3>
                  <ArrowRight size={18} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="ob-industry-data-placeholder">
              <span>CLIENT DATA REQUIRED</span>
              <p>
                Verified industry challenges will be added
                here once Orient Blue provides the approved
                industry information.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="ob-industry-capabilities ob-section">
        <div className="ob-container">
          <div className="ob-industry-section-heading">
            <div>
              <span className="ob-section-eyebrow">
                03 / ORIENT BLUE CAPABILITIES
              </span>

              <h2>
                Technical capabilities
                <br />
                in context.
              </h2>
            </div>
          </div>

          {industry.capabilities.length > 0 ? (
            <div className="ob-industry-capability-grid">
              {industry.capabilities.map(
                (capability, index) => (
                  <div
                    key={capability}
                    className="ob-industry-capability"
                  >
                    <span>0{index + 1}</span>
                    <h3>{capability}</h3>
                    <i />
                  </div>
                ),
              )}
            </div>
          ) : (
            <div className="ob-industry-data-placeholder">
              <span>CLIENT DATA REQUIRED</span>
              <p>
                Verified Orient Blue capabilities for this
                industry will be connected here.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="ob-industry-products ob-section">
        <div className="ob-container">
          <div className="ob-industry-section-heading">
            <div>
              <span className="ob-section-eyebrow">
                04 / RELEVANT PRODUCTS
              </span>

              <h2>
                Products connected
                <br />
                to the requirement.
              </h2>
            </div>
          </div>

          {products.length > 0 ? (
            <div className="ob-industry-product-grid">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="ob-industry-product"
                >
                  <div className="ob-industry-product-image">
                    <Image
                      src={product.images[0]}
                      alt=""
                      fill
                      sizes="(max-width: 700px) 100vw, 33vw"
                    />
                  </div>

                  <div className="ob-industry-product-content">
                    <span>{product.category}</span>
                    <h3>{product.name}</h3>
                    <p>{product.shortDescription}</p>

                    <div>
                      Explore product
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="ob-industry-data-placeholder">
              <span>PRODUCT RELATIONSHIPS REQUIRED</span>
              <p>
                Relevant products will be connected to this
                industry from the central product catalogue.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="ob-industry-solutions ob-section">
        <div className="ob-container">
          <span className="ob-section-eyebrow">
            05 / SOLUTIONS
          </span>

          <h2>
            From products
            <br />
            to systems.
          </h2>

          <div className="ob-industry-solution-list">
            {industry.solutionSlugs.length > 0 ? (
              industry.solutionSlugs.map((slug, index) => (
                <Link
                  key={slug}
                  href={`/solutions#${slug}`}
                  className="ob-industry-solution"
                >
                  <span>0{index + 1}</span>
                  <strong>{slug.replaceAll("-", " ")}</strong>
                  <ArrowRight size={18} />
                </Link>
              ))
            ) : (
              <div className="ob-industry-data-placeholder">
                <span>SOLUTION RELATIONSHIPS REQUIRED</span>
                <p>
                  Relevant solutions will be connected
                  from the central solutions architecture.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="ob-industry-services ob-section">
        <div className="ob-container">
          <div className="ob-industry-section-heading">
            <div>
              <span className="ob-section-eyebrow">
                06 / SERVICES
              </span>

              <h2>
                Technical support
                <br />
                around the system.
              </h2>
            </div>
          </div>

          {services.length > 0 ? (
            <div className="ob-industry-service-grid">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="ob-industry-service"
                >
                  <span>{service.number}</span>

                  <div>
                    <h3>{service.name}</h3>
                    <p>{service.shortName}</p>
                  </div>

                  <ArrowRight size={18} />
                </Link>
              ))}
            </div>
          ) : (
            <div className="ob-industry-data-placeholder">
              <span>SERVICE RELATIONSHIPS REQUIRED</span>
              <p>
                Relevant services will be connected from
                the central services architecture.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="ob-industry-applications ob-section">
        <div className="ob-container ob-industry-applications-grid">
          <div>
            <span className="ob-section-eyebrow">
              07 / APPLICATIONS
            </span>

            <h2>
              Where the
              <br />
              technology operates.
            </h2>
          </div>

          {industry.applications.length > 0 ? (
            <div className="ob-industry-application-list">
              {industry.applications.map(
                (application, index) => (
                  <div
                    key={application}
                    className="ob-industry-application"
                  >
                    <span>0{index + 1}</span>
                    <strong>{application}</strong>
                    <ArrowRight size={17} />
                  </div>
                ),
              )}
            </div>
          ) : (
            <div className="ob-industry-data-placeholder">
              <span>CLIENT APPLICATION DATA REQUIRED</span>
              <p>
                Verified applications will be added once
                Orient Blue confirms the industry scope.
              </p>
            </div>
          )}
        </div>
      </section>

      <section
        id="industry-enquiry"
        className="ob-industry-enquiry"
      >
        <div className="ob-industry-enquiry-grid" />

        <div className="ob-container ob-industry-enquiry-inner">
          <span className="ob-section-eyebrow">
            08 / TECHNICAL ENQUIRY
          </span>

          <h2>
            Have an industry
            <br />
            requirement?
          </h2>

          <p>
            Share your requirement and the relevant
            products, solutions, services, and applications
            can be discussed.
          </p>

          <Link
            href="/#enquiry"
            className="ob-industry-main-cta"
          >
            Request Information
            <MoveUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
