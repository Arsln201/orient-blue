export type Project = {
  id: string;
  slug: string;
  number: string;
  title: string;
  industry: string;
  location?: string;
  shortDescription: string;
  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  products: string[];
  services: string[];
  gallery: string[];
  outcome: string;
  image: string;
  clientMaterialRequired: boolean;
};

export const projects: Project[] = [
  {
    id: "project-01",
    slug: "project-material-pending-01",
    number: "01",
    title: "Project Case Study — Material Pending",
    industry: "Industry information pending",
    location: "Project location pending",

    shortDescription:
      "A dedicated case-study space reserved for an approved Orient Blue project.",

    overview:
      "Project overview information will be added once approved client material is supplied.",

    challenge:
      "Project challenge information will be added from approved client documentation.",

    approach:
      "Project approach information will be documented from verified project material.",

    solution:
      "Project solution information will be added from approved technical documentation.",

    products: [],

    services: [],

    gallery: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2200&q=85",
      "https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2200&q=85",
    ],

    outcome:
      "Documented project outcomes will be added after approved client material is supplied.",

    image:
      "https://images.unsplash.com/photo-1577894947058-cfdae4276bef?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

    clientMaterialRequired: true,
  },

  {
    id: "project-02",
    slug: "project-material-pending-02",
    number: "02",
    title: "Project Case Study — Material Pending",
    industry: "Industry information pending",
    location: "Project location pending",

    shortDescription:
      "A second editorial project profile reserved for approved Orient Blue case-study material.",

    overview:
      "Project overview information will be added when approved client documentation is available.",

    challenge:
      "Project challenge information will be added from approved client material.",

    approach:
      "Project methodology and implementation details will be added from verified documentation.",

    solution:
      "The final solution description will be based entirely on approved project information.",

    products: [],

    services: [],

    gallery: [
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=2200&q=85",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2200&q=85",
    ],

    outcome:
      "Verified project outcomes will be published when the relevant client material becomes available.",

    image:
      "https://plus.unsplash.com/premium_photo-1661609600871-9cb2081d68f2?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

    clientMaterialRequired: true,
  },

  {
    id: "project-03",
    slug: "project-material-pending-03",
    number: "03",
    title: "Project Case Study — Material Pending",
    industry: "Industry information pending",
    location: "Project location pending",

    shortDescription:
      "A reserved project showcase for future approved project photography and technical documentation.",

    overview:
      "This project page is structured to receive approved client information without requiring changes to the page architecture.",

    challenge:
      "Project challenge information is pending approved client documentation.",

    approach:
      "Project approach information is pending approved client documentation.",

    solution:
      "Project solution information is pending approved client documentation.",

    products: [],

    services: [],

    gallery: [
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=2200&q=85",
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=85",
    ],

    outcome:
      "The final documented outcome will be added after approved project material is supplied.",

    image:
      "https://images.unsplash.com/photo-1547895749-888a559fc2a7?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

    clientMaterialRequired: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}