import Container from "./Container";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
};

/** Dark, branded hero band used at the top of interior pages. */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      {/* Decorative background grid + glow */}
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
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-navy-500/40 blur-3xl"
      />

      <Container className="relative py-20 md:py-28">
        <div className="max-w-3xl animate-fade-up">
          {eyebrow && (
            <span className="eyebrow text-gold-light">{eyebrow}</span>
          )}
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-xl font-medium text-gold-light md:text-2xl">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
