import React from "react";

export default function Faculty() {
  const benefits = [
    {
      title: "Pension Planning",
      description:
        "Understand your pension benefits, retirement options, and how they fit into your overall financial picture.",
    },
    {
      title: "403(b) Strategies",
      description:
        "Explore tax-advantaged retirement savings and make informed decisions about your 403(b).",
    },
    {
      title: "457 Plans",
      description:
        "Learn how a 457 plan may complement your pension and other retirement savings.",
    },
    {
      title: "Comprehensive Planning",
      description:
        "From investment strategies to long-term goals, build a financial plan designed around your life.",
    },
  ];

  return (
    <div className="bg-white text-slate-800">
      {/* HERO */}
      <section className="bg-[#102B36] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[#D6BCA0]">
            Dedicated to Educators
          </p>

          <h1 className="mb-6 max-w-3xl font-serif text-4xl font-semibold leading-tight md:text-6xl">
            You Shape Their Future. Let Us Help Plan Yours.
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-slate-200 md:text-xl">
            Financial guidance designed for faculty, teachers, and academic
            professionals.
          </p>

          <p className="mb-10 max-w-2xl leading-relaxed text-slate-300">
            Your career in education comes with unique financial opportunities
            and challenges. We&apos;re here to help you make the most of every
            one.
          </p>

          <a
            href="/contact"
            className="inline-block rounded bg-[#C6A77D] px-8 py-4 font-semibold text-[#102B36] transition hover:bg-[#D5B991]"
          >
            Schedule a Complimentary Consultation
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-[#A88963]">
            A Financial Partner Who Understands Education
          </p>

          <h2 className="mb-8 font-serif text-3xl text-[#183845] md:text-4xl">
            Dedicated to Those Who Dedicate Their Lives to Education
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
            We value the opportunity to work closely with teachers, faculty
            members, administrators, and academic professionals throughout our
            community.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We understand that educators often have unique retirement benefits
            and financial considerations. Our goal is to simplify the complex,
            provide personalized guidance, and help you make confident financial
            decisions throughout your career.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F5F4F0] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm uppercase tracking-widest text-[#A88963]">
              Specialized Knowledge
            </p>

            <h2 className="font-serif text-3xl text-[#183845] md:text-4xl">
              Financial Planning for the Academic Community
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-600">
              We are well versed in the retirement plans and financial
              considerations commonly associated with careers in education.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-lg border-t-2 border-[#C6A77D] bg-white p-8 shadow-sm"
              >
                <h3 className="mb-4 font-serif text-xl text-[#183845]">
                  {benefit.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-slate-500">
            And much more, including investment planning, tax-aware strategies,
            and coordination of your overall financial picture.
          </p>
        </div>
      </section>

      {/* COMMUNITY COMMITMENT */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-widest text-[#A88963]">
              Our Commitment to Educators
            </p>

            <h2 className="mb-6 font-serif text-3xl text-[#183845] md:text-4xl">
              Giving Back to Those Who Give So Much
            </h2>

            <p className="mb-5 leading-8 text-slate-600">
              We believe the people who invest so much in our community deserve
              access to thoughtful financial guidance.
            </p>

            <p className="mb-5 leading-8 text-slate-600">
              As a way of giving back to our local teaching community, we
              proudly offer complimentary financial consultations and planning
              conversations for educators and academic professionals.
            </p>

            <p className="leading-8 text-slate-600">
              Whether you&apos;re just beginning your career, approaching
              retirement, or planning your next chapter, we&apos;re happy to be a
              resource along the way.
            </p>
          </div>

          <div className="rounded-lg bg-[#102B36] p-10 text-white">
            <h3 className="mb-6 font-serif text-2xl">
              Let&apos;s Start a Conversation
            </h3>

            <p className="mb-8 leading-7 text-slate-300">
              No pressure. No obligation. Just an opportunity to ask questions,
              explore your options, and gain a better understanding of your
              financial future.
            </p>

            <a
              href="/contact"
              className="block rounded bg-[#C6A77D] px-6 py-4 text-center font-semibold text-[#102B36] transition hover:bg-[#D5B991]"
            >
              Connect With Our Team
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#F5F4F0] px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 font-serif text-3xl text-[#183845] md:text-4xl">
            Your Work Matters. Your Financial Future Does Too.
          </h2>

          <p className="mb-8 text-lg leading-8 text-slate-600">
            Let us help you navigate the financial decisions that come with a
            career in education. We would welcome the opportunity to work with
            you.
          </p>

          <a
            href="/contact"
            className="inline-block rounded bg-[#102B36] px-8 py-4 font-semibold text-white transition hover:bg-[#254B59]"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
