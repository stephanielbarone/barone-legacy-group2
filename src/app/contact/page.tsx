import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Barone Legacy Group | Start a Conversation",
  description:
    "Your financial future deserves thoughtful attention. Start a conversation with Barone Legacy Group about your goals and financial needs.",
  alternates: {
    canonical: "https://www.baronelegacygroup.com/contact",
  },
  openGraph: {
    title: "Contact Barone Legacy Group | Start a Conversation",
    description:
      "Your financial future deserves thoughtful attention. Start a conversation with Barone Legacy Group about your goals and financial needs.",
    url: "https://www.baronelegacygroup.com/contact",
    siteName: "Barone Legacy Group",
    type: "website",
  },
};

const consultationUrl =
  "https://calendly.com/stephanielbarone/free-consultation-meeting";

export default function ContactPage() {
  return (
    <div className="page-enter">
      <section className="bg-[#F7F5F0] px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A98A55] sm:text-sm">
              Let&apos;s connect
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-[#142B45] sm:text-5xl">
              Let&apos;s Start a Conversation.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#566170] sm:text-lg">
              Your financial future deserves thoughtful attention. At Barone
              Legacy Group, we believe financial planning begins with
              understanding you, your goals, and what matters most to you. We
              welcome the opportunity to learn more about your financial needs
              and explore how we may help.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-[#E8E0D3] bg-white p-6 shadow-[0_18px_50px_rgba(20,43,69,0.08)] sm:mt-14 sm:p-10 lg:p-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#142B45] sm:text-3xl">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#566170] sm:text-base">
                Share a little about what brings you here. We&apos;ll make sure
                your message reaches our team.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-[#142B45] px-6 py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 sm:items-center lg:flex-row lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A46D] sm:text-sm">
              Complimentary introductory consultation
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Let&apos;s Talk About Your Financial Future.
            </h2>
            <p className="mt-4 leading-relaxed text-white/75 sm:text-lg">
              Whether you&apos;re planning for retirement, exploring investment
              strategies, or simply looking for a second opinion, we&apos;re
              here to help. We welcome the opportunity to connect and offer a
              complimentary introductory consultation.
            </p>
          </div>
          <a
            href={consultationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-button inline-flex shrink-0 items-center justify-center rounded-full bg-[#C5A46D] px-6 py-4 text-center text-sm font-semibold text-[#142B45] shadow-[0_10px_25px_rgba(197,164,109,0.2)] transition hover:bg-[#d7b980] sm:text-base"
          >
            Schedule Your Complimentary Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
