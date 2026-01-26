import { clinic } from "@/config/clinic";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of service for Dental Stories.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          These terms govern your use of {clinic.name} services and website.
        </p>
        <div className="mt-8 space-y-6 text-sm text-slate-600">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Appointments</h2>
            <p className="mt-2">
              Please arrive on time. If you need to reschedule, notify us at least
              24 hours in advance.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Medical advice</h2>
            <p className="mt-2">
              Information on this site is for general guidance and does not replace
              a professional dental consultation.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Payments</h2>
            <p className="mt-2">
              Payment is due at the time of service unless otherwise arranged with
              our team.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Contact us</h2>
            <p className="mt-2">
              For questions about these terms, email {clinic.email} or call
              {clinic.phone}.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
