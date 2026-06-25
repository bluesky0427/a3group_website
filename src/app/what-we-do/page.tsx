import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/content";
import { BridgeIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "A3 Technology Group provides IT consulting, software development, business automation, digital transformation, and cross-industry collaboration.",
  alternates: { canonical: "/what-we-do" },
};

const approachSteps = [
  {
    step: "01",
    title: "Understand the problem",
    text: "We start by listening — understanding the real challenge, context, and goals before proposing any solution.",
  },
  {
    step: "02",
    title: "Recognize the available skills",
    text: "We identify the knowledge, people, and capabilities already present, and what is needed to move forward.",
  },
  {
    step: "03",
    title: "Connect the right people",
    text: "We bring together the right skills across fields and industries to form a team capable of delivering value.",
  },
  {
    step: "04",
    title: "Build practical solutions",
    text: "We execute — turning ideas, skills, and technology into real solutions that create measurable value.",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="What We Do"
        subtitle="Technology-Driven Solutions for People, Businesses, and Society"
        description="A3 Technology Group provides technology-driven solutions and cross-industry collaboration opportunities for individuals, businesses, and organizations."
      />

      {/* Intro */}
      <section className="py-20 md:py-24">
        <Container>
          <div className="prose-a3 mx-auto max-w-3xl space-y-5 text-center">
            <p className="text-lg text-ink">
              We began with IT as our foundation, but our work extends beyond
              software alone. We combine technology, human skill, and practical
              execution to help people and organizations create new value.
            </p>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group relative flex flex-col rounded-2xl border border-navy-100 bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-soft"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy text-gold-light">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <span className="font-serif text-3xl font-semibold text-navy-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-6 text-xl font-semibold text-navy">
                  {service.title}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-light">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="bg-navy-900 py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Our Approach"
                title="Technology as a bridge between people, industries, and opportunity"
                light
              />
              <p className="mt-6 flex items-start gap-3 text-navy-100">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-gold-light">
                  <BridgeIcon className="h-5 w-5" />
                </span>
                <span className="pt-2">
                  We do not see technology as a separate world. We see it as a
                  bridge that connects people, industries, and opportunity.
                </span>
              </p>
            </div>

            <div className="lg:col-span-7">
              <ol className="space-y-6">
                {approachSteps.map((s) => (
                  <li
                    key={s.step}
                    className="flex gap-5 rounded-xl border border-white/10 bg-white/5 p-6"
                  >
                    <span className="font-serif text-2xl font-semibold text-gold-light">
                      {s.step}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {s.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-navy-100">
                        {s.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Whether you need technology consulting, software solutions, business automation, or a collaborative partner for a new idea — A3 Technology Group is ready to work with you."
        primaryHref="/contact"
        primaryLabel="Start a Conversation"
        secondaryHref="/about"
        secondaryLabel="About Us"
      />
    </>
  );
}
