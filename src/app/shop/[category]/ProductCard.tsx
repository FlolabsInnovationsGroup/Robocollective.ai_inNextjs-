import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-theme bg-theme-card shadow-sm transition hover:shadow-md dark:shadow-none">
      <Link href={`/products/${product.slug}`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={product.image ?? "/assets/products_shop_images/placeholder.png"}
            alt={product.name}
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <span className="rounded-lg border border-theme bg-theme-card px-2 py-0.5 text-xs font-medium text-theme-body">
            {product.category}
          </span>
          <h3 className="mt-2 font-semibold text-theme-heading transition hover:text-green-600 dark:hover:text-green-400">
            {product.name}
          </h3>
          {product.blurb && <p className="mt-1 text-sm text-theme-body">{product.blurb}</p>}
        </div>
      </Link>
      <div className="p-4 pt-0">
        <Link
          href={`/products/${product.slug}`}
          className="inline-block rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800"
        >
          View details
        </Link>
      </div>
    </article>
  );
}
