type ServiceIconProps = {
  iconKey?: string;
  className?: string;
};

const baseClass =
  "h-9 w-9 rounded-2xl bg-[color:var(--brand-mist)]/70 p-2 text-[color:var(--brand-blue)]";

const icons: Record<string, React.ReactNode> = {
  sparkle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M12 3l1.6 4.2L18 9l-4.4 1.8L12 15l-1.6-4.2L6 9l4.4-1.8L12 3z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  pulse: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M3 12h5l2-4 4 8 2-4h5"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  anchor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="6" r="2" strokeWidth="1.6" />
      <path d="M12 8v9" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M5 14c0 3.3 3.1 6 7 6s7-2.7 7-6"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  align: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M4 7h16M4 12h12M4 17h10" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  smile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="7" strokeWidth="1.6" />
      <path
        d="M9 12.5c.6 1 1.7 1.6 3 1.6s2.4-.6 3-1.6"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M9 9h.01M15 9h.01" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M12 4l7 3v5c0 4-3 6.5-7 8-4-1.5-7-4-7-8V7l7-3z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M6 18c8 0 12-6 12-12-6 0-12 4-12 12z"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M6 18c3-4 6-6 10-8" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
};

export function ServiceIcon({ iconKey, className }: ServiceIconProps) {
  if (!iconKey || !icons[iconKey]) {
    return null;
  }

  return (
    <div className={className ?? baseClass} aria-hidden>
      {icons[iconKey]}
    </div>
  );
}
