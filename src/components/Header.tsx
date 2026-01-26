import Image from "next/image";
import Link from "next/link";
import { clinic } from "@/config/clinic";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[color:var(--brand-mist)]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logo.svg"
            alt={`${clinic.name} logo`}
            width={120}
            height={48}
            className="h-10 w-auto"
            unoptimized
            priority
          />
          <span className="sr-only">{clinic.name}</span>
        </Link>
        <nav
          className="hidden items-center gap-8 text-sm font-medium text-[color:var(--brand-slate)] md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[color:var(--brand-blue)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={clinic.appointmentUrl}
            className="rounded-full bg-[color:var(--brand-blue)] px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(74,166,199,0.28)] transition hover:bg-[color:var(--brand-blue-strong)]"
          >
            Book Appointment
          </Link>
          <details className="relative md:hidden">
            <summary className="list-none rounded-full border border-[color:var(--brand-mist)] bg-white px-3 py-2 text-sm font-semibold text-[color:var(--brand-slate)] shadow-sm">
              Menu
            </summary>
            <div className="absolute right-0 top-12 z-50 w-44 rounded-2xl border border-[color:var(--brand-mist)] bg-white p-3 shadow-xl">
              <nav className="grid gap-2 text-sm text-[color:var(--brand-slate)]">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-2 py-1 transition hover:bg-[color:var(--brand-mist)]/50 hover:text-[color:var(--brand-blue)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
