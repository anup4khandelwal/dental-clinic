import Link from "next/link";
import { clinic } from "@/config/clinic";
import { posts } from "@/lib/posts";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Blog",
  description:
    "Dental tips, oral health guidance, and clinic updates from Dental Stories.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Dental Stories Blog",
    description:
      "Dental tips, oral health guidance, and clinic updates from Dental Stories.",
    url: "/blog",
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${clinic.name} blog`,
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-[color:var(--brand-mist)] via-white to-[color:var(--brand-sand)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
          <SectionHeading
            eyebrow="Blog"
            title="Dental care tips, straight from the clinic"
            description="Learn how to maintain a healthy smile between visits with our bite-sized guides."
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-3xl border border-[color:var(--brand-mist)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-blue)]">
                {post.date}
              </div>
              <h2 className="mt-3 text-xl font-semibold text-slate-900">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-slate-600">{post.description}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-[color:var(--brand-blue)]">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
