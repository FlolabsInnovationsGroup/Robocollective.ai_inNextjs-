import { PRODUCTS, type Product } from "../products";

export async function fetchProducts(): Promise<Product[]> {
  return Promise.resolve(PRODUCTS);
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  const product = PRODUCTS.find((p) => p.slug === slug);
  return Promise.resolve(product ?? null);
}
