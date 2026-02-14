import Link from "next/link";

const POSTS = [
  {
    id: 1,
    title: "How Robots Help Restaurants Cut Costs: Embracing Restaurant Automation",
    summary:
      "Restaurants streamline delivery, inventory, and customer experience with automation that understands service flow.",
    href: "/blog/how-robots-help-restaurants-cut-costs",
    image: "/assets/dark/blog_25_sep.webp",
    publishedLabel: "September 25, 2025",
  },
  {
    id: 2,
    title: "Robot Rental for Events: Elevate Experiences with Cutting-Edge Robotics",
    summary:
      "Interactive robots forge unforgettable moments for university showcases, grand openings, and entertainment launches.",
    href: "/blog/robot-rental-for-events",
    image: "/assets/dark/blog_8_august.jpg",
    publishedLabel: "August 8, 2025",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="mb-8 text-3xl font-bold text-theme-heading sm:text-4xl">Insights & stories</h1>
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {POSTS.map((post) => (
          <article
            key={post.id}
            className="overflow-hidden rounded-2xl border border-theme bg-theme-card shadow-sm transition hover:shadow-md dark:shadow-none"
          >
            <Link href={post.href}>
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition hover:scale-105 duration-300"
                />
              </div>
            </Link>
            <div className="p-5 sm:p-6">
              {post.publishedLabel && (
                <div className="mb-2 text-sm text-theme-muted">{post.publishedLabel}</div>
              )}
              <h2 className="mb-2 text-xl font-semibold text-theme-heading transition hover:text-green-600 dark:hover:text-green-400">
                <Link href={post.href}>{post.title}</Link>
              </h2>
              <p className="mb-4 text-theme-body">{post.summary}</p>
              <Link
                href={post.href}
                className="inline-flex items-center font-medium text-green-600 transition hover:text-green-700 dark:text-green-500 dark:hover:text-green-400"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
