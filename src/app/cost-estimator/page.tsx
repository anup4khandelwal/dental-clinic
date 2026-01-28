import { SectionHeading } from "@/components/SectionHeading";
import { CostEstimator } from "@/components/CostEstimator";

export const metadata = {
  title: "Treatment Cost Estimator",
  description: "Estimate dental treatment costs at Dental Stories.",
  alternates: {
    canonical: "/cost-estimator",
  },
};

export default function CostEstimatorPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[color:var(--brand-mist)] via-white to-[color:var(--brand-sand)]">
        <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Estimator"
            title="Treatment cost estimator"
            description="Use this quick tool to understand the typical price range. Final costs depend on your clinical exam."
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
        <CostEstimator />
      </section>
    </div>
  );
}
