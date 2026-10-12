export type ProductSpecification = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  images: string[];
  features: string[];
  specifications: ProductSpecification[];
  applications: string[];
  industries: string[];
  technology: string[];
  relatedProducts: string[];
  clientDataRequired: boolean;
};

export type ProductCategory = {
  id: string;
  slug: string;
  name: string;
  description: string;
  technicalVisual: string;
  heroImage: string;
  productCount?: number;
  applications: string[];
  technicalAdvantages: string[];
  relatedSolutions: string[];
  clientDataRequired: boolean;
};

export const productCategories: ProductCategory[] = [
  {
    id: "category-industrial-automation",
    slug: "industrial-automation",
    name: "Industrial Automation",
    description:
      "Technical systems and automation components designed to support monitoring, control and industrial process efficiency.",
    technicalVisual: "automation-network",
    heroImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2200&q=90",
    productCount: 2,
    applications: [
      "Process monitoring",
      "Machine control",
      "Industrial system integration",
      "Automated production environments",
    ],
    technicalAdvantages: [
      "Structured control architecture",
      "Scalable system integration",
      "Reliable industrial operation",
      "Technical monitoring capability",
    ],
    relatedSolutions: [
      "Industrial Automation",
      "Technical Services",
      "Industrial Systems",
    ],
    clientDataRequired: true,
  },
  {
    id: "category-power-electrical",
    slug: "power-electrical",
    name: "Power & Electrical",
    description:
      "Electrical equipment and power distribution technologies for demanding industrial and infrastructure environments.",
    technicalVisual: "power-distribution",
    heroImage:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=90",
    productCount: 2,
    applications: [
      "Power distribution",
      "Electrical infrastructure",
      "Industrial facilities",
      "Energy management systems",
    ],
    technicalAdvantages: [
      "Structured power distribution",
      "Industrial-ready architecture",
      "System-level integration",
      "Designed for technical environments",
    ],
    relatedSolutions: [
      "Energy Management",
      "Infrastructure Solutions",
      "Technical Support",
    ],
    clientDataRequired: true,
  },
  {
    id: "category-instrumentation-sensing",
    slug: "instrumentation-sensing",
    name: "Instrumentation & Sensing",
    description:
      "Instrumentation technologies for measuring, monitoring and interpreting key operating conditions across technical environments.",
    technicalVisual: "sensor-array",
    heroImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=90",
    productCount: 2,
    applications: [
      "Condition monitoring",
      "Temperature monitoring",
      "Pressure measurement",
      "Industrial diagnostics",
    ],
    technicalAdvantages: [
      "Accurate technical measurement",
      "Continuous monitoring capability",
      "Compact sensing architecture",
      "Integration-ready design",
    ],
    relatedSolutions: [
      "Industrial Monitoring",
      "Automation Solutions",
      "Technical Services",
    ],
    clientDataRequired: true,
  },
  {
    id: "category-motion-control",
    slug: "motion-control",
    name: "Motion Control",
    description:
      "Control technologies supporting motor-driven equipment, variable-speed operation and industrial motion applications.",
    technicalVisual: "motion-control",
    heroImage:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2200&q=90",
    productCount: 2,
    applications: [
      "Motor control",
      "Variable-speed systems",
      "Industrial machinery",
      "Automated equipment",
    ],
    technicalAdvantages: [
      "Controlled motor operation",
      "Flexible speed management",
      "System integration capability",
      "Industrial application focus",
    ],
    relatedSolutions: [
      "Industrial Automation",
      "Machine Control",
      "Technical Support",
    ],
    clientDataRequired: true,
  },
];

