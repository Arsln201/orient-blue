import { notFound } from "next/navigation";

import IndustryDetailPage from "@/components/IndustryDetailPage";
import {
  getIndustryRelations,
  industries,
} from "@/data/industries";
import { products } from "@/data/products";
import { services } from "@/data/services";

export const instant = false;

type IndustryRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function IndustryRoute({
  params,
}: IndustryRouteProps) {
  const { slug } = await params;

  const industry = industries.find(
    (item) => item.slug === slug,
  );

  if (!industry) {
    notFound();
  }

  const relations = getIndustryRelations(
    industry,
    products,
    services,
  );

  return (
    <IndustryDetailPage
      industry={industry}
      products={relations.products}
      services={relations.services}
    />
  );
}
