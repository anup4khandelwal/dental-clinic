import Link from "next/link";
import Image from "next/image";
import { clinic } from "@/config/clinic";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/treatments", label: "Comparisons" },
  { href: "/care-guides", label: "Care Guides" },
  { href: "/guides", label: "Downloads" },
  { href: "/myths-facts", label: "Myths & Facts" },
  { href: "/locations/pune", label: "Dentist in Pune" },
  { href: "/cost-estimator", label: "Cost Estimator" },
  { href: "/symptom-checker", label: "Symptom Checker" },
  { href: "/portal", label: "Patient Portal" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--brand-mist)] bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="space-y-4">
          <Image
            src="/brand/logo.svg"
            alt={`${clinic.name} logo`}
            width={140}
            height={56}
            className="h-12 w-auto"
            unoptimized
          />
          <p className="text-sm text-slate-600">
            {clinic.tagline}. Gentle, modern dentistry focused on comfort and long-term
            oral health.
          </p>
          <div className="flex items-center gap-4 text-sm font-semibold">
            <a
              href={clinic.social.instagram}
              className="text-[color:var(--brand-blue)] hover:text-[color:var(--brand-blue-strong)]"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className="space-y-1 text-sm text-slate-600">
            <p>{clinic.addressLine1}</p>
            <p>{clinic.addressLine2}</p>
            <p>{clinic.phone}</p>
            <p>{clinic.email}</p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-[color:var(--brand-blue)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-[color:var(--brand-mist)]/50 p-6">
          <h3 className="text-lg font-semibold text-slate-900">
            Ready for a healthier smile?
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Book an appointment today and experience stress-free dental care.
          </p>
          <Link
            href={clinic.appointmentUrl}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--brand-blue)] px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(74,166,199,0.28)] transition hover:bg-[color:var(--brand-blue-strong)]"
          >
            Book Appointment
          </Link>
        </div>
      </div>
      <div className="border-t border-[color:var(--brand-mist)] py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {clinic.name}. All rights reserved.
      </div>
    </footer>
  );
}
