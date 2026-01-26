type TestimonialCardProps = {
  quote: string;
  name: string;
  detail: string;
};

export function TestimonialCard({ quote, name, detail }: TestimonialCardProps) {
  return (
    <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-600">“{quote}”</p>
      <div className="mt-4 text-sm font-semibold text-slate-900">{name}</div>
      <div className="text-xs text-slate-500">{detail}</div>
    </div>
  );
}
