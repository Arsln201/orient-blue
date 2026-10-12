export type Service = {
  id: string;
  slug: string;
  number: string;
  name: string;
  shortName: string;
  heroDescription: string;
  description: string;
  capabilities: string[];
  process: string[];
  applications: string[];
  industries: string[];
  image: string;
  clientDataRequired: boolean;
};

export const services: Service[] = [
  {
    id: "technical-maintenance",
    slug: "technical-maintenance",
    number: "01",
    name: "Technical Maintenance",
    shortName: "Maintenance",
    heroDescription:
      "Structured technical maintenance support for equipment, systems, and operational environments.",
    description:
      "A technical maintenance framework designed to support equipment reliability, operational continuity, and disciplined service workflows. Final scope, equipment coverage, response models, and service commitments require client confirmation.",
    capabilities: [
      "Equipment inspection and technical assessment",
      "Preventive maintenance planning",
      "Corrective maintenance support",
      "Technical issue identification",
      "Maintenance documentation and reporting",
    ],
    process: [
      "Understand the technical requirement",
      "Inspect the equipment or operating environment",
      "Identify maintenance requirements",
      "Define the appropriate technical action",
      "Document the completed service",
    ],
    applications: [
      "Industrial equipment environments",
      "Operational facilities",
      "Production support systems",
      "Technical infrastructure",
    ],
    industries: [
      "Industrial Manufacturing",
      "Infrastructure",
      "Energy & Power",
      "Technology",
    ],
    image:
      "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1800&q=85",
    clientDataRequired: true,
  },
  {
    id: "electrical-engineering",
    slug: "electrical-engineering",
    number: "02",
    name: "Electrical Engineering & Support",
    shortName: "Electrical",
    heroDescription:
      "Technical electrical support connecting distribution, control, protection, and operational requirements.",
    description:
      "Electrical engineering and support workflows for environments where dependable distribution and control are critical. Specific equipment, standards, certifications, and service scope must be confirmed by the client.",
    capabilities: [
      "Electrical system assessment",
      "Distribution and control support",
      "Electrical equipment coordination",
      "Technical fault identification",
      "System documentation support",
    ],
    process: [
      "Review the electrical requirement",
      "Map the system and equipment",
      "Identify technical constraints",
      "Develop the appropriate support approach",
      "Verify and document the work",
    ],
    applications: [
      "Power distribution environments",
      "Electrical control systems",
      "Industrial facilities",
      "Infrastructure projects",
    ],
    industries: [
      "Energy & Power",
      "Industrial Manufacturing",
      "Infrastructure",
    ],
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=85",
    clientDataRequired: true,
  },
  {
    id: "instrumentation-control",
    slug: "instrumentation-control",
    number: "03",
    name: "Instrumentation & Control",
    shortName: "Instrumentation",
    heroDescription:
      "Measurement, monitoring, and control support for technically demanding operating environments.",
    description:
      "Instrumentation and control services focused on measurement systems, monitoring requirements, and technical control environments. Exact instruments, ranges, protocols, and supported systems require client confirmation.",
    capabilities: [
      "Instrumentation assessment",
      "Measurement system support",
      "Sensor and monitoring coordination",
      "Control-system documentation",
      "Technical condition monitoring",
    ],
    process: [
      "Define the measurement requirement",
      "Review the operating environment",
      "Select the appropriate technical approach",
      "Integrate monitoring and control requirements",
      "Review and document the outcome",
    ],
    applications: [
      "Process monitoring",
      "Equipment condition monitoring",
      "Industrial measurement",
      "Technical control environments",
    ],
    industries: [
      "Industrial Manufacturing",
      "Energy & Power",
      "Infrastructure",
      "Technology",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85",
    clientDataRequired: true,
  },
  {
    id: "industrial-automation",
    slug: "industrial-automation",
    number: "04",
    name: "Industrial Automation",
    shortName: "Automation",
    heroDescription:
      "Automation-focused technical support connecting control systems, equipment, and operational processes.",
    description:
      "Automation support for technical environments where equipment, control logic, monitoring, and operational requirements need to work together. Specific platforms, PLC systems, integrations, and capabilities require client confirmation.",
    capabilities: [
      "Automation requirement analysis",
      "Control-system coordination",
      "Motor and equipment control support",
      "Process monitoring integration",
      "Technical automation documentation",
    ],
    process: [
      "Understand the operational objective",
      "Map equipment and control requirements",
      "Define the technical architecture",
      "Coordinate the required systems",
      "Review the integrated environment",
    ],
    applications: [
      "Process automation",
      "Equipment control",
      "Motor control environments",
      "Production systems",
    ],
    industries: [
      "Industrial Manufacturing",
      "Energy & Power",
      "Infrastructure",
    ],
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1800&q=85",
    clientDataRequired: true,
  },
  {
    id: "equipment-system-support",
    slug: "equipment-system-support",
    number: "05",
    name: "Equipment & System Support",
    shortName: "System Support",
    heroDescription:
      "Technical support for equipment and systems across demanding operational environments.",
    description:
      "A structured support layer for equipment and technical systems, connecting product knowledge with practical operational requirements. Supported equipment categories and service boundaries require client confirmation.",
    capabilities: [
      "Equipment technical assessment",
      "System-level support",
      "Product and equipment coordination",
      "Technical troubleshooting",
      "Documentation and support planning",
    ],
    process: [
      "Capture the equipment requirement",
      "Assess the existing system",
      "Identify the technical requirement",
      "Coordinate equipment and support",
      "Document the recommended action",
    ],
    applications: [
      "Industrial equipment",
      "Technical infrastructure",
      "Operational systems",
      "Equipment support environments",
    ],
    industries: [
      "Industrial Manufacturing",
      "Infrastructure",
      "Technology",
    ],
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1800&q=85",
    clientDataRequired: true,
  },
  {
    id: "technical-advisory",
    slug: "technical-advisory",
    number: "06",
    name: "Technical Inspection & Advisory",
    shortName: "Technical Advisory",
    heroDescription:
      "Technical assessment and advisory support for equipment, systems, and project requirements.",
    description:
      "Technical advisory workflows that help structure equipment, system, and project requirements before implementation or support. Specific inspection methodologies and advisory deliverables require client confirmation.",
    capabilities: [
      "Technical requirement review",
      "Equipment assessment",
      "System-level analysis",
      "Technical documentation review",
      "Advisory recommendations",
    ],
    process: [
      "Understand the project requirement",
      "Review available technical information",
      "Assess the system or equipment",
      "Identify relevant technical considerations",
      "Prepare the advisory direction",
    ],
    applications: [
      "Project planning",
      "Equipment assessment",
      "System reviews",
      "Technical procurement support",
    ],
    industries: [
      "Industrial Manufacturing",
      "Energy & Power",
      "Infrastructure",
      "Technology",
    ],
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85",
    clientDataRequired: true,
  },
];
