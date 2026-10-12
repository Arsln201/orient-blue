"use client";

import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  MapPin,
  Phone,
} from "lucide-react";
import EnquiryForm from "./EnquiryForm";
import { orientBlueContact } from "@/data/contact";

type ContactPageProps = {
  product?: string;
  service?: string;
};

export default function ContactPage({
  product,
  service,
}: ContactPageProps) {
  const subject = product
    ? `Product enquiry — ${product}`
    : service
      ? `Service enquiry — ${service}`
      : "";

  return (
    <main className="ob-contact-page">
      <section className="ob-contact-hero">
        <div className="ob-contact-grid" />

        <div className="ob-container ob-contact-hero-inner">
          <motion.div
            className="ob-contact-hero-copy"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="ob-contact-eyebrow">
              CONTACT ORIENT BLUE
            </span>

            <h1>
              Let&apos;s discuss
              <br />
              your requirement.
            </h1>

            <p>
              Orient Blue welcomes technical, product and industrial
              enquiries. Tell us what you are looking for and start
              the conversation with the relevant context.
            </p>

            <div className="ob-contact-hero-meta">
              <span>ORIENT BLUE FZ-L.L.C.</span>
              <span>TECHNICAL ENQUIRIES</span>
            </div>
          </motion.div>

          <motion.div
            className="ob-contact-hero-mark"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <span>OB</span>
            <small>ENQUIRY</small>
          </motion.div>
        </div>

        <div className="ob-contact-scroll">
          <span>SCROLL TO ENQUIRE</span>
          <ArrowDown size={16} />
        </div>
      </section>

      {(product || service) && (
        <section className="ob-contact-context">
          <div className="ob-container">
            <span className="ob-contact-eyebrow">
              {product
                ? "REQUEST PRODUCT INFORMATION"
                : "DISCUSS YOUR REQUIREMENT"}
            </span>

            <h2>
              {product || service}
            </h2>

            <p>
              Your enquiry has been pre-filled with the selected{" "}
              {product ? "product" : "service"}.
            </p>
          </div>
        </section>
      )}

      <section className="ob-contact-enquiry ob-section">
        <div className="ob-container">
          <div className="ob-contact-section-intro">
            <div>
              <span className="ob-contact-eyebrow">
                {product
                  ? "REQUEST PRODUCT INFORMATION"
                  : "GENERAL ENQUIRY"}
              </span>

              <h2>
                {product
                  ? "Tell us what you need to know."
                  : "How can Orient Blue help?"}
              </h2>
            </div>

            <p>
              Provide the relevant information below so the enquiry
              can be reviewed in context.
            </p>
          </div>

          <EnquiryForm
            product={product}
            subject={subject}
          />
        </div>
      </section>

      <section className="ob-contact-locations ob-section">
        <div className="ob-container">
          <div className="ob-contact-section-intro">
            <div>
              <span className="ob-contact-eyebrow">
                CONTACT DETAILS
              </span>

              <h2>Orient Blue locations.</h2>
            </div>

            <p>
              Contact information shown here is limited to details
              supplied for Orient Blue.
            </p>
          </div>

          <div className="ob-contact-location-grid">
            <article>
              <div className="ob-contact-location-icon">
                <MapPin size={19} />
              </div>

              <span>UAE</span>

              <h3>United Arab Emirates</h3>

              <p>{orientBlueContact.uae.address}</p>
            </article>

            <article>
              <div className="ob-contact-location-icon">
                <MapPin size={19} />
              </div>

              <span>SAUDI ARABIA</span>

              <h3>Saudi Arabia</h3>

              <p>{orientBlueContact.saudi.address}</p>

              <a href="tel:+96626482836">
                <Phone size={16} />
                +96626482836
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="ob-contact-final">
        <div className="ob-container">
          <span className="ob-contact-eyebrow">
            ORIENT BLUE FZ-L.L.C.
          </span>

          <h2>
            Start with the requirement.
            <br />
            Discuss the right response.
          </h2>

          <p>
            Products are presented for technical discovery and
            information. Orient Blue does not sell products through
            an online checkout.
          </p>

          <a href="#enquiry" className="ob-contact-final-link">
            Begin an enquiry
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
