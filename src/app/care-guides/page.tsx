import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Post-Treatment Care Guides",
  description: "Aftercare guidance from Dental Stories to protect your results.",
  alternates: {
    canonical: "/care-guides",
  },
};

const guides = [
  {
    title: "After a cleaning",
    tips: [
      "Avoid very hot or cold foods for a few hours if sensitive.",
      "Continue gentle brushing and flossing daily.",
      "Schedule your next checkup in 6 months.",
    ],
  },
  {
    title: "After a root canal",
    tips: [
      "Chew on the opposite side until the final crown is placed.",
      "Use prescribed medications if needed for discomfort.",
      "Contact us if swelling or persistent pain occurs.",
    ],
  },
  {
    title: "After teeth whitening",
    tips: [
      "Avoid staining foods (tea, coffee, tobacco) for 48 hours.",
      "Use a straw for beverages that stain.",
      "Follow any take-home gel instructions from your dentist.",
    ],
  },
];

export default function CareGuidesPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[color:var(--brand-mist)] via-white to-[color:var(--brand-sand)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Aftercare"
            title="Post-treatment care guides"
            description="Protect your results with simple, proven aftercare steps."
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-900">{guide.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {guide.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
