export type SearchCategory =
  | "Products"
  | "Solutions"
  | "Services"
  | "Industries"
  | "Projects"
  | "Insights";

export type SearchItem = {
  id: string;
  title: string;
  category: SearchCategory;
  description: string;
  keywords: string[];
  href: string;
  featured?: boolean;
};

export const searchData: SearchItem[] = [
  {
    id: "product-industrial-control",
    title: "Industrial Control Systems",
    category: "Products",
    description:
      "Advanced control and automation equipment for demanding industrial environments.",
    keywords: [
      "control",
      "automation",
      "industrial",
      "systems",
      "equipment",
    ],
    href: "#",
    featured: true,
  },
  {
    id: "product-power-distribution",
    title: "Power Distribution Equipment",
    category: "Products",
    description:
      "Reliable electrical distribution solutions engineered for operational continuity.",
    keywords: [
      "power",
      "electrical",
      "distribution",
      "energy",
      "equipment",
    ],
    href: "#",
    featured: true,
  },
  {
    id: "product-industrial-sensors",
    title: "Industrial Sensors",
    category: "Products",
    description:
      "Precision sensing technologies for monitoring industrial processes.",
    keywords: [
      "sensors",
      "sensing",
      "monitoring",
      "industrial",
      "automation",
    ],
    href: "#",
  },
  {
    id: "product-motor-control",
    title: "Motor Control Systems",
    category: "Products",
    description:
      "Motor control technologies designed for efficient and precise industrial operation.",
    keywords: [
      "motor",
      "control",
      "drive",
      "automation",
      "industrial",
    ],
    href: "#",
  },
  {
    id: "solution-automation",
    title: "Industrial Automation",
    category: "Solutions",
    description:
      "Integrated automation approaches for connected industrial operations.",
    keywords: [
      "automation",
      "industrial",
      "digital",
      "control",
      "systems",
    ],
    href: "#",
    featured: true,
  },
  {
    id: "solution-energy",
    title: "Energy Management",
    category: "Solutions",
    description:
      "Technology-led solutions for monitoring and improving energy performance.",
    keywords: [
      "energy",
      "management",
      "efficiency",
      "power",
      "monitoring",
    ],
    href: "#",
  },
  {
    id: "solution-infrastructure",
    title: "Infrastructure Solutions",
    category: "Solutions",
    description:
      "Engineering solutions supporting complex infrastructure environments.",
    keywords: [
      "infrastructure",
      "engineering",
      "systems",
      "industrial",
    ],
    href: "#",
  },
  {
    id: "service-technical",
    title: "Technical Services",
    category: "Services",
    description:
      "Technical support, engineering assistance and specialist services.",
    keywords: [
      "technical",
      "support",
      "engineering",
      "maintenance",
    ],
    href: "#",
  },
  {
    id: "service-support",
    title: "Product Support",
    category: "Services",
    description:
      "Support services helping customers maintain reliable system performance.",
    keywords: [
      "support",
      "service",
      "maintenance",
      "products",
    ],
    href: "#",
  },
  {
    id: "industry-industrial",
    title: "Industrial Manufacturing",
    category: "Industries",
    description:
      "Technology and engineering solutions for modern manufacturing environments.",
    keywords: [
      "industry",
      "manufacturing",
      "factory",
      "industrial",
    ],
    href: "#",
  },
  {
    id: "industry-energy",
    title: "Energy & Utilities",
    category: "Industries",
    description:
      "Solutions designed for demanding energy and utility applications.",
    keywords: [
      "energy",
      "utilities",
      "power",
      "infrastructure",
    ],
    href: "#",
  },
  {
    id: "industry-infrastructure",
    title: "Infrastructure",
    category: "Industries",
    description:
      "Engineering technologies for critical infrastructure projects.",
    keywords: [
      "infrastructure",
      "construction",
      "engineering",
      "projects",
    ],
    href: "#",
  },
  {
    id: "project-industrial",
    title: "Industrial Systems Project",
    category: "Projects",
    description:
      "A representative industrial systems implementation.",
    keywords: [
      "project",
      "industrial",
      "systems",
      "engineering",
    ],
    href: "#",
  },
  {
    id: "project-infrastructure",
    title: "Infrastructure Technology Project",
    category: "Projects",
    description:
      "A representative technology deployment for infrastructure.",
    keywords: [
      "project",
      "infrastructure",
      "technology",
      "systems",
    ],
    href: "#",
  },
  {
    id: "insight-automation",
    title: "The Future of Industrial Automation",
    category: "Insights",
    description:
      "Exploring how connected technologies are changing industrial operations.",
    keywords: [
      "automation",
      "future",
      "technology",
      "industry",
    ],
    href: "#",
  },
  {
    id: "insight-efficiency",
    title: "Engineering for Operational Efficiency",
    category: "Insights",
    description:
      "Understanding the role of engineering systems in improving efficiency.",
    keywords: [
      "efficiency",
      "engineering",
      "operations",
      "technology",
    ],
    href: "#",
  },
];
