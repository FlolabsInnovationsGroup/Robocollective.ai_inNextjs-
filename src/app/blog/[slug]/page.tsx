import Link from "next/link";
import { notFound } from "next/navigation";

const POSTS: Record<string, { title: string; summary: string; image: string; publishedLabel: string }> = {
  "how-robots-help-restaurants-cut-costs": {
    title: "How Robots Help Restaurants Cut Costs: Embracing Restaurant Automation",
    summary:
      "Restaurants streamline delivery, inventory, and customer experience with automation that understands service flow.",
    image: "/assets/dark/blog_25_sep.webp",
    publishedLabel: "September 25, 2025",
  },
  "robot-rental-for-events": {
    title: "Robot Rental for Events: Elevate Experiences with Cutting-Edge Robotics",
    summary:
      "Interactive robots forge unforgettable moments for university showcases, grand openings, and entertainment launches.",
    image: "/assets/dark/blog_8_august.jpg",
    publishedLabel: "August 8, 2025",
  },
};

type Props = { params: Promise<{ slug: string }> };

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        href="/blog"
        className="mb-6 inline-block text-theme-body transition hover:text-theme-heading"
      >
        ← Back to blog
      </Link>
      <article>
        {post.publishedLabel && (
          <div className="mb-4 text-sm text-theme-muted">{post.publishedLabel}</div>
        )}
        <h1 className="mb-6 text-3xl font-bold text-theme-heading sm:text-4xl">{post.title}</h1>
        <div className="aspect-video overflow-hidden rounded-2xl border border-theme">
          <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
        </div>
        <p className="mt-8 text-lg leading-relaxed text-theme-body">{post.summary}</p>
      </article>
    </div>
  );
}
