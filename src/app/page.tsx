import Image from "next/image";
import Link from "next/link";
import { expertiseTopics } from "@/data/expertise";
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
      <div
        className="brand-marquee"
        role="region"
        aria-label="Barone Legacy Group planning principles"
      >
        <div className="brand-marquee__track">
          <div className="brand-marquee__group">
            <span>Protect what matters</span>
            <span aria-hidden="true">✦</span>
            <span>Plan with clarity</span>
            <span aria-hidden="true">✦</span>
            <span>Build a lasting legacy</span>
          </div>
          <div className="brand-marquee__group" aria-hidden="true">
            <span>Protect what matters</span>
            <span aria-hidden="true">✦</span>
            <span>Plan with clarity</span>
            <span aria-hidden="true">✦</span>
            <span>Build a lasting legacy</span>
          </div>
        </div>
      </div>

      <section className="bg-navy-900 py-16 text-white sm:py-20 lg:py-24">
        <div className="page-enter mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-500 sm:text-sm">
            Wealth Preservation · Life Protection · Retirement Security
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Protecting Your Family’s Future and Building a Lasting Legacy
          </h1>
          <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
            At Barone Legacy Group, we partner with individuals, families, and
            business owners to craft clear, personalized strategies for
            retirement income and life insurance protection.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="https://calendly.com/stephanielbarone/free-consultation-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-button w-full rounded bg-gold-500 px-5 py-3 text-center font-semibold text-navy-900 transition hover:bg-gold-600 hover:text-white sm:w-auto sm:px-6"
            >
              Book a Complimentary Review
            </Link>
            <Link
              href="/blog"
              className="interactive-button w-full rounded border border-slate-500 px-5 py-3 text-center font-semibold text-white transition hover:border-white sm:w-auto sm:px-6"
            >
              Read Our Insights
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
            Comprehensive Financial &amp; Protection Solutions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Every household and business has unique goals. We build strategies
            around your timeline, budget, and legacy priorities.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="interactive-card rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:last:col-span-2 sm:p-8 lg:last:col-span-1"
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

      <section id="about" className="border-y border-cream-200 bg-cream-100 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-navy-900">Meet Our Team</h2>
            <p className="mt-3 text-slate-600">
              Dedicated professionals committed to guiding you through every
              stage of your financial journey.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2">
            <div className="interactive-card overflow-hidden rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm sm:p-6">
              <div className="relative mx-auto mb-6 h-44 w-44 overflow-hidden rounded-full bg-slate-200">
                <Image
                  src="/images/stephanie-barone.avif"
                  alt="Stephanie Barone"
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-navy-900">
                Stephanie Barone
              </h3>
              <p className="mt-1 text-sm font-semibold text-gold-600">
                Health &amp; Life Insurance Sales Representative
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Hi, I’m Stephanie. I’ve learned that life insurance isn’t just
                about policies, it’s about protecting the people you love. As
                an independent insurance broker I have the opportunity to have
                access to a multitude of companies to find the best fit for my
                clients. I take pride in providing personalized, jargon-free
                advice to help families secure their financial future. When
                I’m not helping clients, I’m likely spending time with my four
                legged friends, cooking or enjoying time with my family. Let’s
                connect to build a plan that gives you peace of mind.
              </p>
            </div>

            <div className="interactive-card overflow-hidden rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm sm:p-6">
              <div className="relative mx-auto mb-6 h-44 w-44 overflow-hidden rounded-full bg-slate-200">
                <Image
                  src="/images/steve-barone.avif"
                  alt="Steve Barone"
                  fill
                  sizes="176px"
                  className="object-cover object-top scale-95"
                />
              </div>
              <h3 className="text-xl font-bold text-navy-900">
                Steve Barone
              </h3>
              <p className="mt-1 text-sm font-semibold text-gold-600">
                Financial &amp; Insurance Specialist
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Hello, I’m Steve, a dedicated Retirement and Insurance
                Specialist with over 18 years of experience, passionate about
                turning complex financial landscapes into clear paths for
                retirement success. I recognize the need for personalized,
                empathetic planning. I specialize in all-encompassing
                retirement success. I believe in providing tailored, actionable
                advice to help clients protect their assets and enjoy their
                golden years. When I&apos;m not in the office, I enjoy watching
                my favorite sports teams, the Buffalo Bills &amp; LA Lakers. I
                love spending time with my wife Stephanie and dog Beans,
                soaking up the sun. Let&apos;s connect to start building
                your legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="bg-cream-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-navy-900">
              Domains of Expertise
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              We specialize in translating complex financial instruments into
              clear, actionable strategies. Our goal is to ensure you have the
              right coverage, competitive pricing, and a roadmap for long-term
              success.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {expertiseTopics.map((item) => (
              <li
                key={item.slug}
                className="interactive-card rounded-xl border border-cream-200 bg-white"
              >
                <Link
                  href={`/expertise/${item.slug}`}
                  className="group block h-full rounded-xl p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 sm:p-6"
                >
                  <h3 className="font-bold text-navy-900 group-hover:text-gold-600">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-gold-600">
                    Explore this topic →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
                Latest Retirement &amp; Insurance Insights
              </h2>
              <p className="mt-2 text-slate-600">
                Practical guides to help you make informed financial decisions.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-gold-600 hover:underline"
            >
              View all articles →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="interactive-card flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm"
              >
                <div className="relative h-48 w-full bg-slate-200">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="text-xs text-slate-500">
                    {post.publishedDate} · {post.minutesToRead} min read
                  </div>
                  <h3 className="mt-2 text-base font-bold text-navy-900 sm:text-lg">
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

      <section id="contact" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="rounded-2xl bg-navy-900 p-6 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Schedule a Consultation</h2>
          <p className="mt-2 text-slate-300">
            Choose a time for a complimentary consultation.
          </p>
          <Link
            href="https://calendly.com/stephanielbarone/free-consultation-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-button mt-6 inline-flex max-w-full flex-wrap justify-center rounded bg-gold-500 px-4 py-3 text-center font-semibold text-navy-900 transition hover:bg-gold-600 hover:text-white sm:px-6"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
