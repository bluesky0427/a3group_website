import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About A3 Technology Group",
  description:
    "Learn about A3 Technology Group, a company founded in IT and built on technology, people, skills, cooperation, and opportunity.",
  alternates: { canonical: "/about" },
};

const blocks = [
  {
    eyebrow: "Our Story",
    title: "From IT solutions to a broader vision",
    paragraphs: [
      "Our company was built from the belief that technology can help people and businesses move forward. At first, this meant focusing on IT solutions, software, systems, and digital transformation.",
      "Over time, our vision expanded. We saw that real innovation happens when different people bring different skills together. Software engineers, scientists, doctors, nurses, business owners, technicians, farmers, laborers, cleaners, service workers, and creators all carry knowledge that can contribute to society.",
      "Each field has its own value. Each person has experience. Each skill can become part of something greater when connected with the right opportunity.",
    ],
  },
  {
    eyebrow: "Our Purpose",
    title: "Connecting technology with human potential",
    paragraphs: [
      "A3 Technology Group exists to connect technology with human potential. We help individuals and organizations recognize their strengths, think proactively, and use their abilities to build a better future.",
      "Our goal is not only to provide technical solutions, but also to create systems and opportunities that allow people to participate, contribute, and grow.",
      "We believe many people have abilities they have not yet discovered. Sometimes, what they need is not more talent, but the right environment, guidance, and opportunity.",
    ],
  },
  {
    eyebrow: "Our Vision",
    title: "An enterprise built on people and collaboration",
    paragraphs: [
      "Our vision is to build an enterprise where people from many sectors of society can combine their skills and create something new together.",
      "Through the power of division of labor, cooperation, and technology, A3 Technology Group aims to create wealth, opportunity, and meaningful value for society.",
      "We are not only a technology company. We are a company built on people, skills, collaboration, and the belief that everyone has the potential to create value.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About A3 Technology Group"
        subtitle="From IT Foundation to Cross-Industry Innovation"
      />

      {/* Lead copy */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="prose-a3 mx-auto max-w-3xl space-y-6">
            <p className="text-xl leading-relaxed text-ink">
              A3 Technology Group began in the IT industry. Technology was our
              starting point, our foundation, and the core through which our
              company first grew.
            </p>
            <p>
              But as we continued to build, collaborate, and lead, we came to
              understand something important: technology is not limited to
              software, computers, or digital systems. True technology is the
              practical use of knowledge, skill, tools, and cooperation to solve
              problems and create value.
            </p>
            <p>
              Today, A3 Technology Group works beyond the boundaries of IT
              alone. We connect people from different industries, backgrounds,
              and areas of expertise to create new opportunities and new forms
              of value.
            </p>
          </div>
        </Container>
      </section>

      {/* Alternating story blocks */}
      <section className="border-t border-navy-100 bg-navy-50/50">
        <Container className="divide-y divide-navy-100">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="grid gap-8 py-16 md:grid-cols-12 md:gap-12 md:py-20"
            >
              <div className="md:col-span-5">
                <SectionHeading
                  eyebrow={block.eyebrow}
                  title={block.title}
                />
              </div>
              <div className="prose-a3 space-y-5 md:col-span-7">
                {block.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <CTASection
        title="We are a company built on people, skills, and the belief that everyone has the potential to create value."
        body="Learn how our philosophy shapes the way we build, collaborate, and lead."
        primaryHref="/our-philosophy"
        primaryLabel="Our Philosophy"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
