import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";
import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-navy-100">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white font-serif text-lg font-bold text-navy">
                A3
              </span>
              <span className="font-serif text-lg font-semibold text-white">
                A3 Technology Group
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-100">
              Connecting technology, human skill, and opportunity to create new
              value.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-100 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <span className="text-navy-200">Website</span>
                <br />
                <a
                  href={`https://${siteConfig.domain}`}
                  className="text-navy-100 transition-colors hover:text-white"
                >
                  {siteConfig.domain}
                </a>
              </li>
              <li>
                <span className="text-navy-200">Email</span>
                <br />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-navy-100 transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="text-navy-200">Location</span>
                <br />
                <a
                  href={siteConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-100 transition-colors hover:text-white"
                >
                  {siteConfig.address.full}
                </a>
              </li>
              <li>
                <span className="text-navy-200">Book a meeting</span>
                <br />
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-100 transition-colors hover:text-white"
                >
                  Schedule online →
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-light"
            >
              Contact Us
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        {/* Closing line */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="font-serif text-lg text-white">
            Together, we create new value.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-xs text-navy-200 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} A3 Technology Group. All rights reserved.
            </p>
            <p>
              Connecting Technology, Human Skill, and Opportunity.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
