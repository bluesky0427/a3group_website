import { cn } from "@/lib/cn";
import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/** Centered, max-width content wrapper with consistent horizontal padding. */
export default function Container({
  as: Tag = "div",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-container px-6 md:px-8", className)}>
      {children}
    </Tag>
  );
}
