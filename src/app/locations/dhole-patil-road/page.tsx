import { clinic } from "@/config/clinic";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Dentist near Dhole Patil Road",
  description:
    "Dental Stories serves patients near Dhole Patil Road with comprehensive dental care.",
  alternates: {
    canonical: "/locations/dhole-patil-road",
  },
};

export default function DholePatilRoadPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[color:var(--brand-mist)] via-white to-[color:var(--brand-sand)]">
        <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Location"
            title="Dentist near Dhole Patil Road"
            description="Easy-to-reach dental clinic for residents and professionals nearby."
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-8 shadow-sm">
          <p className="text-sm text-slate-600">
            Our clinic is located just off Dhole Patil Road, Pune, offering modern
            dental care in a calm, friendly setting. We provide quick access to
            preventive and emergency dentistry.
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
