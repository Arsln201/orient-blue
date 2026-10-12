
const routes: Record<string, string> = {
  // Main navigation
  Products: "/products",
  Solutions: "/solutions",
  Services: "/services",
  Industries: "/industries",
  Projects: "/projects",
  Company: "/company",
  Insights: "/insights",

  // Products
  "All Products": "/products",
  "Product Categories": "/products",
  "Featured Products": "/products",
  Applications: "/solutions",

  // Solutions and services
  Capabilities: "/capabilities",
  "Technical Services": "/services",
  Support: "/contact",
  Quality: "/capabilities",

  // Industries
  Industrial: "/industries/industrial",
  Energy: "/industries/energy",
  Infrastructure: "/industries/infrastructure",
  Technology: "/industries/technology",

  // Projects
  "Featured Projects": "/projects",
  "Case Studies": "/projects",

  // Company
  About: "/company",
  "Our Story": "/company",

  // Insights
  News: "/insights",
  "Technical Resources": "/insights",
};

export function getNavigationHref(label: string): string {
  return routes[label] ?? "/contact";
}
