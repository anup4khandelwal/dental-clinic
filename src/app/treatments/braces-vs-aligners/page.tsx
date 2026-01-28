import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Braces vs Aligners",
  description: "Compare braces and clear aligners at Dental Stories.",
  alternates: {
    canonical: "/treatments/braces-vs-aligners",
  },
};

export default function BracesVsAlignersPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[color:var(--brand-mist)] via-white to-[color:var(--brand-sand)]">
        <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Comparison"
            title="Braces vs Aligners"
            description="Understand the differences in comfort, cost, and timeline."
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Braces</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Effective for complex alignment and bite issues.</li>
              <li>Fixed, so compliance is not a concern.</li>
              <li>Cleaning requires extra care around brackets.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Clear Aligners</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Discreet and removable for meals.</li>
              <li>Best for mild to moderate alignment cases.</li>
              <li>Requires consistent wear (20–22 hours/day).</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 rounded-3xl border border-[color:var(--brand-mist)] bg-[color:var(--brand-mist)]/40 p-6 text-sm text-slate-600">
          Our dentist will recommend the best option based on your alignment needs, lifestyle, and budget.
        </div>
      </section>
    </div>
  );
}
