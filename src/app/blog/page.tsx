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
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold text-navy-900">
        Financial Planning Insights
      </h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Educational articles to help you navigate retirement preparation,
        compound growth, and life insurance coverage.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="relative h-52 w-full bg-slate-200">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
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
