import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Implants vs Bridge",
  description: "Compare dental implants and bridges at Dental Stories.",
  alternates: {
    canonical: "/treatments/implants-vs-bridge",
  },
};

export default function ImplantsVsBridgePage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[color:var(--brand-mist)] via-white to-[color:var(--brand-sand)]">
        <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Comparison"
            title="Implants vs Bridge"
            description="Compare longevity, cost, and maintenance for tooth replacement."
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Dental Implants</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Long-lasting solution with natural feel.</li>
              <li>Does not affect adjacent teeth.</li>
              <li>Requires healing time after placement.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Dental Bridge</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Faster treatment timeline.</li>
              <li>Relies on adjacent teeth for support.</li>
              <li>May need replacement over time.</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 rounded-3xl border border-[color:var(--brand-mist)] bg-[color:var(--brand-mist)]/40 p-6 text-sm text-slate-600">
          We will recommend the right option after evaluating your bone health, timeline, and budget.
        </div>
      </section>
    </div>
  );
}