export const products: Product[] = [
  {
    id: "product-01",
    slug: "industrial-control-system",
    technology: [
      "Industrial Automation",
      "PLC Control",
      "Process Control",
    ],
    name: "Industrial Control System",
    category: "industrial-automation",
    shortDescription:
      "Demo industrial control platform for coordinated monitoring and automation workflows.",
    description:
      "Demo product information only. Client-approved product information, capabilities and technical documentation will replace this content.",
    images: [
     "https://images.unsplash.com/photo-1563456019560-2b37aa7ad890?auto=format&fit=crop&w=1800&q=85",
    ],
    features: [
      "Centralized industrial control",
      "System monitoring interface",
      "Configurable automation workflows",
      "Technical integration support",
    ],
    specifications: [
      {
        label: "System type",
        value: "Client data required",
      },
      {
        label: "Control architecture",
        value: "Client data required",
      },
      {
        label: "Communication",
        value: "Client data required",
      },
    ],
    applications: [
      "Industrial process monitoring",
      "Automation systems",
      "Equipment coordination",
    ],
    industries: [
      "Manufacturing",
      "Infrastructure",
      "Industrial facilities",
    ],
    relatedProducts: [
      "motor-control-unit",
      "industrial-pressure-sensor",
    ],
    clientDataRequired: true,
  },

  {
    id: "product-02",
    slug: "power-distribution-panel",
    technology: [
      "Power Distribution",
      "Electrical Protection",
      "Energy Management",
    ],
    name: "Power Distribution Panel",
    category: "power-electrical",
    shortDescription:
      "Demo electrical distribution solution designed for controlled power management environments.",
    description:
      "Demo product information only. Actual Orient Blue product specifications and certifications must be supplied by the client.",
    images: [
      "https://images.unsplash.com/photo-1780034766295-43db0f2a0fb7?auto=format&fit=crop&w=1800&q=85",
    ],
    features: [
      "Electrical distribution architecture",
      "Protection and control interface",
      "Configurable panel design",
      "Installation-ready engineering format",
    ],
    specifications: [
      {
        label: "Rated voltage",
        value: "Client data required",
      },
      {
        label: "Rated current",
        value: "Client data required",
      },
      {
        label: "Protection class",
        value: "Client data required",
      },
    ],
    applications: [
      "Power distribution",
      "Electrical infrastructure",
      "Industrial facilities",
    ],
    industries: [
      "Energy",
      "Infrastructure",
      "Manufacturing",
    ],
    relatedProducts: [
      "motor-control-unit",
      "variable-frequency-drive",
    ],
    clientDataRequired: true,
  },

  {
    id: "product-03",
    slug: "industrial-pressure-sensor",
    technology: [
      "Pressure Sensing",
      "Instrumentation",
      "Condition Monitoring",
    ],
    name: "Industrial Pressure Sensor",
    category: "instrumentation-sensing",
    shortDescription:
      "Demo sensing solution for industrial pressure monitoring and process measurement.",
    description:
      "Demo product information only. Actual measurement range, accuracy and environmental ratings will be supplied by the client.",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=85",
    ],
    features: [
      "Industrial pressure monitoring",
      "Continuous measurement",
      "Process monitoring capability",
      "Technical system integration",
    ],
    specifications: [
      {
        label: "Measurement range",
        value: "Client data required",
      },
      {
        label: "Accuracy",
        value: "Client data required",
      },
      {
        label: "Output",
        value: "Client data required",
      },
    ],
    applications: [
      "Process monitoring",
      "Equipment monitoring",
      "Industrial automation",
    ],
    industries: [
      "Manufacturing",
      "Energy",
      "Process industries",
    ],
    relatedProducts: [
      "temperature-monitoring-module",
      "industrial-control-system",
    ],
    clientDataRequired: true,
  },

  {
    id: "product-04",
    slug: "motor-control-unit",
    technology: [
      "Motor Control",
      "Industrial Automation",
      "Electrical Control",
    ],
    name: "Motor Control Unit",
    category: "motion-control",
    shortDescription:
      "Demo motor-control solution for industrial equipment and automated operating environments.",
    description:
      "Demo product information only. Actual motor ratings, control modes and protection characteristics will be supplied by the client.",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=85",
    ],
    features: [
      "Motor operation control",
      "Protection and monitoring",
      "Industrial automation integration",
      "Configurable operating parameters",
    ],
    specifications: [
      {
        label: "Motor rating",
        value: "Client data required",
      },
      {
        label: "Input voltage",
        value: "Client data required",
      },
      {
        label: "Control method",
        value: "Client data required",
      },
    ],
    applications: [
      "Industrial machinery",
      "Automated equipment",
      "Process systems",
    ],
    industries: [
      "Manufacturing",
      "Infrastructure",
      "Industrial facilities",
    ],
    relatedProducts: [
      "variable-frequency-drive",
      "power-distribution-panel",
    ],
    clientDataRequired: true,
  },

  {
    id: "product-05",
    slug: "variable-frequency-drive",
    technology: [
      "Variable Frequency Drive",
      "Motor Control",
      "Motion Control",
    ],
    name: "Variable Frequency Drive",
    category: "motion-control",
    shortDescription:
      "Demo drive technology for controlled motor operation and industrial motion applications.",
    description:
      "Demo product information only. Actual drive capacity, input/output specifications and supported motor types require client confirmation.",
    images: [
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1800&q=85",
    ],
    features: [
      "Variable-speed motor control",
      "Configurable operating parameters",
      "Industrial system integration",
      "Motor monitoring capability",
    ],
    specifications: [
      {
        label: "Drive capacity",
        value: "Client data required",
      },
      {
        label: "Input",
        value: "Client data required",
      },
      {
        label: "Output",
        value: "Client data required",
      },
    ],
    applications: [
      "Motor speed control",
      "Industrial machinery",
      "Automated processes",
    ],
    industries: [
      "Manufacturing",
      "Infrastructure",
      "Energy",
    ],
    relatedProducts: [
      "motor-control-unit",
      "industrial-control-system",
    ],
    clientDataRequired: true,
  },

  {
    id: "product-06",
    slug: "temperature-monitoring-module",
    technology: [
      "Temperature Sensing",
      "Instrumentation",
      "Condition Monitoring",
    ],
    name: "Temperature Monitoring Module",
    category: "instrumentation-sensing",
    shortDescription:
      "Demo monitoring technology for industrial temperature measurement and equipment observation.",
    description:
      "Demo product information only. Actual sensor compatibility, temperature range and accuracy require client-approved technical documentation.",
    images: [
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1800&q=85",
    ],
    features: [
      "Temperature monitoring",
      "Continuous measurement",
      "Equipment observation",
      "Industrial integration capability",
    ],
    specifications: [
      {
        label: "Temperature range",
        value: "Client data required",
      },
      {
        label: "Accuracy",
        value: "Client data required",
      },
      {
        label: "Sensor compatibility",
        value: "Client data required",
      },
    ],
    applications: [
      "Equipment monitoring",
      "Process measurement",
      "Industrial environments",
    ],
    industries: [
      "Manufacturing",
      "Energy",
      "Infrastructure",
    ],
    relatedProducts: [
      "industrial-pressure-sensor",
      "industrial-control-system",
    ],
    clientDataRequired: true,
  },
];

