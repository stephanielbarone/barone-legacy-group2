import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Insights & Blog | Barone Legacy Group",
  description:
    "Articles on retirement savings strategies, life insurance basics, and long-term financial planning.",
};

export default function BlogIndexPage() {
  return (
    <div className="page-enter mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold text-navy-900 sm:text-4xl">
        Financial Planning Insights
      </h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Educational articles to help you navigate retirement preparation,
        compound growth, and life insurance coverage.
      </p>

      <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="interactive-card flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="relative h-52 w-full bg-slate-200">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <span className="text-xs text-slate-500">
                {post.publishedDate} · {post.minutesToRead} min read
              </span>
              <h2 className="mt-2 text-xl font-bold text-navy-900">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition hover:text-gold-600"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm text-slate-600">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-block text-sm font-semibold text-navy-900 hover:text-gold-600"
              >
                Read Full Post →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
