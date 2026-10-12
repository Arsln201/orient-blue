"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";

import type { Project } from "@/data/projects";

type ProjectDetailPageProps = {
  project: Project;
  relatedProjects: Project[];
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  number,
  eyebrow,
  title,
}: {
  number: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="ob-project-detail-heading">
      <div className="ob-project-detail-heading-meta">
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>

      <h2>{title}</h2>
    </div>
  );
}

function ProjectImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="ob-project-detail-image">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 75vw"
      />

      <div className="ob-project-detail-image-grid" />

      <span className="ob-project-detail-image-label">
        ORIENT BLUE / PROJECT ARCHIVE
      </span>
    </div>
  );
}

export default function ProjectDetailPage({
  project,
  relatedProjects,
}: ProjectDetailPageProps) {
  return (
    <main className="ob-project-detail-page">
      {/* HERO */}
      <section className="ob-project-detail-hero">
        <div className="ob-project-detail-hero-grid" />

        <div className="ob-container">
          <Link
            href="/projects"
            className="ob-project-back"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div className="ob-project-detail-hero-content">
            <Reveal>
              <div className="ob-project-detail-kicker">
                <span>{project.number}</span>
                <span>PROJECT CASE STUDY</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1>{project.title}</h1>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="ob-project-detail-meta">
                <div>
                  <span>INDUSTRY</span>
                  <strong>{project.industry}</strong>
                </div>

                {project.location && (
                  <div>
                    <span>LOCATION</span>
                    <strong>{project.location}</strong>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="ob-project-detail-lead">
                {project.shortDescription}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.26}>
            <div className="ob-project-detail-hero-visual">
              <ProjectImage
                src={project.image}
                alt={project.title}
                priority
              />
            </div>
          </Reveal>

          <div className="ob-project-scroll">
            <ArrowDown size={16} />
            <span>Explore project</span>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="ob-project-detail-section ob-project-overview">
        <div className="ob-container ob-project-detail-layout">
          <Reveal>
            <SectionHeading
              number="01"
              eyebrow="PROJECT OVERVIEW"
              title="Project context"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="ob-project-detail-copy">
              <p>{project.overview}</p>

              {project.clientMaterialRequired && (
                <div className="ob-project-placeholder-note">
                  <span>CLIENT MATERIAL</span>
                  <p>
                    Final project information, technical details and
                    approved imagery will be added here when supplied.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="ob-project-story-section">
        <div className="ob-container">
          <div className="ob-project-story-grid">
            <Reveal>
              <SectionHeading
                number="02"
                eyebrow="THE CHALLENGE"
                title="The requirement"
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="ob-project-story-panel">
                <span className="ob-project-story-index">
                  CHALLENGE
                </span>

                <p>{project.challenge}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="ob-project-detail-section ob-project-approach">
        <div className="ob-container ob-project-detail-layout">
          <Reveal>
            <SectionHeading
              number="03"
              eyebrow="THE APPROACH"
              title="Planning with purpose"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="ob-project-detail-copy">
              <p>{project.approach}</p>

              <div className="ob-project-process-line">
                <span>01</span>
                <span>REQUIREMENTS</span>

                <span>02</span>
                <span>ENGINEERING</span>

                <span>03</span>
                <span>EXECUTION</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="ob-project-solution-section">
        <div className="ob-container">
          <div className="ob-project-solution-header">
            <Reveal>
              <SectionHeading
                number="04"
                eyebrow="THE SOLUTION"
                title="Technical response"
              />
            </Reveal>

            <Reveal delay={0.08}>
              <span className="ob-project-solution-mark">
                OB
              </span>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="ob-project-solution-copy">
              <p>{project.solution}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="ob-project-detail-section">
        <div className="ob-container">
          <Reveal>
            <SectionHeading
              number="05"
              eyebrow="PRODUCTS"
              title="Products involved"
            />
          </Reveal>

          <Reveal delay={0.08}>
            {project.products.length > 0 ? (
              <div className="ob-project-resource-grid">
                {project.products.map((product) => (
                  <div
                    key={product}
                    className="ob-project-resource-card"
                  >
                    <span>
                      <Check size={15} />
                    </span>

                    <strong>{product}</strong>
                  </div>
                ))}
              </div>
            ) : (
              <div className="ob-project-empty-resource">
                <span>PRODUCT INFORMATION PENDING</span>
                <p>
                  Approved product information will be connected
                  to this project when supplied.
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="ob-project-detail-section ob-project-services">
        <div className="ob-container">
          <Reveal>
            <SectionHeading
              number="06"
              eyebrow="SERVICES"
              title="Technical services"
            />
          </Reveal>

          <Reveal delay={0.08}>
            {project.services.length > 0 ? (
              <div className="ob-project-resource-grid">
                {project.services.map((service) => (
                  <div
                    key={service}
                    className="ob-project-resource-card"
                  >
                    <span>
                      <Check size={15} />
                    </span>

                    <strong>{service}</strong>
                  </div>
                ))}
              </div>
            ) : (
              <div className="ob-project-empty-resource">
                <span>SERVICE INFORMATION PENDING</span>
                <p>
                  Approved service information will be connected
                  to this project when supplied.
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="ob-project-gallery-section">
        <div className="ob-container">
          <Reveal>
            <SectionHeading
              number="07"
              eyebrow="PROJECT GALLERY"
              title="Visual documentation"
            />
          </Reveal>

          <div className="ob-project-gallery">
            {project.gallery.map((image, index) => (
              <Reveal
                key={image}
                delay={index * 0.06}
                className={
                  index === 0
                    ? "ob-project-gallery-item ob-project-gallery-large"
                    : "ob-project-gallery-item"
                }
              >
                <div className="ob-project-gallery-image">
                  <Image
                    src={image}
                    alt={`${project.title} project image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <div className="ob-project-gallery-overlay">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="ob-project-outcome-section">
        <div className="ob-project-outcome-grid" />

        <div className="ob-container">
          <div className="ob-project-outcome-content">
            <Reveal>
              <SectionHeading
                number="08"
                eyebrow="PROJECT OUTCOME"
                title="Documented result"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <p>{project.outcome}</p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="ob-project-outcome-note">
                <span>VERIFICATION STATUS</span>
                <strong>CLIENT MATERIAL REQUIRED</strong>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className="ob-project-related-section">
          <div className="ob-container">
            <div className="ob-project-related-header">
              <Reveal>
                <SectionHeading
                  number="09"
                  eyebrow="PROJECT ARCHIVE"
                  title="More projects"
                />
              </Reveal>

              <Reveal delay={0.08}>
                <Link
                  href="/projects"
                  className="ob-project-text-link"
                >
                  View all projects
                  <ArrowRight size={17} />
                </Link>
              </Reveal>
            </div>

            <div className="ob-project-related-grid">
              {relatedProjects.map((relatedProject, index) => (
                <Reveal
                  key={relatedProject.id}
                  delay={index * 0.08}
                >
                  <Link
                    href={`/projects/${relatedProject.slug}`}
                    className="ob-project-related-card"
                  >
                    <div className="ob-project-related-image">
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    <div className="ob-project-related-info">
                      <span>{relatedProject.number}</span>

                      <h3>{relatedProject.title}</h3>

                      <ArrowRight size={18} />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="ob-project-final-cta">
        <div className="ob-container">
          <Reveal>
            <span className="ob-project-final-eyebrow">
              ORIENT BLUE
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2>
              Have a project
              <br />
              to discuss?
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <Link
              href="/#enquiry"
              className="ob-project-final-button"
            >
              Start a conversation
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}