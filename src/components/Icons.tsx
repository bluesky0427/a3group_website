import type { SVGProps } from "react";

/**
 * Minimal, consistent line-icon set drawn as inline SVG so the site ships
 * with zero icon-library dependencies. All icons inherit `currentColor`.
 */

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ConsultingIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
      <circle cx="12" cy="12" r="3.5" />
    </Base>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m8 9-3 3 3 3M16 9l3 3-3 3M13.5 7l-3 10" />
    </Base>
  );
}

export function AutomationIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 7h9M4 7l3-3M4 7l3 3M20 17h-9M20 17l-3-3M20 17l-3 3" />
      <circle cx="17" cy="7" r="2.5" />
      <circle cx="7" cy="17" r="2.5" />
    </Base>
  );
}

export function TransformIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 7M21 12a9 9 0 0 1-15 6.7L3 17" />
      <path d="M21 4v3h-3M3 20v-3h3" />
    </Base>
  );
}

export function CollaborationIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="8" cy="8" r="2.5" />
      <circle cx="16" cy="8" r="2.5" />
      <path d="M3.5 19a4.5 4.5 0 0 1 9 0M11.5 19a4.5 4.5 0 0 1 9 0" />
    </Base>
  );
}

export function TalentIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3l2.1 4.5L19 8.3l-3.6 3.4.9 4.9L12 14.3 7.7 16.6l.9-4.9L5 8.3l4.9-.8L12 3Z" />
      <path d="M9 21h6" />
    </Base>
  );
}

export function NewBusinessIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 14c4 0 6-3 6-7 0-1-.1-2-.3-2.7C17 4.1 16 4 15 4c-4 0-7 2-7 6 0 0 1 4 4 4Z" />
      <path d="M8 16c-1.5.5-2.5 2-2.5 4 2 0 3.5-1 4-2.5M12 14v5M8 10H5l-1 3" />
    </Base>
  );
}

export function BridgeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 9c2 0 3-1 3-3M21 9c-2 0-3-1-3-3M3 9v8M21 9v8M3 13h18M8 13v4M12 13v4M16 13v4" />
    </Base>
  );
}

export function PeopleIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="7" r="3" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </Base>
  );
}

export function GrowthIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 19h16M7 19v-6M12 19V8M17 19v-9" />
      <path d="M4 9l5-4 4 3 6-5" />
    </Base>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </Base>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </Base>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m5 12 4.5 4.5L19 7" />
    </Base>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9h17M8 3v4M16 3v4" />
    </Base>
  );
}

export function LocationIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 21c4.5-4.2 7-7.6 7-11a7 7 0 1 0-14 0c0 3.4 2.5 6.8 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Base>
  );
}
