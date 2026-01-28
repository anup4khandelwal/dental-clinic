"use client";

import { useMemo, useState } from "react";

type Option = { label: string; min: number; max: number };

const options: Option[] = [
  { label: "Cleaning & checkup", min: 800, max: 1500 },
  { label: "Root canal", min: 4000, max: 8000 },
  { label: "Crowns", min: 6000, max: 15000 },
  { label: "Whitening", min: 5000, max: 12000 },
  { label: "Aligners", min: 45000, max: 120000 },
];

export function CostEstimator() {
  const [service, setService] = useState(options[0].label);
  const [sessions, setSessions] = useState(1);

  const estimate = useMemo(() => {
    const selected = options.find((item) => item.label === service) ?? options[0];
    return {
      min: selected.min * sessions,
      max: selected.max * sessions,
    };
  }, [service, sessions]);

  return (
    <div className="grid gap-6 rounded-3xl border border-[color:var(--brand-mist)] bg-white p-8 shadow-sm">
      <label className="text-sm font-semibold text-slate-700">
        Select treatment
        <select
          className="mt-2 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm"
          value={service}
          onChange={(event) => setService(event.target.value)}
        >
          {options.map((option) => (
            <option key={option.label} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label className="text-sm font-semibold text-slate-700">
        Number of visits
        <input
          type="number"
          min={1}
          max={6}
          value={sessions}
          onChange={(event) => setSessions(Number(event.target.value))}
          className="mt-2 h-11 w-full rounded-xl border border-slate-200 px-3 text-sm"
        />
      </label>
      <div className="rounded-2xl bg-[color:var(--brand-mist)]/40 px-4 py-4 text-sm text-slate-700">
        Estimated range: <span className="font-semibold">₹{estimate.min}</span> –{" "}
        <span className="font-semibold">₹{estimate.max}</span>
      </div>
      <p className="text-xs text-slate-500">
        This is a guide only. We provide a personalized quote after examination.
      </p>
    </div>
  );
}
