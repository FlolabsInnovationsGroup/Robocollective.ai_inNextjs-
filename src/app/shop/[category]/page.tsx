import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductsByCategory, PRODUCT_CATEGORIES } from "@/lib/products";
import { ProductCard } from "./ProductCard";

type Props = { params: Promise<{ category: string }> };

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const exists = PRODUCT_CATEGORIES.some((c) => c.slug === category);
  if (!exists) notFound();

  const products = getProductsByCategory(category);
  const categoryName = PRODUCT_CATEGORIES.find((c) => c.slug === category)?.name ?? category;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Link
        href="/shop"
        className="mb-6 inline-block text-theme-body transition hover:text-theme-heading"
      >
        ← Back to shop
      </Link>
      <h1 className="mb-6 text-3xl font-bold text-theme-heading sm:mb-8">{categoryName}</h1>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
