import { clinic } from "@/config/clinic";
import { services } from "@/lib/services";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceIcon } from "@/components/ServiceIcon";

export const metadata = {
  title: "Services",
  description:
    "Explore preventive, cosmetic, and restorative dental services at Dental Stories in Pune.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Dental Services",
    description:
      "Explore preventive, cosmetic, and restorative dental services at Dental Stories in Pune.",
    url: "/services",
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${clinic.name} services`,
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[color:var(--brand-mist)] via-white to-[color:var(--brand-sand)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Services"
            title="Care tailored to every smile"
            description="We focus on long-term oral health with treatments that fit your goals, lifestyle, and comfort level."
          />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CTAButton />
            <span className="text-sm text-slate-600">
              Call {clinic.phone} for same-day appointments.
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              id={service.slug}
              className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <ServiceIcon iconKey={service.icon} className="h-12 w-12 p-3" />
                <h2 className="text-2xl font-semibold text-slate-900">
                  {service.title}
                </h2>
              </div>
              <p className="mt-3 text-sm text-slate-600">{service.description}</p>
              <div className="mt-4 text-sm text-slate-500">
                Procedure: {service.procedure}
              </div>
              <div className="mt-4 inline-flex text-sm font-semibold text-[color:var(--brand-blue)]">
                <a href={`/services/${service.slug}`}>View details →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
