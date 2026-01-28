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

      <section className="bg-gradient-to-br from-[color:var(--brand-mist)]/70 via-white to-[color:var(--brand-sand)]/70">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:py-20 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-blue)]">
              {clinic.tagline}
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-slate-900 md:text-5xl">
              Dentistry led by experience, warmth, and precision.
            </h1>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Meet Dr. Nehal Khandelwal, aesthetic and cosmetic dentist at{" "}
              {clinic.name}. We focus on gentle care, clear communication, and
              long-term oral health.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li>Cosmetic dentistry & smile design</li>
              <li>Comfort-focused treatments for anxious patients</li>
              <li>Personalized treatment planning</li>
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTAButton />
              <Link
                href="/about"
                className="text-sm font-semibold text-slate-700 hover:text-[color:var(--brand-blue)]"
              >
                Read full profile →
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-2">
              <StatCard value="10+" label="Years of combined experience" />
              <StatCard value="2k+" label="Happy smiles" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-6 top-6 h-full w-full rounded-[36px] bg-[color:var(--brand-mist)]/70" />
            <div className="relative overflow-hidden rounded-[36px] border border-[color:var(--brand-mist)] bg-white shadow-xl">
              <Image
                src="/images/doctor-nehal.png"
                alt="Dr. Nehal Khandelwal"
                width={700}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <SectionHeading
          eyebrow="Why Dental Stories"
          title="Precision, comfort, and care—every visit"
          description="Inspired by your clinic tour, we keep the experience calm and informative from the waiting lounge to the consultation room."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <HighlightCard
            title="Calm waiting lounge"
            description="Soft lighting and peaceful ambience so you can relax."
          />
          <HighlightCard
            title="Consultation focused"
            description="We listen first and explain every step clearly."
          />
          <HighlightCard
            title="Clinical precision"
            description="Digital diagnostics for accurate, efficient care."
          />
          <HighlightCard
            title="Comfortable care"
            description="Gentle techniques for anxious and first‑time patients."
          />
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatCard value="10+" label="Years of combined experience" />
          <StatCard value="2k+" label="Happy smiles" />
          <StatCard value="4.9" label="Average rating" />
          <StatCard value="Same-day" label="Emergency slots" />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Safety & sterilization"
            title="Medical-grade sterilization you can trust"
            description="We follow strict protocols to keep every surface, instrument, and operatory safe."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <HighlightCard
              title="Autoclave sterilization"
              description="All instruments are sterilized in sealed pouches for every patient."
            />
            <HighlightCard
              title="Single-use disposables"
              description="We use single-use items wherever possible for maximum safety."
            />
            <HighlightCard
              title="Medical-grade disinfection"
              description="High‑touch areas are disinfected between every appointment."
            />
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
              iconKey={service.icon}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>
        <div className="mt-8 rounded-3xl border border-[color:var(--brand-mist)] bg-[color:var(--brand-mist)]/30 p-6 text-sm text-slate-700">
          <span className="font-semibold text-slate-900">Family-friendly care:</span>{" "}
          We offer gentle pediatric dentistry and guidance for parents to build
          lifelong oral hygiene habits.
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
                title="Digital diagnostics"
                description="High-precision scans reduce surprises and improve accuracy."
              />
              <HighlightCard
                title="Gentle care"
                description="Comfort-focused techniques for anxious patients."
              />
              <HighlightCard
                title="Transparent plans"
                description="Clear treatment milestones and pricing you can trust."
              />
              <HighlightCard
                title="Friendly team"
                description="Warm guidance throughout every visit."
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
          eyebrow="Payments & insurance"
          title="Flexible options that fit your budget"
          description="We accept multiple payment methods and offer guidance for insurance reimbursements."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Payment methods</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {clinic.payments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Insurance help</h3>
            <p className="mt-3 text-sm text-slate-600">
              We assist with documentation for insurance claims and provide
              transparent invoices for reimbursement.
            </p>
          </div>
          <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Flexible plans</h3>
            <p className="mt-3 text-sm text-slate-600">
              Ask about installment plans for larger treatments and smile makeovers.
            </p>
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
            rating={5}
          />
          <TestimonialCard
            quote="They fixed my root canal with zero pain and clear aftercare guidance."
            name="Rohan S."
            detail="Root canal therapy"
            rating={5}
          />
          <TestimonialCard
            quote="My child felt safe and even asked when we can return."
            name="Sneha P."
            detail="Pediatric care"
            rating={5}
          />
        </div>
      </section>

      <section className="bg-[color:var(--brand-mist)]/50">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Trust & credentials"
            title="Certified care, trusted by families"
            description="Professional standards and a commitment to transparency at every step."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              "ADA-aligned protocols",
              "Digital X‑ray safety",
              "Infection control",
              "Patient-first approach",
            ].map((label) => (
              <div
                key={label}
                className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 text-sm font-semibold text-slate-700 shadow-sm"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Offers"
            title="New patient welcome offer"
            description="Ask us about limited‑time packages for consultations and preventive care."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-[color:var(--brand-mist)]/40 p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Complimentary first consultation
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Limited slots every week for new patients. Includes oral health
                assessment and personalized treatment planning.
              </p>
              <div className="mt-6">
                <CTAButton label="Claim offer" href="/contact" />
              </div>
            </div>
            <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Flexible insurance support
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                We help with insurance documentation and provide transparent cost
                estimates before you start treatment.
              </p>
              <a
                href={clinic.googleBusinessProfileUrl}
                className="mt-5 inline-flex text-sm font-semibold text-[color:var(--brand-blue)] hover:text-[color:var(--brand-blue-strong)]"
                target="_blank"
                rel="noreferrer"
              >
                View Google profile →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--brand-mist)]/70">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Google reviews"
            title={`Rated ${clinic.reviewRating} stars by ${clinic.reviewCount}+ patients`}
            description="Read what patients share about their Dental Stories experience."
          />
          <div className="mt-8 rounded-3xl border border-[color:var(--brand-mist)] bg-white p-8 shadow-sm">
            <p className="text-sm text-slate-600">
              We feature verified reviews from Google. Click below to view the
              latest feedback and directions.
            </p>
            <a
              href={clinic.googleBusinessProfileUrl}
              className="mt-4 inline-flex text-sm font-semibold text-[color:var(--brand-blue)] hover:text-[color:var(--brand-blue-strong)]"
              target="_blank"
              rel="noreferrer"
            >
              View Google Reviews →
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Pricing guide"
            title="Transparent ranges for common treatments"
            description="Exact costs depend on your case. We share clear estimates after your consultation."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Cleaning & checkup", price: "₹800 – ₹1,500" },
              { title: "Root canal", price: "₹4,000 – ₹8,000" },
              { title: "Crowns", price: "₹6,000 – ₹15,000" },
              { title: "Whitening", price: "₹5,000 – ₹12,000" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-xl font-semibold text-[color:var(--brand-blue)]">
                  {item.price}
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Final price after examination.
                </p>
              </div>
            ))}
          </div>
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

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Before & after"
            title="See the difference with real transformations"
            description="A peek at patient results achieved with careful, personalized care."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[32px] border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm">
              <Image
                src="/images/before-after.jpeg"
                alt="Before and after dental treatment"
                width={900}
                height={900}
                className="h-full w-full rounded-[24px] object-cover"
              />
            </div>
            <div className="rounded-[32px] border border-[color:var(--brand-mist)] bg-[color:var(--brand-mist)]/40 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Smile makeovers that feel natural
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                We focus on healthy, confident smiles with minimally invasive
                techniques and clear aftercare guidance.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                <li>Personalized smile design and shade matching.</li>
                <li>Gentle, step-by-step treatment planning.</li>
                <li>Follow-ups to maintain results long term.</li>
              </ul>
              <div className="mt-6">
                <CTAButton label="View treatments" href="/services" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {clinic.tour360Url ? (
        <section className="bg-[color:var(--brand-mist)]/50">
          <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
            <SectionHeading
              eyebrow="360° Tour"
              title="Explore the clinic in 360°"
              description="Walk through our spaces and get a feel for the environment before you visit."
            />
            <div className="mt-8 overflow-hidden rounded-[32px] border border-[color:var(--brand-mist)] bg-white shadow-sm">
              <iframe
                title="Dental Stories 360 tour"
                src={clinic.tour360Url}
                className="h-[520px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      ) : null}

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

      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Voice search"
            title="Ask us the way you speak"
            description="These are the questions patients often ask using voice search."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Best dentist near Dhole Patil Road?",
              "How much does teeth whitening cost in Pune?",
              "Is root canal treatment painful?",
              "Do you offer same-day dental appointments?",
            ].map((question) => (
              <div
                key={question}
                className="rounded-2xl border border-[color:var(--brand-mist)] bg-white px-5 py-4 text-sm text-slate-600"
              >
                {question}
              </div>
            ))}
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
