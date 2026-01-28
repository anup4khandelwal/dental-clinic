import { clinic } from "@/config/clinic";

export function TopBar() {
  return (
    <div className="bg-[color:var(--brand-mist)]/80 text-xs text-slate-700">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-2 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-4">
          <span>
            Working Hours: {clinic.hours}
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-300 md:inline-block" />
          <span>{clinic.emergencyNote}</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`tel:${clinic.phone.replace(/\s+/g, "")}`}
            className="font-semibold text-[color:var(--brand-blue)] hover:text-[color:var(--brand-blue-strong)]"
          >
            {clinic.phone}
          </a>
          <a href={`mailto:${clinic.email}`} className="hover:text-slate-900">
            {clinic.email}
          </a>
        </div>
      </div>
    </div>
  );
}
