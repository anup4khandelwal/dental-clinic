import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Patient Portal",
  description: "Secure patient portal access for Dental Stories.",
  alternates: {
    canonical: "/portal",
  },
};

export default function PatientPortalPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[color:var(--brand-mist)] via-white to-[color:var(--brand-sand)]">
        <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Portal"
            title="Patient portal"
            description="Access reports, prescriptions, and appointment updates securely."
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
        <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-8 shadow-sm">
          <form className="grid gap-4" aria-label="Patient portal login">
            <label className="text-sm font-semibold text-slate-700">
              Email
              <input
                type="email"
                className="mt-2 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm"
                placeholder="you@example.com"
              />
            </label>
            <label className="text-sm font-semibold text-slate-700">
              Password
              <input
                type="password"
                className="mt-2 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm"
                placeholder="••••••••"
              />
            </label>
            <button
              type="button"
              className="rounded-full bg-[color:var(--brand-blue)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(74,166,199,0.28)]"
            >
              Sign in (demo)
            </button>
          </form>
          <p className="mt-4 text-xs text-slate-500">
            Portal access is available for registered patients. Contact the clinic if you need help.
          </p>
        </div>
      </section>
    </div>
  );
}
