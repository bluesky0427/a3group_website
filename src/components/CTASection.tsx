import Container from "./Container";
import Button from "./Button";
import type { ReactNode } from "react";

type CTASectionProps = {
  title: ReactNode;
  body?: ReactNode;
  closing?: ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

/** Reusable closing call-to-action band shared by most pages. */
export default function CTASection({
  title,
  body,
  closing = "Together, we create new value.",
  primaryHref = "/contact",
  primaryLabel = "Contact Us",
  secondaryHref,
  secondaryLabel,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight text-white md:text-4xl">
          {title}
        </h2>
        {body && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-100">
            {body}
          </p>
        )}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={primaryHref} variant="primary" size="lg">
            {primaryLabel}
          </Button>
          {secondaryHref && secondaryLabel && (
            <Button href={secondaryHref} variant="ghost" size="lg">
              {secondaryLabel}
            </Button>
          )}
        </div>
        {closing && (
          <p className="mt-12 font-serif text-2xl text-gold-light">{closing}</p>
        )}
      </Container>
    </section>
  );
}
