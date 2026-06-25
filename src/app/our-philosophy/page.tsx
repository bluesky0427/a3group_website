import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Philosophy",
  description:
    "A3 Technology Group believes everyone has skills, every field has value, and technology becomes powerful when it serves people.",
  alternates: { canonical: "/our-philosophy" },
};

const technologyExamples = [
  "A farmer using knowledge of land and seasons is using technology.",
  "A cleaner creating order and safety is using technology.",
  "A laborer applying physical skill and experience is using technology.",
  "A software engineer building systems is using technology.",
  "A doctor using medical knowledge to protect life is using technology.",
];

const divisionOfLabor = [
  { who: "A mathematician", what: "may understand structure and logic." },
  { who: "A physicist", what: "may understand the laws of nature." },
  { who: "A doctor", what: "may understand health and life." },
  {
    who: "A nurse",
    what: "may understand care, responsibility, and human support.",
  },
  {
    who: "A software engineer",
    what: "may understand systems and automation.",
  },
  { who: "A farmer", what: "may understand land, food, and production." },
  {
    who: "A laborer",
    what: "may understand materials, tools, and physical execution.",
  },
  { who: "A cleaner", what: "may understand order, detail, and safety." },
];

const finalBeliefs = [
  "Everyone has potential.",
  "Every skill has value.",
  "Technology becomes powerful when it serves people.",
  "Cooperation turns individual ability into shared progress.",
  "Opportunity allows hidden talent to become visible.",
];

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Philosophy"
        title="Our Philosophy"
        subtitle="Technology Begins With Human Potential"
        description="At A3 Technology Group, we believe technology is not only about software, machines, or digital systems. Technology begins with people — with their knowledge, skills, experience, cooperation, and ability to create value."
      />

      {/* Technology Begins With People */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Section One"
                title="Technology Begins With People"
              />
            </div>
            <div className="prose-a3 space-y-5 lg:col-span-7">
              <p>
                A3 Technology Group started in the IT industry, and technology
                remains at the core of our company. But our understanding of
                technology has grown deeper.
              </p>
              <p>
                We believe technology is not limited to computers, software,
                artificial intelligence, or digital platforms. Technology is the
                practical use of knowledge, tools, systems, and cooperation to
                solve problems and create value.
              </p>
              <ul className="space-y-3 border-l-2 border-gold pl-6">
                {technologyExamples.map((example) => (
                  <li
                    key={example}
                    className="text-base leading-relaxed text-ink md:text-lg"
                  >
                    {example}
                  </li>
                ))}
              </ul>
              <p className="font-serif text-xl text-navy">
                Technology exists wherever human skill is used with purpose.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The Power of Division of Labor */}
      <section className="bg-navy-50/60 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Section Two"
            title="The Power of Division of Labor"
            description="Human society advances because people do not all do the same work. Each person develops different knowledge, skills, and experience. When those differences are connected, society becomes stronger."
            align="center"
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-3 sm:grid-cols-2">
            {divisionOfLabor.map((item) => (
              <div
                key={item.who}
                className="rounded-xl border border-navy-100 bg-white p-5"
              >
                <p className="leading-relaxed text-ink-light">
                  <span className="font-semibold text-navy">{item.who}</span>{" "}
                  {item.what}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="font-serif text-2xl text-navy">No single field owns value.</p>
            <p className="mt-2 text-lg text-ink-light">
              Value is created when different fields work together.
            </p>
            <p className="mt-6 leading-relaxed text-ink-light">
              At A3 Technology Group, we believe the division of labor is not
              just an economic concept. It is one of the foundations of human
              creativity.
            </p>
          </div>
        </Container>
      </section>

      {/* Everyone Has Skills */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Section Three"
                title="Everyone Has Skills"
              />
            </div>
            <div className="prose-a3 space-y-5 lg:col-span-7">
              <p>
                We believe every person possesses skills. Some skills are
                recognized by society through titles, degrees, or professions.
                Other skills are quiet, practical, and developed through daily
                work and life experience.
              </p>
              <p>
                A person may not call themselves a specialist, but they may still
                possess discipline, creativity, patience, problem-solving
                ability, leadership, care, endurance, or practical intelligence.
              </p>
              <p>
                Some people are fully aware of their abilities. Others have not
                yet discovered what they can do because they have never been
                given the right opportunity.
              </p>
              <p>
                A3 Technology Group exists to help people recognize their value,
                develop their abilities, and participate in creating something
                greater.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Opportunity Reveals Potential */}
      <section className="bg-navy-900 py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Section Four"
                title="Opportunity Reveals Potential"
                light
              />
            </div>
            <div className="space-y-5 lg:col-span-7">
              <p className="text-lg leading-relaxed text-navy-100">
                Many people have abilities they do not yet recognize. Sometimes
                the problem is not a lack of talent. Sometimes the problem is a
                lack of opportunity, environment, guidance, or connection.
              </p>
              <p className="text-lg leading-relaxed text-navy-100">
                When people are encouraged to think proactively, take
                responsibility for their own lives, and use their abilities with
                purpose, they begin to create value.
              </p>
              <p className="text-lg leading-relaxed text-navy-100">
                A3 Technology Group helps create that environment. We guide
                people to recognize their strengths, connect with others, and
                use their potential to build opportunity, wealth, and meaningful
                contribution.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* How We Apply This Philosophy */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Section Five"
            title="How We Apply This Philosophy"
            description="Our philosophy guides the way we build, collaborate, and lead. We use technology as a bridge between people, industries, and opportunity."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              "We work with businesses that need practical solutions.",
              "We work with individuals who want to develop their skills.",
              "We work with people from different fields who can contribute unique knowledge and experience.",
              "We combine IT, business strategy, human ability, and cross-industry cooperation to create new value.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-navy-100 bg-navy-50/50 p-7"
              >
                <p className="leading-relaxed text-ink">{item}</p>
              </div>
            ))}
          </div>
          <div className="prose-a3 mt-12 max-w-3xl space-y-5">
            <p>
              For A3 Technology Group, innovation is not only about building
              software.
            </p>
            <p className="font-serif text-xl text-navy">
              Innovation means connecting the right people, the right skills, and
              the right technology to solve real problems.
            </p>
          </div>
        </Container>
      </section>

      {/* Final belief */}
      <section className="bg-navy-50/60 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Our Belief</span>
            <div className="mt-8 space-y-4">
              {finalBeliefs.map((belief) => (
                <p
                  key={belief}
                  className="font-serif text-2xl leading-snug text-navy md:text-3xl"
                >
                  {belief}
                </p>
              ))}
            </div>
            <div className="mx-auto mt-10 h-1 w-16 rounded-full bg-gold" />
            <p className="mt-10 text-lg leading-relaxed text-ink-light">
              This is the philosophy of A3 Technology Group. We create value by
              connecting technology, people, and purpose.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Everyone has potential. Every skill has value. Together, we can create something greater."
        primaryHref="/contact"
        primaryLabel="Work With Us"
        secondaryHref="/what-we-do"
        secondaryLabel="What We Do"
      />
    </>
  );
}
