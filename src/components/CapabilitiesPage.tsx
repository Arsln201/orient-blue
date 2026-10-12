"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Compass,
  Crosshair,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { capabilities } from "@/data/capabilities";

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
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

function TechnicalDiagram() {
  return (
    <div className="ob-capabilities-diagram" aria-hidden="true">
      <div className="ob-capabilities-diagram-grid" />

      <div className="ob-capabilities-node ob-capabilities-node-a">
        <span>01</span>
        <b>INPUT</b>
      </div>

      <div className="ob-capabilities-node ob-capabilities-node-b">
        <span>02</span>
        <b>ANALYZE</b>
      </div>

      <div className="ob-capabilities-node ob-capabilities-node-c">
        <span>03</span>
        <b>ALIGN</b>
      </div>

      <div className="ob-capabilities-node ob-capabilities-node-d">
        <span>04</span>
        <b>SUPPORT</b>
      </div>

      <div className="ob-capabilities-line ob-capabilities-line-a" />
      <div className="ob-capabilities-line ob-capabilities-line-b" />
      <div className="ob-capabilities-line ob-capabilities-line-c" />

      <div className="ob-capabilities-core">
        <span>OB</span>
        <small>TECHNICAL SYSTEM</small>
      </div>
    </div>
  );
}

export default function CapabilitiesPage() {
  return (
    <main className="ob-capabilities-page">
      <section className="ob-capabilities-hero">
        <div className="ob-capabilities-hero-grid" />

        <div className="ob-container ob-capabilities-hero-inner">
          <motion.div
            className="ob-capabilities-hero-copy"
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            <span className="ob-capabilities-eyebrow">
              {capabilities.hero.eyebrow}
            </span>

            <h1>{capabilities.hero.title}</h1>

            <p>{capabilities.hero.description}</p>

            <div className="ob-capabilities-hero-meta">
              <span>ORIENT BLUE FZ-L.L.C.</span>
              <span>TECHNICAL · INDUSTRIAL · INTERNATIONAL</span>
            </div>
          </motion.div>

          <motion.div
            className="ob-capabilities-hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <TechnicalDiagram />
          </motion.div>
        </div>

        <div className="ob-capabilities-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={16} />
        </div>
      </section>

      <section className="ob-capabilities-engineering ob-section">
        <div className="ob-container">
          <motion.div
            className="ob-capabilities-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <div>
              <span className="ob-capabilities-eyebrow">01 / ENGINEERING</span>
              <h2>Engineering capabilities.</h2>
            </div>

            <p>
              A structured technical capability framework spanning industrial
              systems, equipment and application requirements.
            </p>
          </motion.div>

          <div className="ob-capabilities-grid">
            {capabilities.engineering.map((item, index) => (
              <motion.article
                key={item.number}
                className="ob-capability-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={reveal}
                transition={{ delay: index * 0.06 }}
              >
                <div className="ob-capability-card-top">
                  <span>{item.number}</span>
                  <ArrowRight size={18} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="ob-capability-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="ob-capabilities-expertise">
        <div className="ob-container ob-capabilities-expertise-grid">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={reveal}
          >
            <span className="ob-capabilities-eyebrow">02 / EXPERTISE</span>
            <h2>Technical expertise that connects the requirement to the response.</h2>
          </motion.div>

          <motion.div
            className="ob-capabilities-expertise-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
          >
            {capabilities.expertise.map((item, index) => (
              <div className="ob-capabilities-expertise-item" key={item}>
                <span>0{index + 1}</span>
                <p>{item}</p>
                <Check size={17} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="ob-capabilities-quality ob-section">
        <div className="ob-container">
          <motion.div
            className="ob-capabilities-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <div>
              <span className="ob-capabilities-eyebrow">03 / QUALITY</span>
              <h2>A disciplined technical approach.</h2>
            </div>

            <p>
              Quality is treated as a structured part of technical evaluation,
              documentation and application alignment.
            </p>
          </motion.div>

          <div className="ob-capabilities-quality-grid">
            {capabilities.quality.map((item, index) => (
              <motion.article
                className="ob-quality-card"
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                transition={{ delay: index * 0.08 }}
              >
                <div className="ob-quality-icon">
                  {index === 0 && <Crosshair size={20} />}
                  {index === 1 && <Compass size={20} />}
                  {index === 2 && <Layers3 size={20} />}
                  {index === 3 && <ShieldCheck size={20} />}
                </div>

                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="ob-capabilities-process">
        <div className="ob-container">
          <motion.div
            className="ob-capabilities-process-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <span className="ob-capabilities-eyebrow">04 / PROCESS</span>
            <h2>From requirement to technical response.</h2>
          </motion.div>

          <div className="ob-capabilities-process-track">
            <div className="ob-capabilities-process-line" />

            {capabilities.process.map((step, index) => (
              <motion.div
                className="ob-process-step"
                key={step.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                transition={{ delay: index * 0.08 }}
              >
                <div className="ob-process-node">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="ob-capabilities-standards ob-section">
        <div className="ob-container ob-capabilities-standards-grid">
          <div>
            <span className="ob-capabilities-eyebrow">05 / STANDARDS</span>
            <h2>Standards and certifications.</h2>
          </div>

          <div className="ob-capabilities-standards-panel">
            <ShieldCheck size={28} />
            <strong>Client information required</strong>
            <p>
              Standards, certifications and certification numbers will only be
              published after approved Orient Blue documentation is supplied.
            </p>
          </div>
        </div>
      </section>

      <section className="ob-capabilities-strengths">
        <div className="ob-container">
          <motion.div
            className="ob-capabilities-strengths-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            <span className="ob-capabilities-eyebrow">06 / STRENGTHS</span>
            <h2>Technical strengths.</h2>
          </motion.div>

          <div className="ob-strengths-grid">
            {capabilities.strengths.map((strength, index) => (
              <motion.div
                key={strength}
                className="ob-strength-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={reveal}
                transition={{ delay: index * 0.06 }}
              >
                <span>0{index + 1}</span>
                <p>{strength}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="ob-capabilities-cta">
        <div className="ob-container ob-capabilities-cta-inner">
          <div>
            <span className="ob-capabilities-eyebrow">TECHNICAL DISCUSSION</span>
            <h2>Have a technical requirement?</h2>
          </div>

          <Link href="/contact" className="ob-capabilities-cta-button">
            Discuss a Requirement
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
