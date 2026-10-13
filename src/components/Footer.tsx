import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin, Clock3 } from "lucide-react";
import MagneticButton from "./MagneticButton";

const footerLinks = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Company", href: "/company" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="ob-footer">
      <section className="ob-footer-cta">
        <div className="ob-footer-line ob-footer-line-top" />

        <div className="ob-footer-cta-inner">
          <div>
            <span className="ob-footer-eyebrow">ORIENT BLUE / NEXT</span>

            <h2>
              LET&apos;S BUILD
              <br />
              <span>WHAT&apos;S NEXT.</span>
            </h2>
          </div>

          <MagneticButton
            href="/contact"
            className="ob-footer-cta-button"
          >
            <span>CONTACT ORIENT BLUE</span>
            <ArrowUpRight size={20} strokeWidth={1.5} />
          </MagneticButton>
        </div>

        <div className="ob-footer-line ob-footer-line-bottom" />
      </section>

      <div className="ob-footer-main">
        <div className="ob-footer-grid">
          <div className="ob-footer-brand">
            <span className="ob-footer-brand-mark">OB</span>

            <h3>ORIENT BLUE FZ-L.L.C.</h3>

            <p>
              Technical products, engineering solutions and industrial
              support across the region.
            </p>
          </div>

          <nav className="ob-footer-nav" aria-label="Footer navigation">
            <span className="ob-footer-label">NAVIGATION</span>

            <div className="ob-footer-links">
              {footerLinks.map((link) => (
                <Link href={link.href} key={link.label}>
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} strokeWidth={1.5} />
                </Link>
              ))}
            </div>
          </nav>

          <div className="ob-footer-locations">
            <span className="ob-footer-label">LOCATIONS</span>

            <div className="ob-footer-location">
              <span className="ob-footer-index">01</span>
              <div>
                <strong>Ras Al Khaimah</strong>
                <span>United Arab Emirates</span>
              </div>
            </div>

            <div className="ob-footer-location">
              <span className="ob-footer-index">02</span>
              <div>
                <strong>Jeddah</strong>
                <span>Saudi Arabia</span>
              </div>
            </div>
          </div>

          <div className="ob-footer-contact">
            <span className="ob-footer-label">CONTACT</span>

            <div className="ob-footer-contact-item">
              <Phone size={16} aria-hidden="true" />
              <div>
                <span className="ob-footer-contact-heading">LANDLINE</span>
                <a href="tel:+96626482836" className="ob-footer-phone">
                  +966 26482836
                  <ArrowUpRight size={15} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <div className="ob-footer-contact-item">
              <Mail size={16} aria-hidden="true" />
              <div>
                <span className="ob-footer-contact-heading">EMAIL</span>
                <a
                  href="mailto:hr@orientbluefz.com"
                  className="ob-footer-email"
                >
                  hr@orientbluefz.com
                  <ArrowUpRight size={15} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <div className="ob-footer-contact-item">
              <Clock3 size={16} aria-hidden="true" />
              <div>
                <span className="ob-footer-contact-heading">
                  AVAILABILITY
                </span>
                <span className="ob-footer-availability">
                  Open for enquiries
                </span>
              </div>
            </div>

<a
  href="mailto:hr@orientbluefz.com?subject=Orient%20Blue%20Enquiry"
  className="ob-contact-enquiry-button"
>
  <span>Send an enquiry</span>
  <span className="ob-contact-enquiry-icon">
    <ArrowUpRight size={18} strokeWidth={1.8} />
  </span>
</a>

          </div>
        </div>

        <div className="ob-footer-tagline">
          <div className="ob-footer-tagline-label">
            Technical Service • UAE &amp; KSA
          </div>

          <div className="ob-footer-tagline-statements">
            <p>Precision in every detail.</p>
            <p>Excellence in every connection.</p>
          </div>
        </div>

        <div className="ob-footer-bottom">
          <span className="ob-footer-copyright">
            © 2026 ORIENT BLUE FZ-L.L.C. ALL RIGHTS RESERVED.
          </span>

          <span className="ob-footer-credit">
            Developed &amp; Maintained by{" "}
            <a
              href="https://mirza-arsalan.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MARS — visit developer portfolio"
            >
              MARS
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
