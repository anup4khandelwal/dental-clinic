import { clinic } from "@/config/clinic";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Contact",
  description:
    "Contact Dental Stories to book an appointment, ask a question, or visit the clinic in Pune.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Dental Stories",
    description:
      "Contact Dental Stories to book an appointment, ask a question, or visit the clinic in Pune.",
    url: "/contact",
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${clinic.name} contact`,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[color:var(--brand-mist)] via-white to-[color:var(--brand-sand)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Contact"
            title="We are here to help"
            description="Reach out for appointments, emergency care, or any questions about your dental health."
          />
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:py-16 md:grid-cols-[1fr_1fr]">
        <div className="rounded-[32px] border border-[color:var(--brand-mist)] bg-white p-8 shadow-sm">
          <ContactForm />
        </div>
        <div className="space-y-6">
          <div className="rounded-[32px] border border-[color:var(--brand-mist)] bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Clinic details</h2>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">{clinic.name}</p>
              <p>{clinic.addressLine1}</p>
              <p>{clinic.addressLine2}</p>
              <p>{clinic.phone}</p>
              <p>{clinic.email}</p>
              <p>{clinic.hours}</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-[color:var(--brand-mist)] bg-white shadow-sm">
            <iframe
              title="Dental Stories map"
              src={clinic.mapsEmbedUrl}
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      
    </div>
  );
}
