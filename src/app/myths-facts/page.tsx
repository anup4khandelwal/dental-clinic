import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Dental Myths & Facts",
  description: "Clear up common dental myths with facts from Dental Stories.",
  alternates: {
    canonical: "/myths-facts",
  },
};

const myths = [
  {
    myth: "If my gums bleed, brushing harder will fix it.",
    fact: "Bleeding often means inflammation. Gentle brushing and a dental checkup help most.",
  },
  {
    myth: "Whitening damages teeth.",
    fact: "Professional whitening is safe when supervised and done correctly.",
  },
  {
    myth: "No pain means no dental problems.",
    fact: "Early decay or gum disease can be painless. Regular exams catch issues early.",
  },
];

export default function MythsFactsPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[color:var(--brand-mist)] via-white to-[color:var(--brand-sand)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Myths & facts"
            title="Clear answers for common dental myths"
            description="Get the facts so you can make confident decisions about your oral health."
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {myths.map((item) => (
            <div
              key={item.myth}
              className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm"
            >
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-blue)]">
                Myth
              </h2>
              <p className="mt-3 text-sm text-slate-700">{item.myth}</p>
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-blue)]">
                Fact
              </h3>
              <p className="mt-3 text-sm text-slate-600">{item.fact}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
