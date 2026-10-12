import Link from "next/link";
import { ArrowRight } from "lucide-react";

type EnquiryCTAProps = {
  type: "product" | "service";
  name: string;
};

export default function EnquiryCTA({
  type,
  name,
}: EnquiryCTAProps) {
  const isProduct = type === "product";

  const href = isProduct
    ? `/contact?product=${encodeURIComponent(name)}`
    : `/contact?service=${encodeURIComponent(name)}`;

  return (
    <section className="ob-enquiry-cta">
      <div className="ob-enquiry-cta-grid">
        <div>
          <span className="ob-enquiry-eyebrow">
            {isProduct
              ? "REQUEST PRODUCT INFORMATION"
              : "TECHNICAL ENQUIRY"}
          </span>

          <h2>
            {isProduct
              ? "Need more information about this product?"
              : "Have a technical requirement to discuss?"}
          </h2>

          <p>
            {isProduct
              ? "Tell Orient Blue what you need to know and our team can discuss the requirement with you."
              : "Discuss your requirement with Orient Blue and start with the technical context that matters."}
          </p>
        </div>

        <Link href={href} className="ob-enquiry-cta-button">
          {isProduct
            ? "Request Product Information"
            : "Discuss Your Requirement"}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
