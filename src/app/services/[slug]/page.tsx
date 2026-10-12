import { notFound } from "next/navigation";

import ServiceDetailPage from "@/components/ServiceDetailPage";
import { services } from "@/data/services";

export const instant = false;

type ServiceRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServiceRoute({
  params,
}: ServiceRouteProps) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter(
    (item) => item.id !== service.id,
  );

  return (
    <ServiceDetailPage
      service={service}
      relatedServices={relatedServices.slice(0, 3)}
    />
  );
}
