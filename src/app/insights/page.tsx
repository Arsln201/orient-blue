import type { Metadata } from "next";
import InsightsPage from "@/components/InsightsPage";

export const metadata: Metadata = {
  title: "Insights | Orient Blue FZ-L.L.C.",
  description:
    "Technical insights, articles, product updates, resources and publications from Orient Blue FZ-L.L.C.",
};

export default function InsightsRoute() {
  return <InsightsPage />;
}