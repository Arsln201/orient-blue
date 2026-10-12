import type { Product } from "@/data/products";
import type { Service } from "@/data/services";

export type Industry = {
  id: string;
  slug: string;
  number: string;
  name: string;
  shortName: string;
  heroDescription: string;
  description: string;
  challenges: string[];
  capabilities: string[];
  productSlugs: string[];
  solutionSlugs: string[];
  serviceSlugs: string[];
  applications: string[];
  image: string;
  clientDataRequired: boolean;
};

export type IndustryWithRelations = Industry & {
  products: Product[];
  services: Service[];
};

export const industries: Industry[] = [
  /*
   * INDUSTRIES WILL BE ADDED HERE ONLY AFTER
   * ORIENT BLUE / CLIENT CONFIRMS THE ACTUAL
   * INDUSTRIES SERVED.
   *
   * Example structure:
   *
   * {
   *   id: "confirmed-industry",
   *   slug: "confirmed-industry",
   *   number: "01",
   *   name: "Client-Confirmed Industry",
   *   shortName: "Confirmed Industry",
   *   heroDescription: "...",
   *   description: "...",
   *   challenges: [],
   *   capabilities: [],
   *   productSlugs: [],
   *   solutionSlugs: [],
   *   serviceSlugs: [],
   *   applications: [],
   *   image: "...",
   *   clientDataRequired: false,
   * }
   */
];

export function getIndustryRelations(
  industry: Industry,
  products: Product[],
  services: Service[],
) {
  return {
    products: industry.productSlugs
      .map((slug) => products.find((product) => product.slug === slug))
      .filter((product): product is Product => Boolean(product)),

    services: industry.serviceSlugs
      .map((slug) => services.find((service) => service.slug === slug))
      .filter((service): service is Service => Boolean(service)),
  };
}
