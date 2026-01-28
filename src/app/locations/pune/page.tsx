import { clinic } from "@/config/clinic";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Dentist in Pune",
  description:
    "Dental Stories is a trusted dental clinic in Pune offering preventive, cosmetic, and restorative care.",
  alternates: {
    canonical: "/locations/pune",
  },
};

export default function PuneLocationPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[color:var(--brand-mist)] via-white to-[color:var(--brand-sand)]">
        <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Location"
            title="Dentist in Pune"
            description="Comfort-first dentistry for families and professionals in Pune."
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-8 shadow-sm">
          <p className="text-sm text-slate-600">
            Dental Stories is located in {clinic.city}, offering modern dental care
            including cleanings, cosmetic treatments, and restorative procedures.
            We focus on gentle, transparent care for every patient.
          </p>
          <div className="mt-6 space-y-2 text-sm text-slate-600">
            <p>{clinic.addressLine1}</p>
            <p>{clinic.addressLine2}</p>
            <p>{clinic.phone}</p>
            <p>{clinic.hours}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
