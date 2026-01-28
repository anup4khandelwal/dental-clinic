import Image from "next/image";
import { clinic } from "@/config/clinic";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "About",
  description:
    "Learn about Dental Stories, our philosophy, and the team led by Dr. Nehal Khandelwal.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Dental Stories",
    description:
      "Learn about Dental Stories, our philosophy, and the team led by Dr. Nehal Khandelwal.",
    url: "/about",
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${clinic.name} team`,
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[color:var(--brand-mist)] via-white to-[color:var(--brand-sand)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="About us"
            title="We built a clinic that feels calm, modern, and human"
            description="Dental Stories was created to deliver world-class dentistry with empathy, transparency, and a little extra care."
          />
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:py-16 md:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Our story</h2>
          <p className="mt-4 text-sm text-slate-600">
            {clinic.name} started with a simple idea: every patient deserves
            comfortable, informed, and holistic care. We combine technology with
            kindness, so you never feel rushed or unheard.
          </p>
          <p className="mt-4 text-sm text-slate-600">
            From preventive care to advanced cosmetic work, our clinic is built on
            transparency, thoughtful treatment plans, and calming spaces that reduce
            stress.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <CTAButton />
            <span className="text-sm text-slate-600">{clinic.hours}</span>
          </div>
        </div>
        <div className="rounded-[32px] border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm">
          <Image
            src="/images/invitation.jpeg"
            alt="Dental Stories clinic"
            width={800}
            height={600}
            className="h-full w-full rounded-[24px] object-cover"
          />
        </div>
      </section>

      <section className="bg-[color:var(--brand-mist)]/70">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:py-16 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-[color:var(--brand-mist)] bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-blue)]">
              Lead Dentist
            </p>
            <div className="mt-5 overflow-hidden rounded-3xl border border-[color:var(--brand-mist)] bg-[color:var(--brand-mist)]/30">
              <Image
                src="/images/doctor-nehal.png"
                alt="Dr. Nehal Khandelwal"
                width={720}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-slate-900">
              Dr. Nehal Khandelwal
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Aesthetic and cosmetic dentist with a patient-first approach.
              Passionate about smile makeovers, gentle restorative care, and clear
              communication.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              <li>Specialized in cosmetic dentistry and smile design.</li>
              <li>Focused on long-term oral health and prevention.</li>
              <li>Comfort-driven care for anxious patients.</li>
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Why choose us"
              title="A dental experience designed around you"
              description="We bring together a thoughtful environment, modern equipment, and a gentle team that treats you like family."
            />
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-[color:var(--brand-mist)] bg-white px-5 py-4 text-sm text-slate-600">
                Transparent treatment plans and pricing upfront.
              </div>
              <div className="rounded-2xl border border-[color:var(--brand-mist)] bg-white px-5 py-4 text-sm text-slate-600">
                Digital diagnostics for precise, efficient care.
              </div>
              <div className="rounded-2xl border border-[color:var(--brand-mist)] bg-white px-5 py-4 text-sm text-slate-600">
                A calm waiting lounge with soft lighting and music.
              </div>
              <div className="rounded-2xl border border-[color:var(--brand-mist)] bg-white px-5 py-4 text-sm text-slate-600">
                Consultation rooms built for open, comfortable conversations.
              </div>
            </div>
          </div>
        </div>
      </section>

      {clinic.doctorIntroVideoUrl ? (
        <section className="bg-white">
          <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
            <SectionHeading
              eyebrow="Video introduction"
              title="Meet Dr. Nehal Khandelwal"
              description="A short introduction to our care philosophy and approach."
            />
            <div className="mt-8 overflow-hidden rounded-[32px] border border-[color:var(--brand-mist)] bg-white shadow-sm">
              <video
                className="h-full w-full object-cover"
                controls
                preload="metadata"
                playsInline
                aria-label="Doctor introduction video"
                src={clinic.doctorIntroVideoUrl}
              />
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
