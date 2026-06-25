import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="bg-navy-900 text-white">
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <span className="font-serif text-6xl font-semibold text-gold-light">
          404
        </span>
        <h1 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-navy-100">
          The page you are looking for does not exist or may have moved. Let’s
          get you back on track.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
          <Button href="/contact" variant="ghost">
            Contact Us
          </Button>
        </div>
        <p className="mt-10 font-serif text-lg text-gold-light">
          Together, we create new value.
        </p>
        <Link
          href="/our-philosophy"
          className="mt-6 text-sm text-navy-100 underline-offset-4 hover:text-white hover:underline"
        >
          Explore our philosophy
        </Link>
      </Container>
    </section>
  );
}
