import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import { PurchaseModal } from "./PurchaseModal";

type Props = { params: Promise<{ slug: string }> };

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Link
        href="/shop"
        className="mb-6 inline-block text-theme-body transition hover:text-theme-heading"
      >
        ← Back to shop
      </Link>

      <section className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="overflow-hidden rounded-2xl border border-theme shadow-sm">
          <img
            src={product.image ?? "/assets/products_shop_images/placeholder.png"}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <span className="rounded-lg border border-theme bg-theme-card px-3 py-1 text-sm font-medium text-theme-body">
            {product.category}
          </span>
          <h1 className="mt-3 text-3xl font-bold text-theme-heading sm:text-4xl">{product.name}</h1>
          {product.blurb && <p className="mt-4 text-lg text-theme-body">{product.blurb}</p>}
          <ul className="mt-4 space-y-2 text-theme-body">
            <li>• Part of our {product.category} lineup</li>
            <li>• Supported by RoboCollective.ai deployment services</li>
            <li>• Request a tailored quote for your use case</li>
          </ul>
          <div className="mt-8">
            <PurchaseModal product={product} />
          </div>
        </div>
      </section>
    </div>
  );
}
