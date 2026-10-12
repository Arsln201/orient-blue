"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Factory,
  Layers3,
  Settings2,
} from "lucide-react";

import { products } from "@/data/products";
import { solutions } from "@/data/solutions";

export default function SolutionsPage() {
  return (
    <main className="ob-solutions-page">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="ob-solutions-hero">
        <div className="ob-solutions-hero-grid" />
        <div className="ob-solutions-hero-glow" />

        <div className="ob-solutions-container">
          <div className="ob-solutions-hero-content">
            <span className="ob-solutions-eyebrow ob-solutions-eyebrow-light">
              Orient Blue / Solutions
            </span>

            <h1>
              From technical
              <br />
              <span>requirements to systems.</span>
            </h1>

            <p>
              Solutions connect products, services, technical expertise
              and industry applications around the requirements of a
              technical environment.
            </p>

            <div className="ob-solutions-hero-meta">
              <span>Products</span>
              <span>Technical Expertise</span>
              <span>Services</span>
              <span>Industries</span>
            </div>
          </div>

          <a
            href="#solution-stories"
            className="ob-solutions-scroll"
          >
            <span>Explore solutions</span>
            <ArrowDown size={16} />
          </a>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <section className="ob-solutions-intro">
        <div className="ob-solutions-container">
          <div className="ob-solutions-intro-grid">
            <div>
              <span className="ob-solutions-eyebrow">
                The Orient Blue approach
              </span>

              <h2>
                Technology becomes
                <br />
                <span>more useful in context.</span>
              </h2>
            </div>

            <div>
              <p className="ob-solutions-large-copy">
                A solution is not simply a product. It is the
                relationship between the technical requirement,
                the technology selected, the expertise around it
                and the environment where it will be applied.
              </p>

              <p className="ob-solutions-muted-copy">
                Discover how Orient Blue brings together technical products, 
                engineering expertise, and industry-focused services
                to address practical operational requirements across diverse 
                industrial environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTION STORIES
      ====================================================== */}

      <section
        id="solution-stories"
        className="ob-solutions-stories"
      >
        {solutions.map((solution, index) => (
          <SolutionStory
            key={solution.id}
            solution={solution}
            index={index}
          />
        ))}
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="ob-solutions-final">
        <div className="ob-solutions-final-grid" />

        <div className="ob-solutions-container">
          <div className="ob-solutions-final-content">
            <span className="ob-solutions-eyebrow ob-solutions-eyebrow-light">
              Start a technical conversation
            </span>

            <h2>
              Have a technical
              <br />
              <span>requirement?</span>
            </h2>

            <p>
              Share the application, operating environment or
              technical requirement. The next step is to connect
              the requirement with the appropriate products,
              services and technical information.
            </p>

            <div className="ob-solutions-final-actions">
              <Link
                href="#enquiry"
                className="ob-solutions-primary-button"
              >
                Request Information
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/products"
                className="ob-solutions-light-button"
              >
                Explore Products
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SolutionStory({
  solution,
  index,
}: {
  solution: (typeof solutions)[number];
  index: number;
}) {
  const involvedProducts = solution.productSlugs
    .map((slug) =>
      products.find((product) => product.slug === slug),
    )
    .filter(
      (product): product is NonNullable<typeof product> =>
        Boolean(product),
    );

  const isReverse = index % 2 === 1;

  return (
    <article
      id={solution.slug}
      className="ob-solution-story"
    >
      {/* STORY HERO */}

      <div className="ob-solutions-container">
        <div
          className={`ob-solution-story-hero ${
            isReverse
              ? "ob-solution-story-hero-reverse"
              : ""
          }`}
        >
          <motion.div
            className="ob-solution-story-visual"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={solution.image}
              alt={solution.title}
              fill
              sizes="(max-width: 800px) 100vw, 55vw"
            />

            <div className="ob-solution-story-image-grid" />

            <div className="ob-solution-story-image-index">
              {solution.number}
            </div>

            <div className="ob-solution-story-image-label">
              Technical Solution Overview
            </div>
          </motion.div>

          <div className="ob-solution-story-heading">
            <span className="ob-solutions-eyebrow">
              Solution / {solution.number}
            </span>

            <h2>{solution.title}</h2>

            <p>{solution.heroDescription}</p>

            <div className="ob-solution-story-connection">
              <span>
                Products
              </span>
              <span />
              <span>
                Expertise
              </span>
              <span />
              <span>
                Services
              </span>
              <span />
              <span>
                Applications
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CHALLENGE */}

      <div className="ob-solution-story-light">
        <div className="ob-solutions-container">
          <StoryBlock
            number="01"
            eyebrow="The Challenge"
            title="Understand the requirement before the technology."
            text={solution.challenge}
            icon={<Factory size={22} strokeWidth={1.5} />}
          />
        </div>
      </div>

      {/* APPROACH */}

      <div className="ob-solution-story-ice">
        <div className="ob-solutions-container">
          <StoryBlock
            number="02"
            eyebrow="The Approach"
            title="Connect the technical requirement to the right system context."
            text={solution.approach}
            icon={<Layers3 size={22} strokeWidth={1.5} />}
          />

          <div className="ob-solution-detail-grid">
            <DetailList
              title="Technical expertise"
              items={solution.technicalExpertise}
            />

            <DetailList
              title="Services"
              items={solution.services}
            />
          </div>
        </div>
      </div>

      {/* TECHNICAL SOLUTION */}

      <div className="ob-solution-story-dark">
        <div className="ob-solutions-container">
          <div className="ob-solution-dark-header">
            <div>
              <span className="ob-solutions-eyebrow ob-solutions-eyebrow-light">
                03 / The Solution
              </span>

              <h3>
                Technical architecture
                <br />
                <span>in context.</span>
              </h3>
            </div>

            <Settings2
              size={34}
              strokeWidth={1.2}
            />
          </div>

          <p className="ob-solution-dark-copy">
            {solution.technicalSolution}
          </p>

          <div className="ob-solution-system-line">
            <div>
              <span>01</span>
              <strong>Requirement</strong>
            </div>

            <ArrowRight size={18} />

            <div>
              <span>02</span>
              <strong>Technology</strong>
            </div>

            <ArrowRight size={18} />

            <div>
              <span>03</span>
              <strong>Technical support</strong>
            </div>

            <ArrowRight size={18} />

            <div>
              <span>04</span>
              <strong>Application</strong>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTS */}

      <div className="ob-solution-story-light">
        <div className="ob-solutions-container">
          <div className="ob-solution-products-header">
            <div>
              <span className="ob-solutions-eyebrow">
                04 / Products involved
              </span>

              <h3>
                Technology selected
                <br />
                <span>for the application.</span>
              </h3>
            </div>

            <p>
              Explore the products associated with each solution, selected
              to support its technical requirements and intended applications.
            </p>
          </div>

          <div className="ob-solution-products">
            {involvedProducts.map((product, productIndex) => (
              <Link
                href={`/products/${product.slug}`}
                key={product.id}
                className="ob-solution-product"
              >
                <div className="ob-solution-product-image">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />

                  <span>
                    {String(productIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="ob-solution-product-content">
                  <small>
                    {product.category.replaceAll("-", " ")}
                  </small>

                  <h4>{product.name}</h4>

                  <p>{product.shortDescription}</p>

                  <span className="ob-solution-product-link">
                    View Product
                    <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* APPLICATIONS */}

      <div className="ob-solution-story-application">
        <div className="ob-solutions-container">
          <div className="ob-solution-application-grid">
            <div>
              <span className="ob-solutions-eyebrow">
                05 / Applications
              </span>

              <h3>
                Where the
                <br />
                <span>solution connects.</span>
              </h3>

              <p>
  Explore practical applications of Orient Blue&apos;s products and
  technical solutions across a range of industrial environments.
             </p>
            </div>

            <div className="ob-solution-application-list">
              {solution.applications.map(
                (application, applicationIndex) => (
                  <div
                    key={application}
                    className="ob-solution-application-row"
                  >
                    <span>
                      {String(applicationIndex + 1).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <strong>{application}</strong>

                    <Check
                      size={17}
                      strokeWidth={1.7}
                    />
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="ob-solution-industries">
            <span>Relevant industries</span>

            <div>
              {solution.industries.map((industry) => (
                <span key={industry}>{industry}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RESULT */}

      <div className="ob-solution-result">
        <div className="ob-solutions-container">
          <div className="ob-solution-result-grid">
            <span className="ob-solutions-eyebrow">
              06 / The Result
            </span>

            <div>
              <h3>
                Evidence before
                <br />
                <span>claims.</span>
              </h3>

              <p>{solution.result}</p>

              <div className="ob-solution-result-status">
                <span />
                Client data required
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STORY CTA */}

      <div className="ob-solution-story-cta">
        <div className="ob-solutions-container">
          <div className="ob-solution-story-cta-inner">
            <div>
              <span className="ob-solutions-eyebrow">
                Continue the conversation
              </span>

              <h3>
                Discuss this
                <br />
                <span>requirement.</span>
              </h3>
            </div>

            <Link
              href="#enquiry"
              className="ob-solutions-primary-button"
            >
              Request Information
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function StoryBlock({
  number,
  eyebrow,
  title,
  text,
  icon,
}: {
  number: string;
  eyebrow: string;
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="ob-solution-story-block">
      <div className="ob-solution-story-block-marker">
        <span>{number}</span>
        {icon}
      </div>

      <div>
        <span className="ob-solutions-eyebrow">
          {eyebrow}
        </span>

        <h3>{title}</h3>

        <p>{text}</p>
      </div>
    </div>
  );
}

function DetailList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="ob-solution-detail-list">
      <span>{title}</span>

      <div>
        {items.map((item) => (
          <div key={item}>
            <Check size={15} />
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
