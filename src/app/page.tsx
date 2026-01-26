import Image from "next/image";
import Link from "next/link";
import { clinic, site } from "@/config/clinic";
import { clinicGallery } from "@/lib/gallery";
import { services } from "@/lib/services";
import { faqSchema, localBusinessSchema } from "@/lib/schema";
import { CTAButton } from "@/components/CTAButton";
import { FaqAccordion } from "@/components/FaqAccordion";
import { HighlightCard } from "@/components/HighlightCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { StatCard } from "@/components/StatCard";
import { TestimonialCard } from "@/components/TestimonialCard";

export const metadata = {
  title: site.title,
  description: site.description,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: clinic.name,
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${clinic.name} clinic`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/brand/og-image.jpg"],
  },
};

const faqItems = [
  {
    question: "How often should I visit the dentist?",
    answer: "Most patients benefit from a checkup every six months, but we personalize this based on your oral health.",
  },
  {
    question: "Do you offer painless treatment options?",
    answer: "Yes. We use modern techniques and gentle anesthesia so your visit stays comfortable.",
  },
  {
    question: "Can I get a same-day emergency appointment?",
    answer: "We keep slots open for urgent cases. Call us and we will do our best to fit you in.",
  },
  {
    question: "What payment options do you accept?",
    answer: "We accept cash, UPI, and major cards. Ask our team about installment plans for larger treatments.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqItems)),
        }}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-[color:var(--brand-mist)] via-white to-[color:var(--brand-sand)]">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -left-32 top-16 h-64 w-64 rounded-full bg-[color:var(--brand-mist)] blur-3xl" />
          <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
        </div>
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:py-20 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-blue)]">
              {clinic.tagline}
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-slate-900 md:text-5xl">
              Modern dentistry with a calm, patient-first approach.
            </h1>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              {clinic.name} in {clinic.city} blends advanced technology with gentle
              care. Led by Dr. Nehal Khandelwal, we create healthy smiles you can
              trust.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTAButton />
              <Link
                href="/services"
                className="text-sm font-semibold text-slate-700 hover:text-[color:var(--brand-blue)]"
              >
                Explore services →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
              <StatCard value="10+" label="Years of combined experience" />
              <StatCard value="2k+" label="Happy smiles" />
              <StatCard value="4.9" label="Average rating" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-6 top-6 h-full w-full rounded-[36px] bg-[color:var(--brand-mist)]/70" />
            <div className="relative overflow-hidden rounded-[36px] border border-[color:var(--brand-mist)] bg-white shadow-xl">
              <Image
                src="/images/hero.jpeg"
                alt="Dental Stories clinic hero"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <SectionHeading
          eyebrow="Services"
          title="Comprehensive dental care under one roof"
          description="From preventive cleanings to advanced restorative work, we personalize every treatment plan."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              href={`/services#${service.slug}`}
            />
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--brand-mist)]/70">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:py-16 md:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Benefits"
              title="Everything designed around your comfort"
              description="We combine soothing spaces, transparent pricing, and modern tools so every visit feels easy."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <HighlightCard
                title="Calm waiting lounge"
                description="Soft lighting and peaceful ambience to help you relax."
              />
              <HighlightCard
                title="Consultation first"
                description="Open conversations with clarity, precision, and care."
              />
              <HighlightCard
                title="Digital diagnostics"
                description="High-precision scans reduce surprises and improve accuracy."
              />
              <HighlightCard
                title="Gentle care"
                description="Comfort-focused techniques for anxious patients."
              />
            </div>
          </div>
          <div className="rounded-[32px] border border-[color:var(--brand-mist)] bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-blue)]">
              Patient promise
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">
              A clinic that listens first.
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              We believe great dental care starts with understanding your goals. Our
              team takes time to explain options and build a plan that fits your
              lifestyle.
            </p>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-[color:var(--brand-mist)]/70 px-4 py-3 text-sm text-slate-700">
                "They explained every step and I felt relaxed throughout the
                procedure."
              </div>
              <div className="rounded-2xl bg-[color:var(--brand-mist)]/70 px-4 py-3 text-sm text-slate-700">
                "Transparent pricing and a calm space made all the difference."
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <SectionHeading
          eyebrow="Testimonials"
          title="Patients who love their Dental Stories"
          description="Real feedback from families and professionals who trust our clinic."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <TestimonialCard
            quote="The clinic is spotless, and the team is incredibly patient. I finally enjoy dental visits."
            name="Aarti M."
            detail="Teeth whitening"
          />
          <TestimonialCard
            quote="They fixed my root canal with zero pain and clear aftercare guidance."
            name="Rohan S."
            detail="Root canal therapy"
          />
          <TestimonialCard
            quote="My child felt safe and even asked when we can return."
            name="Sneha P."
            detail="Pediatric care"
          />
        </div>
      </section>

      <section className="bg-[color:var(--brand-mist)]/50">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:py-16 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Success stories"
              title="Hear from patients who completed their treatment"
              description="Watch real experiences that highlight our gentle approach and precise care."
            />
            <p className="mt-4 text-sm text-slate-600">
              Every smile has a story. We are proud to share the journey of our
              patients who trusted us with their dental care.
            </p>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-[color:var(--brand-mist)] bg-white shadow-sm">
            <video
              className="h-full w-full object-cover"
              controls
              preload="metadata"
              playsInline
              aria-label="Dental Stories patient success stories video"
              src="/videos/patient_success_stories.mp4"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-white via-[color:var(--brand-mist)] to-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:py-16 md:grid-cols-[1fr_1fr]">
          <div className="rounded-[32px] border border-[color:var(--brand-mist)] bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Meet the dentist"
              title="Dr. Nehal Khandelwal"
              description="Aesthetic and cosmetic dentist focused on long-term oral health and confident smiles."
            />
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li>Advanced cosmetic dentistry and smile design.</li>
              <li>Gentle care for anxious and first-time patients.</li>
              <li>Personalized treatment plans and follow-ups.</li>
            </ul>
            <div className="mt-6">
              <CTAButton label="Meet our team" href="/about" />
            </div>
          </div>
          <div className="rounded-[32px] border border-[color:var(--brand-mist)] bg-white p-8 shadow-sm">
            <Image
              src="/images/doctor-nehal.png"
              alt="Dr. Nehal Khandelwal"
              width={720}
              height={900}
              className="h-full w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <SectionHeading
          eyebrow="Clinic highlights"
          title="Bright, calm spaces designed for care"
          description="A soothing environment with modern equipment, curated to reduce stress and speed recovery."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[32px] border border-[color:var(--brand-mist)] bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">What to expect</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Comfort-first operatories with modern tools.</li>
              <li>Digital scans for faster diagnosis and planning.</li>
              <li>Friendly team that explains every step.</li>
              <li>Clean, calming interiors for a relaxed visit.</li>
            </ul>
          </div>
          <div className="rounded-[32px] border border-[color:var(--brand-mist)] bg-white p-8 shadow-sm">
            <Image
              src="/images/invitation.jpeg"
              alt="Dental Stories clinic interior"
              width={800}
              height={600}
              className="h-full w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Gallery"
            title="A look inside our clinic"
            description="Explore the clean, welcoming spaces built for comfort and precision."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clinicGallery.map((image) => (
              <div
                key={image}
                className="overflow-hidden rounded-2xl border border-[color:var(--brand-mist)] bg-[color:var(--brand-mist)]/30"
              >
                <Image
                  src={`/images/clinic/${image}`}
                  alt="Dental Stories clinic interior"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--brand-mist)]/50">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:py-16 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Clinic tour"
              title="Take a quick walk through Dental Stories"
              description="See the calming waiting lounge and the consultation area designed for clear, comfortable conversations."
            />
            <p className="mt-4 text-sm text-slate-600">
              Our clinic combines precision, comfort, and care so you feel at ease
              from the moment you arrive.
            </p>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-[color:var(--brand-mist)] bg-white shadow-sm">
            <video
              className="h-full w-full object-cover"
              controls
              preload="metadata"
              playsInline
              aria-label="Dental Stories clinic tour video"
              src="/videos/clinic_tour.mp4"
            />
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--brand-mist)]/70">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:py-16 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Visit us"
              title={`Your neighborhood clinic in ${clinic.city}`}
              description="We are easy to reach from Dhole Patil Road with parking nearby."
            />
            <div className="mt-6 space-y-3 rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 text-sm text-slate-600">
              <p className="font-semibold text-slate-800">{clinic.name}</p>
              <p>{clinic.addressLine1}</p>
              <p>{clinic.addressLine2}</p>
              <p>{clinic.phone}</p>
              <p>{clinic.hours}</p>
              <Link
                href="/contact"
                className="inline-flex text-sm font-semibold text-[color:var(--brand-blue)] hover:text-[color:var(--brand-blue-strong)]"
              >
                Get directions →
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-[color:var(--brand-mist)] bg-white shadow-sm">
            <iframe
              title="Dental Stories map"
              src={clinic.mapsEmbedUrl}
              className="h-80 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to common questions"
          description="Everything you need to know before your appointment."
        />
        <div className="mt-8">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-12 md:py-16 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold">Ready for a brighter smile?</h2>
            <p className="mt-2 text-sm text-slate-200">
              Call {clinic.phone} or book your appointment online in minutes.
            </p>
          </div>
          <CTAButton label="Book Appointment" />
        </div>
      </section>
    </div>
  );
}
