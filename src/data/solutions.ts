export type Solution = {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  heroDescription: string;
  challenge: string;
  approach: string;
  technicalSolution: string;
  technicalExpertise: string[];
  services: string[];
  productSlugs: string[];
  applications: string[];
  industries: string[];
  result: string;
  clientDataRequired: boolean;
  image: string;
};

export const solutions: Solution[] = [
  {
    id: "solution-01",
    slug: "industrial-automation",
    number: "01",
    title: "Industrial Automation & Process Control",
    shortTitle: "Automation & Process Control",
    heroDescription:
      "A structured solution framework connecting automation products, technical expertise and industrial applications into one technical workflow.",
    challenge:
      "Industrial environments can involve multiple control, monitoring and automation requirements that need to work together as part of a clearly defined technical system.",
    approach:
      "The approach begins by understanding the operating environment, the required control functions and the technical interfaces involved. Products, services and engineering expertise are then considered as connected parts of the same solution.",
    technicalSolution:
      "The solution framework combines industrial control technology, process-control capabilities and technical support around the application requirements. Final architecture, equipment selection and implementation details require client-approved technical information.",
    technicalExpertise: [
      "Industrial automation",
      "Process control",
      "Control system architecture",
      "Technical system integration",
    ],
    services: [
      "Technical consultation",
      "System support",
      "Application-focused product selection",
      "Technical documentation",
    ],
    productSlugs: [
      "industrial-control-system",
      "motor-control-unit",
    ],
    applications: [
      "Industrial process control",
      "Equipment automation",
      "Production environments",
      "Technical operations",
    ],
    industries: [
      "Industrial facilities",
      "Manufacturing environments",
      "Process-oriented operations",
    ],
    result:
      "Client-approved performance results, project outcomes and measurable benefits will be added when verified information is provided.",
    clientDataRequired: true,
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2200&q=88",
  },
  {
    id: "solution-02",
    slug: "power-electrical-infrastructure",
    number: "02",
    title: "Power & Electrical Infrastructure",
    shortTitle: "Power & Electrical",
    heroDescription:
      "A technical solution framework connecting electrical products, power-distribution requirements, engineering knowledge and infrastructure applications.",
    challenge:
      "Electrical infrastructure requires a clear relationship between equipment, distribution requirements, protection considerations and the environment in which systems operate.",
    approach:
      "The approach maps the application requirements first, then connects the relevant electrical technology, technical expertise and support services around those requirements.",
    technicalSolution:
      "The solution framework brings together power-distribution technology, electrical control and technical system considerations. Final electrical design, ratings, protection requirements and installation specifications require client-approved engineering data.",
    technicalExpertise: [
      "Power distribution",
      "Electrical systems",
      "Electrical protection",
      "Infrastructure planning",
    ],
    services: [
      "Technical consultation",
      "Product selection support",
      "System documentation",
      "Technical assistance",
    ],
    productSlugs: [
      "power-distribution-panel",
      "variable-frequency-drive",
    ],
    applications: [
      "Power distribution",
      "Electrical infrastructure",
      "Equipment power management",
      "Industrial electrical systems",
    ],
    industries: [
      "Industrial facilities",
      "Infrastructure environments",
      "Commercial technical facilities",
    ],
    result:
      "Verified project results, efficiency figures and operational outcomes will be added only after client-approved information is available.",
    clientDataRequired: true,
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2200&q=88",
  },
  {
    id: "solution-03",
    slug: "instrumentation-condition-monitoring",
    number: "03",
    title: "Instrumentation & Condition Monitoring",
    shortTitle: "Instrumentation & Monitoring",
    heroDescription:
      "A connected approach to sensing, instrumentation and monitoring requirements across technical operating environments.",
    challenge:
      "Technical systems often depend on reliable information about operating conditions such as pressure, temperature and equipment state.",
    approach:
      "The solution process connects sensing technology with the application, monitoring requirements and technical expertise needed to interpret the operating environment.",
    technicalSolution:
      "Instrumentation and monitoring technologies can be structured around the parameters that need to be observed. Final sensor selection, ranges, interfaces, accuracy requirements and installation details require client-approved specifications.",
    technicalExpertise: [
      "Instrumentation",
      "Pressure sensing",
      "Temperature sensing",
      "Condition monitoring",
    ],
    services: [
      "Application assessment",
      "Technical consultation",
      "Product selection support",
      "Technical documentation",
    ],
    productSlugs: [
      "industrial-pressure-sensor",
      "temperature-monitoring-module",
    ],
    applications: [
      "Process monitoring",
      "Equipment condition monitoring",
      "Temperature monitoring",
      "Pressure measurement",
    ],
    industries: [
      "Industrial operations",
      "Process environments",
      "Technical infrastructure",
    ],
    result:
      "Measured monitoring improvements, reliability outcomes or other project results will only be published after factual client information is supplied.",
    clientDataRequired: true,
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2200&q=88",
  },
  {
    id: "solution-04",
    slug: "motor-motion-control",
    number: "04",
    title: "Motor & Motion Control",
    shortTitle: "Motor & Motion Control",
    heroDescription:
      "A technical framework connecting motor-control products, automation expertise and motion-related applications.",
    challenge:
      "Motor-driven equipment can require coordinated control, electrical management and application-specific operating considerations.",
    approach:
      "The approach connects the motor application with the required control technology, operating requirements and supporting technical expertise.",
    technicalSolution:
      "Motor-control units and variable-frequency-drive technology can form part of an application-focused control architecture. Final motor ratings, drive selection, control strategy and operating parameters require client-approved technical documentation.",
    technicalExpertise: [
      "Motor control",
      "Motion control",
      "Industrial automation",
      "Electrical control",
    ],
    services: [
      "Technical consultation",
      "Application support",
      "Product selection assistance",
      "Technical documentation",
    ],
    productSlugs: [
      "motor-control-unit",
      "variable-frequency-drive",
    ],
    applications: [
      "Motor-driven equipment",
      "Industrial automation",
      "Equipment control",
      "Motion-related applications",
    ],
    industries: [
      "Industrial facilities",
      "Manufacturing environments",
      "Equipment-intensive operations",
    ],
    result:
      "Verified operational results and project outcomes will be added only when supported by client-approved information.",
    clientDataRequired: true,
    image:
      "https://plus.unsplash.com/premium_photo-1663126655824-29e275bb96c5?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];
