
"use client";

import { useState } from "react";
import { Info, X } from "lucide-react";

export default function InsightsDisclaimer() {
  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") return false;

    return !sessionStorage.getItem("orient-blue-insights-disclaimer");
  });

  function closeDisclaimer() {
    sessionStorage.setItem("orient-blue-insights-disclaimer", "seen");
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="ob-disclaimer-overlay">
      <section
        className="ob-disclaimer-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ob-disclaimer-title"
      >
        <button
          type="button"
          className="ob-disclaimer-close"
          onClick={closeDisclaimer}
          aria-label="Close disclaimer"
        >
          <X size={20} />
        </button>

        <div className="ob-disclaimer-icon">
          <Info size={25} />
        </div>

        <span className="ob-disclaimer-eyebrow">
          ORIENT BLUE · INSIGHTS
        </span>

        <h2 id="ob-disclaimer-title">Important Notice</h2>

        <p>
          This Insights section is presented for demonstration purposes.
          Certain articles, images, dates, and descriptions may be illustrative
          and may not represent official publications or verified information
          from Orient Blue FZ-L.L.C.
        </p>

        <p className="ob-disclaimer-secondary">
          Please contact Orient Blue directly to confirm product specifications,
          technical information, announcements, and document availability.
        </p>

        <button
          type="button"
          className="ob-disclaimer-continue"
          onClick={closeDisclaimer}
        >
          Continue to Insights
        </button>

        <span className="ob-disclaimer-footnote">
          Demonstration content · Informational purposes only
        </span>
      </section>
    </div>
  );
}
