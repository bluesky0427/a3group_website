import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
};

/** Consistent heading block used to introduce sections across the site. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow", light && "text-gold-light")}>
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 text-3xl font-semibold leading-tight md:text-4xl",
          light && "text-white"
        )}
      >
        {title}
      </h2>
      <div
        className={cn("accent-rule mt-5", align === "center" && "mx-auto")}
      />
      {description && (
        <p
          className={cn(
            "mt-6 text-lg leading-relaxed",
            light ? "text-navy-100" : "text-ink-light"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
