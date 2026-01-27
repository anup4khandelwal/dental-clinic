import { clinic } from "@/config/clinic";

export function WhatsAppButton() {
  const message = encodeURIComponent("Hi Dental Stories, I'd like to book an appointment.");
  return (
    <a
      href={`https://wa.me/${clinic.whatsappNumber}?text=${message}`}
      className="fixed bottom-20 right-4 z-50 flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(16,185,129,0.28)] transition hover:bg-emerald-600 md:bottom-6"
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      WhatsApp
    </a>
  );
}
