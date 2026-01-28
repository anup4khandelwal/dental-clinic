import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcon";

type ServiceCardProps = {
  title: string;
  description: string;
  href?: string;
  iconKey?: string;
};

export function ServiceCard({ title, description, href, iconKey }: ServiceCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div>
        <div className="mb-4">
          <ServiceIcon iconKey={iconKey} />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      </div>
      {href ? (
        <Link
          href={href}
          className="mt-4 text-sm font-semibold text-[color:var(--brand-blue)] hover:text-[color:var(--brand-blue-strong)]"
        >
          View details →
        </Link>
      ) : null}
    </div>
  );
}
