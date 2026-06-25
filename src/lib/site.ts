/**
 * Central site configuration — single source of truth for brand strings,
 * navigation, and contact details. Import from here so values stay consistent
 * across the header, footer, metadata, and pages.
 */

export const siteConfig = {
  name: "A3 Technology Group",
  shortName: "A3",
  domain: "a3technologygroup.com",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://a3technologygroup.com",
  tagline: "Connecting Technology, Human Skill, and Opportunity",
  description:
    "A3 Technology Group connects technology, human skill, and cross-industry collaboration to create new business value and opportunity.",
  email: "support@a3technologygroup.com",
  /** Google Appointment Scheduling page for booking a meeting. */
  bookingUrl: "https://calendar.app.google/tk5C6taEbNzapRpw9",
  address: {
    line1: "2-12-36 Komachi",
    city: "Kamakura",
    region: "Kanagawa",
    postalCode: "248-0006",
    country: "Japan",
    /** One-line form for compact display. */
    full: "2-12-36 Komachi, Kamakura, Kanagawa 248-0006, Japan",
    /** Google Maps link to the address. */
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=2-12-36+Komachi+Kamakura+Kanagawa+248-0006+Japan",
  },
  closingLine: "Together, we create new value.",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Our Philosophy", href: "/our-philosophy" },
  { label: "Contact", href: "/contact" },
];

/** Options shared between the contact form UI and the API validation. */
export const contactReasons = [
  "IT Consulting",
  "Software Development",
  "Business Automation",
  "Digital Transformation",
  "Partnership / Collaboration",
  "Talent / Skill Development",
  "Other",
] as const;

export type ContactReason = (typeof contactReasons)[number];
