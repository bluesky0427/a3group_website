/**
 * Tiny class-name joiner. Keeps JSX readable without pulling in a dependency.
 * Falsy values are ignored so you can do: cn("base", isActive && "active").
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
