import { notFound } from "next/navigation";

import ProductCategoryPage from "@/components/ProductCategoryPage";
import ProductDetailPage from "@/components/ProductDetailPage";
import {
  productCategories,
  products,
} from "@/data/products";

export const instant = false;

type ProductRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductRoute({
  params,
}: ProductRouteProps) {
  const { slug } = await params;

  const category = productCategories.find(
    (item) => item.slug === slug,
  );

  if (category) {
    const categoryProducts = products.filter(
      (product) => product.category === category.slug,
    );

    return (
      <ProductCategoryPage
        category={category}
        products={categoryProducts}
      />
    );
  }

  const product = products.find(
    (item) => item.slug === slug,
  );

  if (!product) {
    notFound();
  }

  const relatedProducts = product.relatedProducts
    .map((relatedSlug) =>
      products.find((item) => item.slug === relatedSlug),
    )
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <ProductDetailPage
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}
