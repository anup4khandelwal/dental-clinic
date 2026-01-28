"use client";

import { useMemo, useState } from "react";

type Symptom = "pain" | "bleeding" | "swelling" | "sensitivity" | "injury";

export function SymptomChecker() {
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);

  const toggle = (symptom: Symptom) => {
    setSymptoms((prev) =>
      prev.includes(symptom) ? prev.filter((item) => item !== symptom) : [...prev, symptom]
    );
  };

  const advice = useMemo(() => {
    if (symptoms.includes("injury") || symptoms.includes("swelling")) {
      return "Seek care soon. Swelling or injury may need urgent treatment.";
    }
    if (symptoms.includes("pain") && symptoms.includes("bleeding")) {
      return "Book an appointment in the next 24–48 hours for assessment.";
    }
    if (symptoms.includes("sensitivity")) {
      return "Try desensitizing toothpaste and schedule a routine checkup.";
    }
    return "Select your symptoms to see guidance.";
  }, [symptoms]);

  return (
    <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-8 shadow-sm">
      <p className="text-sm text-slate-600">Select all that apply:</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {[
          { id: "pain", label: "Tooth pain" },
          { id: "bleeding", label: "Bleeding gums" },
          { id: "swelling", label: "Swelling" },
          { id: "sensitivity", label: "Cold/heat sensitivity" },
          { id: "injury", label: "Broken tooth or injury" },
        ].map((item) => (
          <label
            key={item.id}
            className="flex items-center gap-2 rounded-2xl border border-[color:var(--brand-mist)] px-4 py-3 text-sm text-slate-700"
          >
            <input
              type="checkbox"
              checked={symptoms.includes(item.id as Symptom)}
              onChange={() => toggle(item.id as Symptom)}
            />
            {item.label}
          </label>
        ))}
      </div>
      <div className="mt-6 rounded-2xl bg-[color:var(--brand-mist)]/40 px-4 py-4 text-sm text-slate-700">
        {advice}
      </div>
      <p className="mt-3 text-xs text-slate-500">
        This tool is informational only and does not replace a dental consultation.
      </p>
    </div>
  );
}
