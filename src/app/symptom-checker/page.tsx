import { SectionHeading } from "@/components/SectionHeading";
import { SymptomChecker } from "@/components/SymptomChecker";

export const metadata = {
  title: "Symptom Checker",
  description: "Quick dental symptom checker from Dental Stories.",
  alternates: {
    canonical: "/symptom-checker",
  },
};

export default function SymptomCheckerPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[color:var(--brand-mist)] via-white to-[color:var(--brand-sand)]">
        <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="AI checker"
            title="Symptom checker"
            description="A quick triage tool to help you decide when to visit the dentist."
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
        <SymptomChecker />
      </section>
    </div>
  );
}
