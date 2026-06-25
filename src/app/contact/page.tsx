import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";
import {
  MailIcon,
  GlobeIcon,
  PeopleIcon,
  CheckIcon,
  CalendarIcon,
  LocationIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact A3 Technology Group",
  description:
    "Contact A3 Technology Group to discuss IT consulting, software development, business automation, partnerships, and collaboration.",
  alternates: { canonical: "/contact" },
};

const workWith = [
  "Businesses looking for technology solutions",
  "Organizations seeking digital transformation",
  "Individuals who want to develop and apply their skills",
  "Partners from different industries who want to create new opportunities",
  "Teams interested in building new projects, systems, or business models",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact A3 Technology Group"
        subtitle="Let’s Create New Value Together"
        description="A3 Technology Group is open to working with individuals, businesses, organizations, and partners who want to create meaningful value through technology, skill, and collaboration."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: context + info */}
            <div className="lg:col-span-5">
              <p className="leading-relaxed text-ink-light">
                Whether you are looking for IT consulting, software development,
                business automation, digital transformation, or cross-industry
                collaboration, we would be glad to hear from you.
              </p>

              <div className="mt-10">
                <h2 className="flex items-center gap-3 text-lg font-semibold text-navy">
                  <PeopleIcon className="h-5 w-5 text-gold-dark" />
                  Work With Us
                </h2>
                <p className="mt-3 text-sm text-ink-light">
                  We welcome conversations with:
                </p>
                <ul className="mt-4 space-y-3">
                  {workWith.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
                      <span className="text-ink-light">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 leading-relaxed text-ink-light">
                  At A3 Technology Group, we believe strong collaboration begins
                  with a conversation.
                </p>
              </div>

              {/* Contact details */}
              <div className="mt-10 space-y-4 rounded-2xl border border-navy-100 bg-navy-50/50 p-6">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">
                  Contact Information
                </h3>
                <dl className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <PeopleIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                    <div>
                      <dt className="text-ink-muted">Company</dt>
                      <dd className="font-medium text-navy">
                        {siteConfig.name}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GlobeIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                    <div>
                      <dt className="text-ink-muted">Website</dt>
                      <dd>
                        <a
                          href={`https://${siteConfig.domain}`}
                          className="font-medium text-navy hover:text-gold-dark"
                        >
                          {siteConfig.domain}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                    <div>
                      <dt className="text-ink-muted">Email</dt>
                      <dd>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="font-medium text-navy hover:text-gold-dark"
                        >
                          {siteConfig.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <LocationIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                    <div>
                      <dt className="text-ink-muted">Location</dt>
                      <dd>
                        <a
                          href={siteConfig.address.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-navy hover:text-gold-dark"
                        >
                          {siteConfig.address.line1}, {siteConfig.address.city},
                          <br />
                          {siteConfig.address.region}{" "}
                          {siteConfig.address.postalCode},{" "}
                          {siteConfig.address.country}
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              {/* Booking card */}
              <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/5 p-6">
                <h3 className="flex items-center gap-3 text-lg font-semibold text-navy">
                  <CalendarIcon className="h-5 w-5 text-gold-dark" />
                  Book a Meeting
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-light">
                  Prefer to talk directly? Schedule a time that works for you and
                  we&rsquo;ll meet online or in person.
                </p>
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
                >
                  Schedule a Meeting
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-10">
                <h2 className="text-2xl font-semibold text-navy">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-ink-light">
                  Fields marked with{" "}
                  <span className="text-gold-dark">*</span> are required.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing band */}
      <section className="bg-navy-900 py-16 text-center text-white">
        <Container>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-navy-100">
            Technology becomes powerful when it connects people, skills, and
            opportunity.
          </p>
          <p className="mt-4 font-serif text-2xl text-gold-light">
            Together, we create new value.
          </p>
        </Container>
      </section>
    </>
  );
}
