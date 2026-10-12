export type CompanyTimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type CompanyValue = {
  number: string;
  title: string;
  description: string;
};

export type CompanyCapability = {
  number: string;
  title: string;
  description: string;
  image: string;
};

export const companyStory = {
  eyebrow: "ABOUT ORIENT BLUE",

  heroTitle: "Engineering clarity into complex industrial environments.",

  heroDescription:
    "Orient Blue FZ-L.L.C. is positioned as a technical and industrial solutions partner connecting products, engineering expertise and dependable support across demanding operating environments.",

  heroImage:
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2400&q=90",

  about: {
    eyebrow: "WHO WE ARE",

    title:
      "A technical partner built around precision, coordination and practical engineering.",

    description:
      "Orient Blue brings together industrial products, technical capabilities and application-focused thinking to help organizations approach complex engineering requirements with greater clarity.",

    secondaryDescription:
      "From equipment and instrumentation to automation, electrical systems and technical support, our approach is designed around understanding the requirement first and then connecting it with the right technical response.",

    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=2200&q=90",
  },

  story: {
    eyebrow: "OUR STORY",

    title:
      "From requirement to response — every project begins with understanding.",

    paragraphs: [
      "Industrial environments rarely present simple requirements. Equipment, systems, people and operating conditions must work together with precision.",

      "Orient Blue is presented around a simple principle: technical solutions should be understood in context. That means looking beyond individual products and considering the application, operating environment and long-term requirement.",

      "The result is a more connected approach to industrial support — bringing products, engineering knowledge and technical coordination together within one professional framework.",
    ],

    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2400&q=90",
  },

  mission: {
    eyebrow: "MISSION",

    title: "Make technical decisions clearer. Make industrial systems stronger.",

    description:
      "Our mission is to connect customers with practical technical solutions, dependable products and responsive engineering support while maintaining a disciplined focus on quality and application requirements.",

    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=2200&q=90",
  },

  vision: {
    eyebrow: "VISION",

    title:
      "To become a trusted technical partner across the industrial markets we serve.",

    description:
      "Our vision is to build a respected international technical organization recognized for engineering understanding, dependable execution, professional relationships and long-term customer value.",

    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=90",
  },

  values: [
    {
      number: "01",
      title: "Integrity",
      description:
        "Clear communication, responsible recommendations and professional conduct form the foundation of every relationship.",
    },
    {
      number: "02",
      title: "Precision",
      description:
        "Technical requirements deserve disciplined attention to detail, specifications and application conditions.",
    },
    {
      number: "03",
      title: "Responsiveness",
      description:
        "Industrial requirements move quickly. We value clear communication and timely technical coordination.",
    },
    {
      number: "04",
      title: "Partnership",
      description:
        "Strong technical outcomes are built through collaboration between customers, engineers, suppliers and support teams.",
    },
    {
      number: "05",
      title: "Continuous Improvement",
      description:
        "We approach every requirement as an opportunity to improve technical understanding, execution and long-term value.",
    },
  ] satisfies CompanyValue[],

  capabilities: [
    {
      number: "01",
      title: "Industrial Automation",
      description:
        "Application-focused automation support spanning control architecture, industrial equipment and system integration requirements.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=90",
    },
    {
      number: "02",
      title: "Power & Electrical",
      description:
        "Technical support for electrical infrastructure, distribution equipment, motor systems and industrial power requirements.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=90",
    },
    {
      number: "03",
      title: "Instrumentation",
      description:
        "Instrumentation and sensing solutions supporting measurement, monitoring and industrial process requirements.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2000&q=90",
    },
    {
      number: "04",
      title: "Technical Support",
      description:
        "Technical coordination, inspection, maintenance and equipment support designed around practical operating requirements.",
      image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=2000&q=90",
    },
  ] satisfies CompanyCapability[],

  quality: {
    eyebrow: "QUALITY",

    title:
      "Quality is not a final inspection. It is part of the process.",

    description:
      "Orient Blue's quality approach is designed around disciplined technical evaluation, specification awareness, documentation and responsible coordination throughout the solution lifecycle.",

    points: [
      "Requirement understanding",
      "Technical specification review",
      "Product and application alignment",
      "Documentation discipline",
      "Inspection and verification",
      "Continuous improvement",
    ],

    image:
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2400&q=90",
  },

  /*
   * IMPORTANT:
   * No historical dates are invented here.
   *
   * When Orient Blue provides the real company timeline,
   * add the approved milestones below.
   *
   * Example:
   *
   * {
   *   year: "20XX",
   *   title: "Approved milestone",
   *   description: "Approved company history."
   * }
   */
  timeline: [] as CompanyTimelineItem[],
};