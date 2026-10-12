"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Compass,
  Crosshair,
  Eye,
  ShieldCheck,
} from "lucide-react";

import { companyStory } from "@/data/company";

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function SectionLabel({
  number,
  children,
  light = false,
}: {
  number?: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`ob-company-section-label ${
        light ? "ob-company-section-label-light" : ""
      }`}
    >
      {number && <span>{number}</span>}
      <span>{children}</span>
    </div>
  );
}

function StoryImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`ob-company-image-wrap ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 60vw"
        className="ob-company-image"
      />

      <div className="ob-company-image-overlay" />

      <span className="ob-company-image-corner ob-company-image-corner-tl" />
      <span className="ob-company-image-corner ob-company-image-corner-br" />
    </div>
  );
}

export default function CompanyStoryPage() {
  const {
    heroTitle,
    heroDescription,
    heroImage,
    about,
    story,
    mission,
    vision,
    values,
    capabilities,
    quality,
    timeline,
  } = companyStory;

  return (
    <main className="ob-company-page">
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="ob-company-hero">
        <div className="ob-company-hero-grid" />

        <div className="ob-company-hero-orbit ob-company-hero-orbit-one" />
        <div className="ob-company-hero-orbit ob-company-hero-orbit-two" />

        <div className="ob-container ob-company-hero-inner">
          <motion.div
            className="ob-company-hero-copy"
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            <SectionLabel light>ABOUT ORIENT BLUE</SectionLabel>

            <h1>{heroTitle}</h1>

            <p>{heroDescription}</p>

            <div className="ob-company-hero-meta">
              <span>ORIENT BLUE FZ-L.L.C.</span>
              <span>TECHNICAL · INDUSTRIAL · INTERNATIONAL</span>
            </div>
          </motion.div>

          <motion.div
  className="ob-company-hero-visual"
  initial={{
    opacity: 0,
    scale: 0.96,
  }}
  animate={{
    opacity: 1,
    scale: 1,
  }}
  transition={{
    duration: 1,
    delay: 0.15,
  }}
>
  <div className="ob-company-hero-image-wrap">
    <Image
      src={heroImage}
      alt="Industrial engineering environment"
      fill
      priority
      sizes="(max-width: 767px) 100vw, 50vw"
      className="ob-company-hero-image"
    />
  </div>

  <div className="ob-company-hero-image-label">
    <span>01</span>
    <span>ORIENT BLUE / COMPANY</span>
  </div>
</motion.div>
        </div>

        <div className="ob-company-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={16} />
        </div>
      </section>

      {/* =====================================================
          ABOUT
          ===================================================== */}

      <section className="ob-company-about ob-company-section-white">
        <div className="ob-container ob-company-about-grid">
          <motion.div
            className="ob-company-about-image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <StoryImage
              src={about.image}
              alt="Industrial technical equipment"
            />
          </motion.div>

          <motion.div
            className="ob-company-about-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <SectionLabel>01</SectionLabel>

            <span className="ob-company-eyebrow">{about.eyebrow}</span>

            <h2>{about.title}</h2>

            <p className="ob-company-lead">{about.description}</p>

            <p>{about.secondaryDescription}</p>

            <div className="ob-company-line-stat">
              <span>ORIENT BLUE</span>
              <span>TECHNICAL PARTNER</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          STORY
          ===================================================== */}

      <section className="ob-company-story">
        <div className="ob-company-story-background" />

        <div className="ob-container">
          <motion.div
            className="ob-company-story-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
          >
            <SectionLabel light>02</SectionLabel>

            <span className="ob-company-eyebrow ob-company-eyebrow-light">
              {story.eyebrow}
            </span>

            <h2>{story.title}</h2>
          </motion.div>

          <div className="ob-company-story-grid">
            <motion.div
              className="ob-company-story-image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <StoryImage
                src={story.image}
                alt="Industrial engineering and infrastructure"
              />
            </motion.div>

            <motion.div
              className="ob-company-story-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              {story.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <div className="ob-company-story-mark">
                <span>OB</span>
                <span>TECHNICAL CLARITY</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION / VISION
          ===================================================== */}

      <section className="ob-company-purpose">
        <div className="ob-container">
          <div className="ob-company-purpose-header">
            <SectionLabel>03</SectionLabel>
            <span className="ob-company-eyebrow">PURPOSE</span>

            <h2>
              Direction matters as much
              <br />
              as capability.
            </h2>
          </div>

          <div className="ob-company-purpose-grid">
            <motion.article
              className="ob-company-purpose-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={reveal}
            >
              <div className="ob-company-purpose-card-top">
                <Compass size={28} />
                <span>MISSION</span>
              </div>

              <h3>{mission.title}</h3>

              <p>{mission.description}</p>

              <div className="ob-company-purpose-image">
                <Image
                  src={mission.image}
                  alt="Industrial technical environment"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.article>

            <motion.article
              className="ob-company-purpose-card ob-company-purpose-card-blue"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={reveal}
            >
              <div className="ob-company-purpose-card-top">
                <Eye size={28} />
                <span>VISION</span>
              </div>

              <h3>{vision.title}</h3>

              <p>{vision.description}</p>

              <div className="ob-company-purpose-image">
                <Image
                  src={vision.image}
                  alt="Industrial infrastructure"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
          ===================================================== */}

      <section className="ob-company-values">
        <div className="ob-company-values-grid" />

        <div className="ob-container">
          <motion.div
            className="ob-company-values-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
          >
            <SectionLabel light>04</SectionLabel>

            <span className="ob-company-eyebrow ob-company-eyebrow-light">
              VALUES
            </span>

            <h2>
              Principles that shape
              <br />
              the way we work.
            </h2>
          </motion.div>

          <div className="ob-company-values-list">
            {values.map((value, index) => (
              <motion.article
                key={value.number}
                className="ob-company-value"
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                variants={reveal}
              >
                <span className="ob-company-value-number">
                  {value.number}
                </span>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
          ===================================================== */}

      <section className="ob-company-capabilities">
        <div className="ob-container">
          <motion.div
            className="ob-company-capabilities-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <SectionLabel>05</SectionLabel>

            <span className="ob-company-eyebrow">CAPABILITIES</span>

            <h2>
              Technical capability
              <br />
              with practical context.
            </h2>

            <p>
              A connected view of products, engineering requirements and
              technical support across industrial environments.
            </p>
          </motion.div>

          <div className="ob-company-capabilities-list">
            {capabilities.map((capability) => (
              <motion.article
                className="ob-company-capability"
                key={capability.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={reveal}
              >
                <div className="ob-company-capability-number">
                  {capability.number}
                </div>

                <div className="ob-company-capability-content">
                  <h3>{capability.title}</h3>

                  <p>{capability.description}</p>

                  <Link href="/products" className="ob-company-capability-link">
                    Explore capability
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="ob-company-capability-image">
                  <Image
                    src={capability.image}
                    alt={capability.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 34vw"
                  />

                  <div className="ob-company-capability-image-overlay" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TIMELINE
          ===================================================== */}

      {timeline.length > 0 && (
        <section className="ob-company-timeline">
          <div className="ob-container">
            <motion.div
              className="ob-company-timeline-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={reveal}
            >
              <SectionLabel>06</SectionLabel>

              <span className="ob-company-eyebrow">OUR JOURNEY</span>

              <h2>
                A history shaped
                <br />
                by progress.
              </h2>
            </motion.div>

            <div className="ob-company-timeline-track">
              {timeline.map((item, index) => (
                <motion.article
                  className="ob-company-timeline-item"
                  key={`${item.year}-${item.title}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  variants={reveal}
                >
                  <div className="ob-company-timeline-dot" />

                  <span className="ob-company-timeline-year">
                    {item.year}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          QUALITY
          ===================================================== */}

      <section className="ob-company-quality">
        <div className="ob-container ob-company-quality-grid">
          <motion.div
            className="ob-company-quality-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <SectionLabel>06</SectionLabel>

            <span className="ob-company-eyebrow">
              {quality.eyebrow}
            </span>

            <h2>{quality.title}</h2>

            <p className="ob-company-lead">{quality.description}</p>

            <div className="ob-company-quality-list">
              {quality.points.map((point) => (
                <div key={point}>
                  <Check size={17} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="ob-company-quality-visual"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <StoryImage
              src={quality.image}
              alt="Industrial quality inspection environment"
            />

            <div className="ob-company-quality-badge">
              <ShieldCheck size={24} />
              <span>QUALITY<br />FOCUSED</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="ob-company-final">
        <div className="ob-company-final-grid" />

        <div className="ob-container ob-company-final-inner">
          <Crosshair size={30} />

          <span>ORIENT BLUE FZ-L.L.C.</span>

          <h2>
            Let&apos;s build the
            <br />
            right technical response.
          </h2>

          <p>
            Discuss your product requirement, technical challenge or
            industrial application with Orient Blue.
          </p>

          <Link href="/contact" className="ob-company-final-button">
            Start a conversation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}