export function getProductCategory(slug: string) {
  return productCategories.find(
    (category) => category.slug === slug,
  );
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter(
    (product) => product.category === categorySlug,
  );
}

export function getProduct(slug: string) {
  return products.find(
    (product) => product.slug === slug,
  );
}


export type SellCategory = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  productTypes: string[];
  applications: string[];
};

export const sellCategories: SellCategory[] = [
  {
    id: "sell-power-tools",
    slug: "power-tools",
    name: "Power Tools",
    description:
      "Explore tools designed for drilling, cutting, grinding and other workshop tasks.",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1400&q=85",
    productTypes: [
      "Drills and drivers",
      "Angle grinders",
      "Cutting tools",
      "Workshop power tools",
    ],
    applications: [
      "Construction",
      "Maintenance",
      "Workshop operations",
    ],
  },
  {
    id: "sell-garden-tools",
    slug: "garden-tools",
    name: "Garden Tools",
    description:
      "Equipment categories for garden maintenance, outdoor care and landscaping.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=85",
    productTypes: [
      "Grass trimmers",
      "Leaf blowers",
      "Hedge tools",
      "Garden maintenance equipment",
    ],
    applications: [
      "Gardening",
      "Landscaping",
      "Outdoor maintenance",
    ],
  },
  {
    id: "sell-measuring-tools",
    slug: "measuring-tools",
    name: "Measuring Tools",
    description:
      "Measurement equipment for checking dimensions, distances and levels.",
    image:
      "https://images.unsplash.com/photo-1671040690726-b78261eff126?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    productTypes: [
      "Laser distance meters",
      "Measuring instruments",
      "Levels",
      "Dimensional measuring tools",
    ],
    applications: [
      "Site measurement",
      "Installation",
      "Inspection",
    ],
  },
  {
    id: "sell-heating-cooling",
    slug: "heating-cooling",
    name: "Heating & Cooling",
    description:
      "Equipment categories for ventilation, temperature control and indoor comfort.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=85",
    productTypes: [
      "Fans",
      "Portable heaters",
      "Air circulation equipment",
      "Temperature control devices",
    ],
    applications: [
      "Indoor comfort",
      "Workspaces",
      "Temperature management",
    ],
  },
  {
    id: "sell-smart-home-tools",
    slug: "smart-home-tools",
    name: "Smart Home Tools",
    description:
      "Smart-device categories for connected controls, sensors and home automation.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=85",
    productTypes: [
      "Smart sensors",
      "Connected controllers",
      "Smart switches",
      "Home automation devices",
    ],
    applications: [
      "Home automation",
      "Remote monitoring",
      "Connected-device control",
    ],
  },
];

