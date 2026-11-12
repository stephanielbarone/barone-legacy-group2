import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Article not found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="page-enter mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/blog"
        className="text-sm font-semibold text-gold-600 hover:underline"
      >
        ← Back to all articles
      </Link>

      <header className="mt-6">
        <div className="text-sm text-slate-500">
          {post.publishedDate} · {post.minutesToRead} min read
        </div>
        <h1 className="mt-2 text-2xl font-bold text-navy-900 sm:text-4xl">
          {post.title}
        </h1>
      </header>

      <div className="relative my-8 h-72 w-full overflow-hidden rounded-xl bg-slate-200 sm:h-96">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
          priority
        />
      </div>

      <div className="space-y-8 leading-relaxed text-slate-700">
        {post.sections.map((section, index) => (
          <section
            key={section.heading ?? index}
            className="space-y-4"
          >
            {section.heading && (
              <h2 className="text-2xl font-bold text-navy-900">
                {section.heading}
              </h2>
            )}
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
