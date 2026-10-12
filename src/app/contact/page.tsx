import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const instant = false;

export const metadata: Metadata = {
  title: "Contact | Orient Blue FZ-L.L.C.",
  description:
    "Contact Orient Blue FZ-L.L.C. to discuss products, technical requirements and industrial solutions.",
};

type ContactRouteProps = {
  searchParams: Promise<{
    product?: string;
    service?: string;
  }>;
};

export default async function ContactRoute({
  searchParams,
}: ContactRouteProps) {
  const params = await searchParams;

  return (
    <ContactPage
      product={params.product}
      service={params.service}
    />
  );
}
