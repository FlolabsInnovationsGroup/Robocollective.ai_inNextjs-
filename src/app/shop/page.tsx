import Link from "next/link";
import { PRODUCT_CATEGORIES } from "@/lib/products";

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <nav className="mb-10 flex flex-wrap gap-2" aria-label="Shop sections">
        {PRODUCT_CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            href={`/shop/${cat.slug}`}
            className="rounded-lg border border-theme bg-theme-card px-3 py-2 text-sm font-medium text-theme-heading transition hover:shadow-sm dark:shadow-none sm:px-4"
          >
            {cat.name}
          </Link>
        ))}
      </nav>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-theme-heading sm:mb-8">
          Choose a category to explore
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {[
            { name: "Nimble Drones", slug: "nimble-drones", desc: "Flapping-wing drones, bundles, and accessories.", img: "/assets/products_shop_images/flapper-nimble-base-kit_2.png" },
            { name: "Educational Robots", slug: "educational", desc: "Kits and companions for classrooms and labs.", img: "/assets/dark/Educational_Robots.png" },
            { name: "Industrial Robots", slug: "industrial", desc: "Automation, inspection, and material handling systems.", img: "/assets/dark/Industrial_Robots.png" },
            { name: "Service Robots", slug: "service", desc: "Hospitality, delivery, and customer-facing assistants.", img: "/assets/dark/Service_Robots.png" },
            { name: "Specialty Robots", slug: "specialty", desc: "Unique platforms and niche applications.", img: "/assets/dark/Speciality_Robots.png" },
            { name: "Accessories", slug: "accessories", desc: "Grippers, cameras, and robot accessories.", img: "/assets/dark/Educational_Robots.png" },
          ].map((cat) => (
            <article
              key={cat.slug}
              className="overflow-hidden rounded-2xl border border-theme bg-theme-card shadow-sm transition hover:shadow-md dark:shadow-none"
            >
              <div className="aspect-video overflow-hidden">
                <img src={cat.img} alt={cat.name} className="h-full w-full object-cover transition hover:scale-105 duration-300" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="mb-2 text-xl font-semibold text-theme-heading">{cat.name}</h3>
                <p className="mb-4 text-theme-body">{cat.desc}</p>
                <Link
                  href={`/shop/${cat.slug}`}
                  className="inline-block rounded-lg bg-green-700 px-4 py-2 font-medium text-white transition hover:bg-green-800"
                >
                  View {cat.name.toLowerCase()}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
