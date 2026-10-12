import Link from "next/link";
import { notFound } from "next/navigation";

import {
  Container,
  Eyebrow,
  Heading,
  Section,
  TextBlock,
} from "@/components/ui";

import {
  getProductCategory,
  getProductsByCategory,
  productCategories,
} from "@/data/products";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return productCategories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function ProductCategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  const category = getProductCategory(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(slug);

  return (
    <main>
      <Section className="ob-section-dark ob-product-category-hero">
        <Container>
          <Eyebrow>
            Products / {category.name}
          </Eyebrow>

          <Heading level={1} className="!text-white">
            {category.name}
          </Heading>

          <TextBlock
            size="large"
            className="mt-8 max-w-[720px] !text-white/70"
          >
            {category.description}
          </TextBlock>
        </Container>
      </Section>

      <section className="ob-category-products">
        <Container>
          <div className="ob-category-products-header">
            <div>
              <Eyebrow>Product Range</Eyebrow>

              <Heading level={2}>
                Products in this category.
              </Heading>
            </div>

            <div className="ob-category-count">
              {category.productCount !== undefined
                ? `${category.productCount} products`
                : "Catalogue data pending"}
            </div>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="ob-product-list">
              {categoryProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="ob-product-list-card"
                >
                  <div className="ob-product-list-visual">
                    TECHNICAL VISUAL
                  </div>

                  <div className="ob-product-list-content">
                    <span>PRODUCT</span>

                    <h3>{product.name}</h3>

                    <p>{product.shortDescription}</p>

                    <strong>
                      View Product →
                    </strong>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="ob-product-empty">
              <span>CATALOGUE DATA</span>

              <h3>
                Product information will be added here.
              </h3>

              <p>
                The product catalogue is ready for
                client-approved products, specifications,
                applications and imagery.
              </p>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}