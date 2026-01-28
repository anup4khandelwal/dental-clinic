import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Treatment Comparisons",
  description: "Compare popular dental treatments at Dental Stories.",
  alternates: {
    canonical: "/treatments",
  },
};

const comparisons = [
  {
    href: "/treatments/braces-vs-aligners",
    title: "Braces vs Aligners",
    description: "Which orthodontic option is right for your lifestyle?",
  },
  {
    href: "/treatments/implants-vs-bridge",
    title: "Implants vs Bridge",
    description: "Compare long-term tooth replacement solutions.",
  },
];

export default function TreatmentsPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[color:var(--brand-mist)] via-white to-[color:var(--brand-sand)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Comparisons"
            title="Treatment comparisons"
            description="Straightforward guides to help you choose the right dental treatment."
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {comparisons.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-[color:var(--brand-blue)]">
                Read comparison →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
