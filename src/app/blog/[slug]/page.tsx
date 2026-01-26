import { notFound } from "next/navigation";
import { clinic } from "@/config/clinic";
import { blogPostingSchema } from "@/lib/schema";
import { getPostBySlug, posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      images: [
        {
          url: "/brand/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${clinic.name} blog`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/brand/og-image.jpg"],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema(post)),
        }}
      />
      <section className="bg-gradient-to-br from-[color:var(--brand-mist)] via-white to-[color:var(--brand-sand)]">
        <div className="mx-auto w-full max-w-3xl px-6 py-12 md:py-16">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-blue)]">
            {post.date}
          </div>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base text-slate-600">{post.description}</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 py-12 md:py-16">
        <div className="space-y-6 text-sm text-slate-600">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </div>
  );
}
