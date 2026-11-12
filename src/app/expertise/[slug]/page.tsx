import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { expertiseTopics } from "@/data/expertise";

type ExpertisePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return expertiseTopics.map((topic) => ({
    slug: topic.slug,
  }));
}

export async function generateMetadata({
  params,
}: ExpertisePageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = expertiseTopics.find((item) => item.slug === slug);

  if (!topic) {
    return { title: "Topic not found" };
  }

  return {
    title: topic.title,
    description: topic.description,
  };
}

export default async function ExpertisePage({ params }: ExpertisePageProps) {
  const { slug } = await params;
  const topic = expertiseTopics.find((item) => item.slug === slug);

  if (!topic) {
    notFound();
  }

  return (
    <main className="page-enter mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/#expertise"
        className="text-sm font-semibold text-gold-600 hover:underline"
      >
        ← Back to Domains of Expertise
      </Link>

      <article>
        <header className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
            Domains of Expertise
          </p>
          <h1 className="mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
            {topic.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            {topic.introduction}
          </p>
        </header>

        <div className="mt-10 space-y-8 leading-relaxed text-slate-700">
          {topic.sections.map((section) => (
            <section key={section.heading} className="space-y-3">
              <h2 className="text-2xl font-bold text-navy-900">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        <aside className="mt-12 rounded-2xl bg-navy-900 p-5 text-white sm:p-8 lg:p-10">
          <h2 className="text-2xl font-bold">Planning for your next step?</h2>
          <p className="mt-3 leading-relaxed text-slate-300">
            A conversation can help you identify questions and explore options
            that fit your circumstances.
          </p>
          <Link
            href="https://calendly.com/stephanielbarone/free-consultation-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-button mt-6 inline-flex max-w-full flex-wrap justify-center rounded bg-gold-500 px-4 py-3 text-center font-semibold text-navy-900 transition hover:bg-gold-600 hover:text-white sm:px-6"
          >
            Schedule a Consultation
          </Link>
        </aside>

        <p className="mt-8 text-sm leading-relaxed text-slate-500">
          This information is for general educational purposes and is not
          individualized financial, tax, or legal advice. Strategies and
          products may not be suitable for everyone.
        </p>
      </article>
    </main>
  );
}
