export type CapabilityItem = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const capabilities = {
  hero: {
    eyebrow: "TECHNICAL CAPABILITIES",
    title: "Engineering capability built around technical clarity.",
    description:
      "Orient Blue brings together product knowledge, technical expertise and application-focused thinking across industrial requirements.",
  },

  engineering: [
    {
      number: "01",
      title: "Industrial Automation",
      description:
        "Technical capability across automation, control, monitoring and industrial system requirements.",
      tags: ["Automation", "Control", "Monitoring"],
    },
    {
      number: "02",
      title: "Power & Electrical",
      description:
        "Technical support across electrical infrastructure, distribution equipment and industrial power requirements.",
      tags: ["Electrical", "Distribution", "Power"],
    },
    {
      number: "03",
      title: "Instrumentation",
      description:
        "Application-focused instrumentation and sensing capability for measurement and monitoring requirements.",
      tags: ["Sensing", "Measurement", "Monitoring"],
    },
    {
      number: "04",
      title: "Motor & Motion",
      description:
        "Technical capability covering motor systems, drives and motion-control requirements.",
      tags: ["Motors", "Drives", "Motion"],
    },
    {
      number: "05",
      title: "Technical Support",
      description:
        "Structured technical support covering equipment, systems, inspection and maintenance requirements.",
      tags: ["Support", "Inspection", "Maintenance"],
    },
    {
      number: "06",
      title: "System Coordination",
      description:
        "A connected approach to coordinating products, technical requirements and application needs.",
      tags: ["Systems", "Coordination", "Applications"],
    },
  ] satisfies CapabilityItem[],

  expertise: [
    "Requirement interpretation",
    "Technical product evaluation",
    "Application alignment",
    "System-level thinking",
    "Technical documentation",
    "Equipment and system support",
  ],

  quality: [
    {
      title: "Requirement clarity",
      description:
        "Understanding the technical requirement before selecting or recommending a response.",
    },
    {
      title: "Specification awareness",
      description:
        "Keeping technical specifications and application conditions central to the evaluation process.",
    },
    {
      title: "Application alignment",
      description:
        "Connecting equipment and technical solutions to the intended operating requirement.",
    },
    {
      title: "Documentation discipline",
      description:
        "Maintaining clear technical information throughout the solution process.",
    },
  ],

  process: [
    {
      number: "01",
      title: "Understand",
      description:
        "Define the requirement, operating context and technical objectives.",
    },
    {
      number: "02",
      title: "Evaluate",
      description:
        "Review technical requirements and identify the relevant capability or solution path.",
    },
    {
      number: "03",
      title: "Align",
      description:
        "Connect products, technical expertise and application requirements.",
    },
    {
      number: "04",
      title: "Coordinate",
      description:
        "Structure the technical response around clear communication and documentation.",
    },
    {
      number: "05",
      title: "Support",
      description:
        "Maintain a technical support pathway around the equipment or system requirement.",
    },
  ] satisfies ProcessStep[],

  strengths: [
    "Application-focused thinking",
    "Technical product knowledge",
    "Cross-discipline coordination",
    "Structured technical communication",
    "Industrial requirement awareness",
    "Product-to-application alignment",
  ],
} as const;
