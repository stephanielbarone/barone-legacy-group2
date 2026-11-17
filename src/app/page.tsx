import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { expertiseTopics } from "@/data/expertise";
import { blogPosts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Barone Legacy Group | Official Website",
  description:
    "Barone Legacy Group provides personalized retirement income, life insurance, and wealth preservation strategies for individuals, families, and business owners.",
  alternates: {
    canonical: "https://www.baronelegacygroup.com/",
  },
  openGraph: {
    title: "Barone Legacy Group | Official Website",
    description:
      "Barone Legacy Group provides personalized retirement income, life insurance, and wealth preservation strategies for individuals, families, and business owners.",
    url: "https://www.baronelegacygroup.com/",
    siteName: "Barone Legacy Group",
    type: "website",
  },
};

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

      <section className="relative overflow-hidden bg-[#142B45] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(197,164,109,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_28%)]" />
        <div className="page-enter relative mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C5A46D] sm:text-sm">
            Wealth Preservation · Life Protection · Retirement Security
          </p>
          <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Protecting Your Family’s Future and Building a Lasting Legacy
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            At Barone Legacy Group, we partner with individuals, families, and
            business owners to craft clear, personalized strategies for
            retirement income and life insurance protection.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="https://calendly.com/stephanielbarone/free-consultation-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-button inline-flex items-center justify-center rounded-full bg-[#C5A46D] px-5 py-3 text-center text-sm font-semibold text-[#142B45] shadow-[0_10px_25px_rgba(197,164,109,0.28)] hover:bg-[#d7b980] hover:text-[#142B45] sm:px-6"
            >
              Book a Complimentary Review
            </Link>
            <Link
              href="/blog"
              className="interactive-button inline-flex items-center justify-center rounded-full border border-white/35 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white hover:border-[#C5A46D] hover:text-[#C5A46D] sm:px-6"
            >
              Read Our Insights
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A46D]">
            what we do
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#142B45] sm:text-4xl">
            Comprehensive Financial &amp; Protection Solutions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#566170]">
            Every household and business has unique goals. We build strategies
            around your timeline, budget, and legacy priorities.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="interactive-card rounded-2xl border border-[#E8E0D3] bg-white p-6 shadow-[0_10px_30px_rgba(20,43,69,0.04)] sm:last:col-span-2 sm:p-8 lg:last:col-span-1"
            >
              <div className="mb-5 h-1.5 w-14 rounded-full bg-[#C5A46D]" />
              <h3 className="text-xl font-bold text-[#142B45]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#566170]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-[#E8E0D3] bg-[#F7F5F0] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A46D]">
              our team
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#142B45] sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#566170]">
              Dedicated professionals committed to guiding you through every
              stage of your financial journey.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2">
            <div className="interactive-card overflow-hidden rounded-2xl border border-[#E8E0D3] bg-white p-5 text-center shadow-[0_10px_30px_rgba(20,43,69,0.04)] sm:p-6">
              <div className="relative mx-auto mb-6 h-44 w-44 overflow-hidden rounded-full border-4 border-[#F2EEE8] bg-[#F7F5F0] shadow-inner">
                <Image
                  src="/images/stephanie-barone.avif"
                  alt="Stephanie Barone"
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#142B45]">
                Stephanie Barone
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#C5A46D]">
                Health &amp; Life Insurance Sales Representative
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#566170]">
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

            <div className="interactive-card overflow-hidden rounded-2xl border border-[#E8E0D3] bg-white p-5 text-center shadow-[0_10px_30px_rgba(20,43,69,0.04)] sm:p-6">
              <div className="relative mx-auto mb-6 h-44 w-44 overflow-hidden rounded-full border-4 border-[#F2EEE8] bg-[#F7F5F0] shadow-inner">
                <Image
                  src="/images/steve-barone.avif"
                  alt="Steve Barone"
                  fill
                  sizes="176px"
                  className="object-cover object-top scale-95"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#142B45]">
                Steve Barone
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#C5A46D]">
                Financial &amp; Insurance Specialist
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#566170]">
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

      <section id="expertise" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A46D]">
              expertise
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#142B45] sm:text-4xl">
              Domains of Expertise
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#566170]">
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
                className="interactive-card rounded-2xl border border-[#E8E0D3] bg-[#F7F5F0]"
              >
                <Link
                  href={`/expertise/${item.slug}`}
                  className="group block h-full rounded-2xl p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A46D] focus-visible:ring-offset-2 sm:p-6"
                >
                  <h3 className="font-bold text-[#142B45] group-hover:text-[#A98A55]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#566170]">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[#C5A46D]">
                    Explore this topic →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-[#E8E0D3] bg-[#F7F5F0] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A46D]">
                insights
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#142B45] sm:text-4xl">
                Latest Retirement &amp; Insurance Insights
              </h2>
              <p className="mt-2 text-base text-[#566170]">
                Practical guides to help you make informed financial decisions.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-[#A98A55] hover:text-[#142B45]"
            >
              View all articles →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="interactive-card flex flex-col overflow-hidden rounded-2xl border border-[#E8E0D3] bg-white shadow-[0_10px_30px_rgba(20,43,69,0.04)]"
              >
                <div className="relative h-48 w-full bg-[#F2EEE8]">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="text-xs font-medium uppercase tracking-[0.12em] text-[#566170]">
                    {post.publishedDate} · {post.minutesToRead} min read
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-[#142B45] sm:text-xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition hover:text-[#A98A55]"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-[#566170]">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-5 inline-block text-sm font-semibold text-[#142B45] hover:text-[#A98A55]"
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
        <div className="rounded-[28px] bg-[#142B45] p-6 text-center text-white shadow-[0_18px_50px_rgba(20,43,69,0.12)] sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A46D]">
            schedule
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Schedule a Consultation</h2>
          <p className="mt-3 text-base leading-relaxed text-white/75">
            Choose a time for a complimentary consultation.
          </p>
          <Link
            href="https://calendly.com/stephanielbarone/free-consultation-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-button mt-7 inline-flex items-center justify-center rounded-full bg-[#C5A46D] px-5 py-3 text-center text-sm font-semibold text-[#142B45] shadow-[0_10px_25px_rgba(197,164,109,0.28)] hover:bg-[#d7b980] hover:text-[#142B45] sm:px-6"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
