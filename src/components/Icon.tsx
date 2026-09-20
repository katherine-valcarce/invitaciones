type IconName =
  | "calendar"
  | "clock"
  | "pin"
  | "hanger"
  | "whatsapp"
  | "gift"
  | "copy"
  | "chevron";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export default function Icon({ name, size = 24, className }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  if (name === "calendar") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg {...common}>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (name === "hanger") {
    return (
      <svg {...common}>
        <path d="M12 8a2 2 0 1 0-2-2M12 8l-8 6v3h16v-3l-8-6Z" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg {...common}>
        <path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z" />
        <path d="M9.1 8.2c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4-.1.6.4.8 1.1 1.5 1.9 1.9.2.1.4.1.6-.1l.7-.8c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .3-.1 1-.5 1.4-.5.5-1.3.8-2.2.6-1.1-.2-2.8-.9-4.4-2.4-1.2-1.2-2.1-2.7-2.4-3.8-.2-.8 0-1.5.4-1.9.2-.2.4-.4.6-.5Z" />
      </svg>
    );
  }

  if (name === "gift") {
    return (
      <svg {...common}>
        <path d="M20 12v9H4v-9M2 8h20v4H2zM12 8v13M12 8H7.5A2.5 2.5 0 1 1 10 5.5L12 8Zm0 0h4.5A2.5 2.5 0 1 0 14 5.5L12 8Z" />
      </svg>
    );
  }

  if (name === "copy") {
    return (
      <svg {...common}>
        <rect x="9" y="9" width="11" height="11" rx="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
