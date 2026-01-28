"use client";

import { useLanguage } from "@/components/LanguageProvider";

type Option = { value: "en" | "hi" | "mr"; label: string };

const options: Option[] = [
  { value: "en", label: "EN" },
  { value: "hi", label: "हिं" },
  { value: "mr", label: "मर" },
];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-[color:var(--brand-mist)] bg-[color:var(--surface)] p-1 text-xs font-semibold text-[color:var(--brand-slate)]">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLanguage(option.value)}
          className={`rounded-full px-2 py-1 transition ${
            language === option.value
              ? "bg-[color:var(--brand-blue)] text-white"
              : "hover:text-[color:var(--brand-blue)]"
          }`}
          aria-label={`Switch language to ${option.label}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
