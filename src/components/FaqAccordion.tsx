"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FAQItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="rounded-2xl border border-[color:var(--brand-mist)] bg-white px-5 py-4"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span className="ml-4 text-[color:var(--brand-blue)]">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p className="mt-3 text-sm text-slate-600">{item.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
