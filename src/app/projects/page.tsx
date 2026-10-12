"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  MapPin,
} from "lucide-react";

import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="ob-projects-page">
      {/* HERO */}
      <section className="ob-projects-hero">
        <div className="ob-projects-hero-grid" />

        <div className="ob-container">
          <div className="ob-projects-hero-content">
            <motion.span
              className="ob-projects-eyebrow"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              ORIENT BLUE / PROJECTS
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
              }}
            >
              Projects that
              <br />
              define our work.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.16,
              }}
            >
              A curated space for Orient Blue project
              case studies, technical documentation and
              approved project outcomes.
            </motion.p>
          </div>

          <motion.div
            className="ob-projects-hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
          >
            <span>PROJECT ARCHIVE</span>
            <strong>
              {String(projects.length).padStart(2, "0")}
            </strong>
          </motion.div>
        </div>
      </section>

      {/* PROJECT ARCHIVE */}
      <section className="ob-projects-archive">
        <div className="ob-container">
          <div className="ob-projects-intro">
            <div>
              <span className="ob-projects-section-label">
                SELECTED WORK
              </span>
            </div>

            <p>
              Each project profile is structured to present
              the context, challenge, approach, technical
              solution and documented outcome.
            </p>
          </div>

          <div className="ob-projects-list">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                className="ob-project-card"
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="ob-project-card-link"
                >
                  <div className="ob-project-card-number">
                    {project.number}
                  </div>

                  <div className="ob-project-card-image-wrap">
                    <div className="ob-project-card-image">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 58vw"
                      />

                      <div className="ob-project-card-image-grid" />

                      <span className="ob-project-card-image-label">
                        PROJECT / {project.number}
                      </span>
                    </div>
                  </div>

                  <div className="ob-project-card-content">
                    <div className="ob-project-card-meta">
                      <span>{project.industry}</span>

                      {project.location && (
                        <span className="ob-project-location">
                          <MapPin size={14} />
                          {project.location}
                        </span>
                      )}
                    </div>

                    <h2>{project.title}</h2>

                    <p>{project.shortDescription}</p>

                    <span className="ob-project-view">
                      View Project
                      <ArrowRight size={17} />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ob-projects-cta">
        <div className="ob-container">
          <div className="ob-projects-cta-grid" />

          <div className="ob-projects-cta-content">
            <span>ORIENT BLUE</span>

            <h2>
              Your next project
              <br />
              could be here.
            </h2>

            <Link
              href="/#enquiry"
              className="ob-projects-cta-button"
            >
              Discuss a project
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}