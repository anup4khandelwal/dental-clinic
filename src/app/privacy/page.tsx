import { clinic } from "@/config/clinic";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Dental Stories.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          This Privacy Policy explains how {clinic.name} collects, uses, and protects
          your personal information.
        </p>
        <div className="mt-8 space-y-6 text-sm text-slate-600">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Information we collect</h2>
            <p className="mt-2">
              We may collect your name, phone number, email, and any health-related
              details you share when booking or contacting us.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">How we use it</h2>
            <p className="mt-2">
              Your information is used to schedule appointments, provide care, and
              share reminders or updates related to your treatment.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Data protection</h2>
            <p className="mt-2">
              We store information securely and only share it with trusted partners
              who help us deliver care.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Contact us</h2>
            <p className="mt-2">
              If you have questions, email {clinic.email} or call {clinic.phone}.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
