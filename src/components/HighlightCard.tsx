type HighlightCardProps = {
  title: string;
  description: string;
};

export function HighlightCard({ title, description }: HighlightCardProps) {
  return (
    <div className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  );
}
