type TestimonialCardProps = {
  quote: string;
  name: string;
  detail: string;
  rating?: number;
};

export function TestimonialCard({
  quote,
  name,
  detail,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-center gap-1 text-amber-400">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>{index < rating ? "★" : "☆"}</span>
        ))}
      </div>
      <p className="text-sm text-slate-600">“{quote}”</p>
      <div className="mt-4 text-sm font-semibold text-slate-900">{name}</div>
      <div className="text-xs text-slate-500">{detail}</div>
    </div>
  );
}
