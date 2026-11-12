import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { blogPosts } from "@/data/posts";

const services = [
  {
    title: "Retirement Income Strategies",
    description:
      "Design sustainable, tax-advantaged retirement income streams that protect against market volatility and longevity risk.",
  },
  {
    title: "Customized Life Insurance",
    description:
      "Tailored Term, Whole, and Universal life policies structured to protect your loved ones and build long-term cash value.",
  },
  {
    title: "Business Continuity & Estate Coordination",
    description:
      "Key person insurance, buy-sell funding, and wealth preservation strategies for business owners and families.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section id="about" className="bg-navy-900 py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-500">
            Wealth Preservation · Life Protection · Retirement Security
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Protecting Your Family’s Future and Building a Lasting Legacy
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            At Barone Legacy Group, we partner with individuals, families, and
            business owners to craft clear, personalized strategies for
            retirement income and life insurance protection.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded bg-gold-500 px-6 py-3 font-semibold text-navy-900 transition hover:bg-gold-600"
            >
              Book a Complimentary Review
            </Link>
            <Link
              href="/blog"
              className="rounded border border-slate-500 px-6 py-3 font-semibold text-white transition hover:border-white"
            >
              Read Our Insights
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy-900">
            Comprehensive Financial &amp; Protection Solutions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Every household and business has unique goals. We build strategies
            around your timeline, budget, and legacy priorities.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-4 h-1 w-12 bg-gold-500" />
              <h3 className="text-xl font-bold text-navy-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-navy-900">
                Latest Retirement &amp; Insurance Insights
              </h2>
              <p className="mt-2 text-slate-600">
                Practical guides to help you make informed financial decisions.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden text-sm font-semibold text-gold-600 hover:underline md:inline"
            >
              View all articles →
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm"
              >
                <div className="relative h-48 w-full bg-slate-200">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-xs text-slate-500">
                    {post.publishedDate} · {post.minutesToRead} min read
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-navy-900">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition hover:text-gold-600"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm text-slate-600">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-navy-900 hover:text-gold-600"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
        <div className="rounded-2xl bg-navy-900 p-8 text-white sm:p-12">
          <h2 className="text-3xl font-bold">Start Your Legacy Plan</h2>
          <p className="mt-2 text-slate-300">
            Have questions about retirement savings or life insurance options?
            Send a message to schedule a one-on-one consultation.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
