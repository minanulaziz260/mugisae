import type { SVGProps } from "react";

type IconName =
  | "clock"
  | "wallet"
  | "users"
  | "briefcase"
  | "academic"
  | "shield"
  | "globe"
  | "spark"
  | "menu"
  | "close"
  | "sun"
  | "moon"
  | "whatsapp"
  | "instagram"
  | "facebook"
  | "youtube"
  | "mail"
  | "phone"
  | "pin"
  | "check"
  | "arrow-right"
  | "chevron-down"
  | "star"
  | "quote"
  | "compass"
  | "target"
  | "heart";

const paths: Record<IconName, React.ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  wallet: (
    <>
      <path d="M3 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2H5a2 2 0 0 0 0 4h14v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <circle cx="16" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.5 19c.6-3.4 3.4-5.5 6.5-5.5s5.9 2.1 6.5 5.5" />
      <circle cx="17" cy="9" r="2.6" />
      <path d="M15 14.6c2.3.3 4.4 1.7 5 4.4" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </>
  ),
  academic: (
    <>
      <path d="M12 4 2 9l10 5 10-5z" />
      <path d="M6 11v4c0 1.5 3 3 6 3s6-1.5 6-3v-4" />
      <path d="M22 9v5" />
    </>
  ),
  shield: <path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
    </>
  ),
  moon: <path d="M21 12.5A9 9 0 1 1 11.5 3a7 7 0 0 0 9.5 9.5z" />,
  whatsapp: (
    <>
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 21l2.2-4.6a8.5 8.5 0 1 1 15.3-4.9z" />
      <path d="M8.6 9.7c.2 2 1.7 3.6 3.7 4.2.6.2 1.2 0 1.6-.4l.5-.5a.7.7 0 0 1 .9-.1l1.1.7c.4.2.5.7.3 1-.5.9-1.5 1.4-2.4 1.3-3-.2-5.6-2.7-5.9-5.7 0-.9.4-1.8 1.3-2.3.4-.2.9-.1 1 .3l.7 1.2a.7.7 0 0 1-.1.8l-.5.5c-.4.4-.6 1-.4 1.6z" fill="currentColor" stroke="none" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9z" />
  ),
  youtube: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="3" />
      <path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.7.7 2.5a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.6.6 2.5.7a2 2 0 0 1 1.7 2z" />
  ),
  pin: (
    <>
      <path d="M12 22s7-7.6 7-13a7 7 0 1 0-14 0c0 5.4 7 13 7 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  check: <path d="m5 12 4 4L19 7" />,
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  star: (
    <path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3.1-5.4 3.1 1.2-6L3.3 9.3l6.1-.7z" />
  ),
  quote: (
    <path d="M7 7h4v4H8a2 2 0 0 0-2 2v4H4v-6a4 4 0 0 1 3-4zm9 0h4v4h-3a2 2 0 0 0-2 2v4h-2v-6a4 4 0 0 1 3-4z" fill="currentColor" stroke="none" />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-2 6-6 2 2-6z" fill="currentColor" stroke="none" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.3-7-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 19 10c0 5.7-7 10-7 10z" />
  ),
};

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number | string;
};

export default function Icon({ name, size = 20, className, ...rest }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
