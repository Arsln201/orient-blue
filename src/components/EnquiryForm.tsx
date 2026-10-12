"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type EnquiryFormProps = {
  product?: string;
  subject?: string;
};

export default function EnquiryForm({
  product = "",
  subject = "",
}: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [productValue, setProductValue] = useState(product);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="ob-enquiry-success">
        <CheckCircle2 size={24} />

        <div>
          <span className="ob-enquiry-success-label">
            ENQUIRY READY
          </span>

          <h3>Thank you for your enquiry.</h3>

          <p>
            Your information has been captured in this enquiry form.
            The final client-approved submission channel can be connected
            once Orient Blue provides its preferred enquiry email or form
            endpoint.
          </p>

          <button
            type="button"
            className="ob-enquiry-reset"
            onClick={() => setSubmitted(false)}
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="ob-enquiry-form" onSubmit={handleSubmit}>
      <div className="ob-enquiry-form-grid">
        <label>
          <span>Name</span>
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
          />
        </label>

        <label>
          <span>Company</span>
          <input
            name="company"
            type="text"
            required
            placeholder="Company name"
          />
        </label>

        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
          />
        </label>

        <label>
          <span>Phone</span>
          <input
            name="phone"
            type="tel"
            required
            placeholder="Phone number"
          />
        </label>

        <label>
          <span>Product</span>
          <input
            name="product"
            type="text"
            value={productValue}
            onChange={(event) => setProductValue(event.target.value)}
            placeholder="Product name"
          />
        </label>

        <label>
          <span>Subject</span>
          <input
            name="subject"
            type="text"
            defaultValue={subject}
            placeholder="Enquiry subject"
          />
        </label>

        <label className="ob-enquiry-message-field">
          <span>Message</span>
          <textarea
            name="message"
            required
            rows={7}
            placeholder="Tell us about your requirement..."
          />
        </label>
      </div>

      <div className="ob-enquiry-form-footer">
        <p>
          We use this form to understand your requirement before
          discussing the appropriate technical response.
        </p>

        <button type="submit" className="ob-enquiry-submit">
          Submit Enquiry
          <ArrowRight size={17} />
        </button>
      </div>
    </form>
  );
}