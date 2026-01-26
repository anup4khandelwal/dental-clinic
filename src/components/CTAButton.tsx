import Link from "next/link";
import { clinic } from "@/config/clinic";

type CTAButtonProps = {
  label?: string;
  href?: string;
};

export function CTAButton({ label = "Book Appointment", href }: CTAButtonProps) {
  return (
    <Link
      href={href ?? clinic.appointmentUrl}
      className="inline-flex items-center justify-center rounded-full bg-[color:var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(74,166,199,0.28)] transition hover:bg-[color:var(--brand-blue-strong)]"
    >
      {label}
    </Link>
  );
}
