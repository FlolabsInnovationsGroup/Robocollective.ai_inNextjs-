import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

const FEATURED_SLUGS = [
  "robodog-aliengo",
  "robodog-go2-go2-w",
  "robodog-go1",
  "humanoid-h1",
  "nimble-base-kit",
];
const FEATURED_PRODUCTS = FEATURED_SLUGS.map((slug) =>
  PRODUCTS.find((p) => p.slug === slug),
).filter(Boolean);

const BLOG_POSTS = [
  {
    id: 1,
    title:
      "How Robots Help Restaurants Cut Costs: Embracing Restaurant Automation",
    summary:
      "Restaurants streamline delivery, inventory, and customer experience with automation that understands service flow. We break down how robotics paired with predictive staffing keeps food on time and guests delighted.",
    href: "/blog/how-robots-help-restaurants-cut-costs",
    image: "/assets/dark/blog_25_sep.webp",
    publishedLabel: "SEPTEMBER 25, 2025",
  },
  {
    id: 2,
    title:
      "Robot Rental for Events: Elevate Experiences with Cutting-Edge Robotics",
    summary:
      "Interactive robots forge unforgettable moments for university showcases, grand openings, and entertainment launches. Discover how temporary deployments create lasting impact.",
    href: "/blog/robot-rental-for-events",
    image: "/assets/dark/blog_8_august.jpg",
    publishedLabel: "AUGUST 8, 2025",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden sm:min-h-[80vh]">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden>
            <source
              src="/assets/dark/hero-futuristic-quadrup.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 to-slate-900/95" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-400">
            Strategy · Systems · Experience
          </p>
          <h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Exclusive Brands & Models — Explore Our Most Advanced Robots at
            RoboCollective.ai
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base text-gray-300 sm:text-lg">
            Buy robots for sale from trusted makers worldwide – delivered,
            professionally set up, and fully supported wherever you are.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="/shop"
              className="rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800 sm:px-6 sm:py-3 sm:text-base">
              View our products
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-6 sm:py-3 sm:text-base">
              Contact Us
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-gray-400">
            <span>Trusted by engineering, product, and operations teams</span>
            <span className="text-gray-600">|</span>
            <span>Dynamic pricing, predictable ROI</span>
          </div>
        </div>
      </section>

      {/* Premium Robots / Expert Support / We Deliver To You */}
      <section
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
        id="highlights">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          {[
            {
              title: "Premium Robots",
              desc: "We offer high-quality robots and accessories built for real work.",
            },
            {
              title: "Expert Support",
              desc: "Talk to a specialist. We'll help you compare models and plan deployment.",
            },
            {
              title: "We Deliver To You",
              desc: "Global shipping, customs guidance, and on-site or remote setup.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-theme bg-theme-card p-6 shadow-sm sm:p-8">
              <h3 className="mb-3 text-xl font-bold text-theme-heading">
                {item.title}
              </h3>
              <p className="text-theme-body">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Meet CAIPO */}
      <section
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
        id="caipo">
        <div className="grid gap-8 rounded-2xl border border-theme bg-theme-card p-6 shadow-sm lg:grid-cols-2 lg:gap-12 lg:p-12">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold text-theme-heading sm:text-4xl">
              Meet CAIPO
            </h2>
            <p className="text-lg leading-relaxed text-theme-body">
              CAIPO combines tactile sensors, gesture intelligence, and a
              holographic interface to help teams experience next-generation
              robotic presence.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-violet-500/30 bg-gradient-to-br from-violet-950/50 to-slate-900/50 p-8 shadow-[0_0_40px_rgba(139,92,246,0.15)] dark:shadow-[0_0_60px_rgba(139,92,246,0.2)]">
            <div className="text-center">
              <p className="text-2xl font-bold sm:text-3xl">
                <span className="text-white">Meet </span>
                <span className="bg-gradient-to-r from-violet-400 to-violet-300 bg-clip-text text-transparent">
                  CAIPO
                </span>
              </p>
              <div className="mt-6 flex justify-center gap-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-violet-500/40 bg-violet-500/10">
                  <svg
                    className="h-7 w-7 text-violet-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    />
                  </svg>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-violet-500/40 bg-violet-500/10">
                  <svg
                    className="h-7 w-7 text-violet-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rent / Resell / List with us */}
      <section
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
        id="services">
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-theme bg-theme-card p-6 text-center shadow-sm sm:p-8">
            <h3 className="mb-4 text-xl font-bold text-theme-heading">Rent</h3>

            <ul className="mb-6 list-inside space-y-1 text-theme-body">
              <li>Full setup and technical support.</li>
              <li>Ideal for events, pilots, and research.</li>
            </ul>
            <Link
              href="/rent"
              className="inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800">
              See more
            </Link>
          </article>
          <article className="rounded-2xl border border-theme bg-theme-card p-6 text-center shadow-sm sm:p-8">
            <h3 className="mb-4 text-xl font-bold text-theme-heading">
              Resell Program
            </h3>
            <ul className="mb-6 list-inside space-y-1 text-theme-body">
              <li>Connect with qualified buyers.</li>
              <li>Simplify upgrades and fleet refresh.</li>
            </ul>
            <Link
              href="/resell"
              className="inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800">
              See more
            </Link>
          </article>
          <article className="rounded-2xl border border-theme bg-theme-card p-6 text-center shadow-sm sm:p-8">
            <h3 className="mb-4 text-xl font-bold text-theme-heading">
              List with us
            </h3>
            <ul className="mb-6 list-inside space-y-1 text-theme-body">
              <li>Rent your robot.</li>
              <li>Sell your robot.</li>
            </ul>
            <Link
              href="/contact?subject=list"
              className="inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800">
              Request info and pricing
            </Link>
          </article>
        </div>
      </section>

      {/* Browse Our Products - individual product cards */}
      <section
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
        id="products">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-theme-heading sm:text-3xl">
            Browse Our Products
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-theme-body">
            Exclusive robots and kits with specialist support.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {FEATURED_PRODUCTS.map((product) => (
            <article
              key={product?.id}
              className="overflow-hidden rounded-2xl border border-theme bg-theme-card shadow-sm transition hover:shadow-md dark:shadow-none">
              <Link href={`/products/${product?.slug}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={
                      product?.image ??
                      "/assets/products_shop_images/placeholder.png"
                    }
                    alt={product?.name}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-theme-heading">
                    {product?.name}
                  </h3>
                </div>
              </Link>
              <div className="p-4 pt-0">
                <Link
                  href={`/products/${product?.slug}`}
                  className="inline-block rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/shop"
            className="inline-block rounded-lg bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800">
            View all products
          </Link>
        </div>
      </section>

      {/* Read our latest posts */}
      <section
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
        id="blog">
        <div>
          <h2 className="text-2xl font-bold text-theme-heading sm:text-3xl">
            Read our latest posts
          </h2>
          <p className="mt-3 max-w-2xl text-theme-body">
            Guides & insights for choosing the right robot, delivered with
            customer research and product direction.
          </p>
        </div>
        <div className="mt-10 space-y-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-2xl border border-theme bg-theme-card shadow-sm transition hover:shadow-md dark:shadow-none">
              <div className="grid gap-0 sm:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
                <Link href={post.href} className="block">
                  <div className="aspect-video overflow-hidden sm:aspect-square sm:max-h-[240px]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-300 hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  {post.publishedLabel && (
                    <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-theme-muted">
                      {post.publishedLabel}
                    </div>
                  )}
                  <h3 className="mb-3 text-xl font-bold text-theme-heading sm:text-2xl">
                    <Link
                      href={post.href}
                      className="transition hover:text-green-600 dark:hover:text-green-400">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mb-4 flex-1 text-theme-body">{post.summary}</p>
                  <Link
                    href={post.href}
                    className="inline-flex font-medium text-green-600 transition hover:text-green-700 dark:text-green-500 dark:hover:text-green-400">
                    Read more...
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-block rounded-lg bg-green-700 px-8 py-3 font-semibold text-white transition hover:bg-green-800">
            View all posts
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
        id="cta">
        <div className="rounded-2xl border border-theme bg-theme-card p-8 text-center shadow-sm sm:p-12">
          <h2 className="text-2xl font-bold text-theme-heading sm:text-3xl">
            Embed RoboCollective.ai inside your next launch.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-theme-body">
            Share your most strategic ambition, and we&apos;ll co-create a
            roadmap that combines automation, intelligence, and creative rigor.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="/shop"
              className="rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800 sm:px-6 sm:py-3 sm:text-base">
              View our products
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:px-6 sm:py-3 sm:text-base">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
