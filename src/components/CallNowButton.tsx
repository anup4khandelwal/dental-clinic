import { clinic } from "@/config/clinic";

export function CallNowButton() {
  const tel = clinic.phone.replace(/\s+/g, "");
  return (
    <a
      href={`tel:${tel}`}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-[color:var(--brand-blue)] px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(74,166,199,0.28)] transition hover:bg-[color:var(--brand-blue-strong)] md:hidden"
      aria-label="Call now"
    >
      Call Now
    </a>
  );
}