export type SellProduct = {
  id: string;
  slug: string;
  categorySlug: string;
  name: string;
  description: string;
  image: string;
  features: string[];
};

export const sellProducts: SellProduct[] = [
  {
    id: "sell-product-01",
    slug: "cordless-drill-driver",
    categorySlug: "power-tools",
    name: "Cordless Drill Driver",
    description: "Suitable for drilling and fastening applications.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1000&q=85",
    features: ["Drilling", "Fastening", "Workshop use"],
  },
  {
    id: "sell-product-02",
    slug: "angle-grinder",
    categorySlug: "power-tools",
    name: "Angle Grinder",
    description: "Suitable for grinding and cutting applications.",
    image: "/products/angle-grinder.webp",
    features: ["Grinding", "Cutting applications", "Maintenance"],
  },
  {
    id: "sell-product-03",
    slug: "garden-trimmer",
    categorySlug: "garden-tools",
    name: "Garden Trimmer",
    description: "Suitable for garden and landscape maintenance.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85",
    features: ["Garden care", "Outdoor maintenance", "Landscaping"],
  },
  {
    id: "sell-product-04",
    slug: "laser-distance-meter",
    categorySlug: "measuring-tools",
    name: "Laser Distance Meter",
    description: "Designed for distance measurement applications.",
    image: "/products/laser-distance meter.webp",
    features: ["Distance measurement", "Site work", "Inspection"],
  },
  {
    id: "sell-product-05",
    slug: "temperature-control-unit",
    categorySlug: "heating-cooling",
    name: "Temperature Control Unit",
    description: "Suitable for temperature-control applications.",
    image: "/products/temperature-control unit.jpg",
    features: ["Temperature management", "Indoor environments", "Equipment control"],
  },
  {
    id: "sell-product-06",
    slug: "smart-home-controller",
    categorySlug: "smart-home-tools",
    name: "Smart Home Controller",
    description: "Designed for connected-device control applications.",
    image: "/products/smart home controller.jpg",
    features: ["Connected devices", "Smart controls", "Home automation"],
  },

  {
    id: "sell-product-07",
    slug: "hedge-trimmer",
    categorySlug: "garden-tools",
    name: "Hedge Trimmer",
    description: "Suitable for hedge trimming and outdoor maintenance.",
    image: "/products/hedge-trimmer.jpg",
    features: ["Hedge maintenance", "Garden care", "Landscaping"],
  },
  {
    id: "sell-product-08",
    slug: "digital-measuring-tool",
    categorySlug: "measuring-tools",
    name: "Digital Measuring Tool",
    description: "Suitable for measurement and inspection tasks.",
    image: "/products/Digital Measuring Tool.jpg",
    features: ["Measurement", "Inspection", "Site work"],
  },
  {
    id: "sell-product-09",
    slug: "air-circulation-fan",
    categorySlug: "heating-cooling",
    name: "Air Circulation Fan",
    description: "Designed to support air circulation in indoor environments.",
    image: "/products/air circulation fan.jpg",
    features: ["Air circulation", "Indoor comfort", "Workspace use"],
  },
  {
    id: "sell-product-10",
    slug: "smart-sensor",
    categorySlug: "smart-home-tools",
    name: "Smart Sensor",
    description: "Suitable for connected sensing and home automation applications.",
    image: "/products/smart sensor.jpg",
    features: ["Smart monitoring", "Connected devices", "Home automation"],
  },

];
