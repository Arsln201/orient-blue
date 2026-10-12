export type InsightCategory =
  | "News"
  | "Articles"
  | "Technical Insights"
  | "Product Updates"
  | "Resources"
  | "Downloads";

export type Insight = {
  id: string;
  slug: string;
  number: string;
  category: InsightCategory;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  placeholder: boolean;
  content: {
    introduction: string;
    sections: {
      heading: string;
      body: string;
    }[];
  };
};

export const insightCategories: InsightCategory[] = [
  "News",
  "Articles",
  "Technical Insights",
  "Product Updates",
  "Resources",
  "Downloads",
];

export const insights: Insight[] = [
  {
    id: "insight-01",
    slug: "industrial-automation-placeholder",
    number: "01",
    category: "Technical Insights",
    title: "Industrial Automation — Editorial Placeholder",
    excerpt:
      "Placeholder technical editorial reserved for approved Orient Blue engineering content.",
    date: "DATE PENDING",
    readTime: "READ TIME PENDING",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    featured: true,
    placeholder: true,
    content: {
      introduction:
        "PLACEHOLDER CONTENT — This technical insight will be replaced with approved Orient Blue material covering an industrial automation topic.",
      sections: [
        {
          heading: "Technical topic",
          body:
            "PLACEHOLDER — The final article will introduce the approved technical topic, its industrial context and the key engineering considerations.",
        },
        {
          heading: "Application perspective",
          body:
            "PLACEHOLDER — Application-specific information will be added after approved Orient Blue content is supplied.",
        },
        {
          heading: "Orient Blue perspective",
          body:
            "PLACEHOLDER — Any company-specific technical perspective will be published only after approved information is provided.",
        },
      ],
    },
  },

  {
    id: "insight-02",
    slug: "power-systems-placeholder",
    number: "02",
    category: "Articles",
    title: "Power Systems — Editorial Placeholder",
    excerpt:
      "Placeholder article space for future Orient Blue content on industrial power and electrical systems.",
    date: "DATE PENDING",
    readTime: "READ TIME PENDING",
    image:
      "https://images.unsplash.com/photo-1509390144018-eeaf65052242?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    placeholder: true,
    content: {
      introduction:
        "PLACEHOLDER CONTENT — This article slot is reserved for approved Orient Blue editorial material.",
      sections: [
        {
          heading: "Article introduction",
          body:
            "PLACEHOLDER — The approved article introduction will be added here.",
        },
        {
          heading: "Key considerations",
          body:
            "PLACEHOLDER — Technical considerations, application context and supporting information will be added after review.",
        },
      ],
    },
  },

  {
    id: "insight-03",
    slug: "instrumentation-placeholder",
    number: "03",
    category: "Technical Insights",
    title: "Instrumentation & Sensing — Editorial Placeholder",
    excerpt:
      "Placeholder technical insight reserved for future approved instrumentation and sensing content.",
    date: "DATE PENDING",
    readTime: "READ TIME PENDING",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2400&q=90",
    placeholder: true,
    content: {
      introduction:
        "PLACEHOLDER CONTENT — Approved technical content relating to instrumentation and sensing will replace this copy.",
      sections: [
        {
          heading: "Measurement context",
          body:
            "PLACEHOLDER — The final publication will explain the approved measurement or sensing topic.",
        },
        {
          heading: "Industrial application",
          body:
            "PLACEHOLDER — Application information will be added from approved technical material.",
        },
      ],
    },
  },

  {
    id: "insight-04",
    slug: "product-update-placeholder",
    number: "04",
    category: "Product Updates",
    title: "Product Update — Placeholder",
    excerpt:
      "Reserved publication space for verified Orient Blue product announcements and updates.",
    date: "DATE PENDING",
    readTime: "READ TIME PENDING",
    image:
      "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    placeholder: true,
    content: {
      introduction:
        "PLACEHOLDER CONTENT — Product update information will only be published after approved Orient Blue product material is supplied.",
      sections: [
        {
          heading: "Product information",
          body:
            "PLACEHOLDER — Approved product information, specifications and update details will appear here.",
        },
        {
          heading: "Availability",
          body:
            "PLACEHOLDER — Availability or release information will be added only when verified.",
        },
      ],
    },
  },

  {
    id: "insight-05",
    slug: "industrial-resource-placeholder",
    number: "05",
    category: "Resources",
    title: "Industrial Resource — Placeholder",
    excerpt:
      "Reserved resource entry for future technical documents, guides and approved reference material.",
    date: "DATE PENDING",
    readTime: "RESOURCE",
    image:
      "https://images.unsplash.com/photo-1620203853151-496c7228306c?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    placeholder: true,
    content: {
      introduction:
        "PLACEHOLDER CONTENT — This resource entry will be replaced with an approved Orient Blue technical resource.",
      sections: [
        {
          heading: "Resource overview",
          body:
            "PLACEHOLDER — The final resource description and intended use will be added here.",
        },
        {
          heading: "Reference information",
          body:
            "PLACEHOLDER — Supporting information will be published after the source material is approved.",
        },
      ],
    },
  },

  {
    id: "insight-06",
    slug: "technical-download-placeholder",
    number: "06",
    category: "Downloads",
    title: "Technical Download — Placeholder",
    excerpt:
      "Reserved download entry for approved Orient Blue technical documentation.",
    date: "DATE PENDING",
    readTime: "DOWNLOAD",
    image:
      "https://plus.unsplash.com/premium_photo-1723672940275-a56d86dffcb8?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    placeholder: true,
    content: {
      introduction:
        "PLACEHOLDER CONTENT — Download information will be added when approved Orient Blue documentation is available.",
      sections: [
        {
          heading: "Document information",
          body:
            "PLACEHOLDER — Document title, revision information and description will be added here.",
        },
        {
          heading: "Download availability",
          body:
            "PLACEHOLDER — The approved document download will be connected once supplied.",
        },
      ],
    },
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}