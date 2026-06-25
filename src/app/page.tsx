import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/content";
import {
  PeopleIcon,
  BridgeIcon,
  GrowthIcon,
  CheckIcon,
} from "@/components/Icons";

const beliefs = [
  {
    icon: PeopleIcon,
    title: "Innovation comes from people",
    text: "Software engineers, doctors, scientists, business leaders — and equally farmers, cleaners, laborers, service workers, technicians, and creators. Each person carries knowledge, experience, and ability that can contribute to society.",
  },
  {
    icon: BridgeIcon,
    title: "Cooperation creates value",
    text: "When different skills come together through cooperation and the division of labor, something new can be created — something no single person could build alone.",
  },
  {
    icon: GrowthIcon,
    title: "Opportunity reveals potential",
    text: "Some people have abilities they have not yet discovered, simply because they have not had the right opportunity. We help people recognize and mobilize their potential.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-24 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full bg-navy-500/40 blur-3xl"
        />

        <Container className="relative py-24 md:py-32">
          <div className="max-w-3xl animate-fade-up">
            <span className="eyebrow text-gold-light">
              Technology · Human Skill · Opportunity
            </span>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] text-white md:text-6xl lg:text-7xl">
              A3 Technology Group
            </h1>
            <p className="mt-6 text-xl font-medium text-gold-light md:text-2xl">
              Connecting Technology, Human Skill, and Opportunity
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100">
              A3 Technology Group began in the IT industry and grew with
              technology at its core. Today, our mission reaches beyond IT
              alone. We connect people, skills, industries, and ideas to create
              new value.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" variant="primary" size="lg">
                Contact Us
              </Button>
              <Button href="/about" variant="ghost" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Short company introduction */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Who We Are"
                title="We connect technology with human potential"
              />
              <div className="prose-a3 mt-6 space-y-5">
                <p>
                  A3 Technology Group began in the IT industry and grew with
                  technology at its core. Today, our mission reaches beyond IT
                  alone.
                </p>
                <p>
                  We connect people, skills, industries, and ideas to create new
                  value. By combining technology with human potential, we help
                  individuals, businesses, and communities discover new
                  opportunities for growth.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-semibold text-navy transition-colors hover:text-gold-dark"
                >
                  Read our story
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            {/* Stat / value panel */}
            <div className="relative">
              <div className="rounded-2xl border border-navy-100 bg-navy-50/50 p-8 shadow-card md:p-10">
                <p className="font-serif text-2xl leading-snug text-navy">
                  “Technology is the practical use of knowledge, skill, tools,
                  systems, and cooperation to solve problems and create value.”
                </p>
                <div className="mt-8 grid grid-cols-3 gap-6 border-t border-navy-100 pt-8">
                  {[
                    { k: "IT", v: "Our foundation" },
                    { k: "People", v: "Our strength" },
                    { k: "Value", v: "Our purpose" },
                  ].map((item) => (
                    <div key={item.k}>
                      <div className="font-serif text-2xl font-semibold text-gold-dark">
                        {item.k}
                      </div>
                      <div className="mt-1 text-sm text-ink-light">
                        {item.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. What We Believe */}
      <section className="bg-navy-50/60 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="What We Believe"
            title="Innovation does not come from technology alone. It comes from people."
            description="Every person has skills. At A3 Technology Group, we believe that when different skills come together through cooperation and the division of labor, something new can be created."
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {beliefs.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-navy-100 bg-white p-8 shadow-card transition-shadow hover:shadow-soft"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold-light">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-light">{b.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. What We Do */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What We Do"
              title="Technology-driven solutions and cross-industry collaboration"
              description="We provide solutions and collaboration opportunities for people and organizations that want to create meaningful value."
            />
            <Button href="/what-we-do" variant="secondary" className="shrink-0">
              Explore Services
            </Button>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex items-start gap-4 rounded-xl border border-navy-100 bg-white p-6 transition-all hover:border-gold/50 hover:shadow-card"
              >
                <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy transition-colors group-hover:bg-navy group-hover:text-gold-light">
                  <service.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-navy">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Our Mission */}
      <section className="bg-navy-900 py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Our Mission"
              title="Helping people and organizations mobilize their full potential"
              light
            />
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-navy-100">
                We guide individuals to think proactively, recognize their
                abilities, and create opportunities for their own future. We
                help businesses connect technology with people, ideas, and
                practical execution.
              </p>
              <p className="text-lg leading-relaxed text-navy-100">
                Through this, A3 Technology Group aims to create wealth,
                opportunity, and lasting value for society.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Recognize and develop individual potential",
                  "Connect technology with people and ideas",
                  "Create opportunity and lasting value for society",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-light" />
                    <span className="text-navy-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Final call to action */}
      <CTASection
        title="Whether you are a business owner, engineer, researcher, creator, worker, or someone ready to discover your own potential — A3 Technology Group is open to collaboration."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/our-philosophy"
        secondaryLabel="Our Philosophy"
      />
    </>
  );
}
