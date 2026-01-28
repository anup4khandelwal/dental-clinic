import { notFound } from "next/navigation";
import { clinic } from "@/config/clinic";
import { services } from "@/lib/services";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    return {};
  }
  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `/services/${service.slug}`,
      images: [
        {
          url: "/brand/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${clinic.name} ${service.title}`,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[color:var(--brand-mist)] via-white to-[color:var(--brand-sand)]">
        <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Treatment"
            title={service.title}
            description={service.description}
          />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CTAButton />
            <span className="text-sm text-slate-600">
              Call {clinic.phone} for quick scheduling.
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Procedure</h3>
            <p className="mt-3 text-sm text-slate-600">{service.procedure}</p>
          </div>
          <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Duration</h3>
            <p className="mt-3 text-sm text-slate-600">{service.duration}</p>
          </div>
          <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Pain level</h3>
            <p className="mt-3 text-sm text-slate-600">{service.painLevel}</p>
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Recovery</h3>
            <p className="mt-3 text-sm text-slate-600">{service.recovery}</p>
          </div>
          <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Ideal for</h3>
            <p className="mt-3 text-sm text-slate-600">{service.idealFor}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
