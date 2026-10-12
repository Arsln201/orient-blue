import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsightDetailPage from "@/components/InsightDetailPage";
import { getInsight, insights } from "@/data/insights";

export const instant = false;

type InsightRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: InsightRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) {
    return {
      title: "Insight | Orient Blue FZ-L.L.C.",
    };
  }

  return {
    title: `${insight.title} | Orient Blue FZ-L.L.C.`,
    description: insight.excerpt,
  };
}

export default async function InsightRoute({
  params,
}: InsightRouteProps) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) {
    notFound();
  }

  const relatedInsights = insights.filter(
    (item) => item.id !== insight.id,
  );

  return (
    <InsightDetailPage
      insight={insight}
      relatedInsights={relatedInsights}
    />
  );
}
