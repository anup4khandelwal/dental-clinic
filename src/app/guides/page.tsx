import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Patient Guides",
  description: "Downloadable patient guides from Dental Stories.",
  alternates: {
    canonical: "/guides",
  },
};

const guides = [
  {
    title: "Dental Stories Patient Guide",
    href: "/docs/patient-guide.pdf",
  },
  {
    title: "Post-Treatment Care Guide",
    href: "/docs/aftercare-guide.pdf",
  },
];

export default function GuidesPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[color:var(--brand-mist)] via-white to-[color:var(--brand-sand)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Downloads"
            title="Patient guides"
            description="Download helpful guides for your dental care journey."
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold text-slate-900">{guide.title}</h2>
              <span className="mt-3 inline-flex text-sm font-semibold text-[color:var(--brand-blue)]">
                Download PDF →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
