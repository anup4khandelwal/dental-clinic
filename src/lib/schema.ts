import { clinic, site } from "@/config/clinic";

export function localBusinessSchema() {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.name,
    url: site.url,
    telephone: clinic.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${clinic.addressLine1}, ${clinic.addressLine2}`,
      addressLocality: clinic.city,
      addressRegion: clinic.region,
      postalCode: clinic.postalCode,
      addressCountry: clinic.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.coordinates.lat,
      longitude: clinic.coordinates.lng,
    },
    openingHours: clinic.hours,
    image: `${site.url}/brand/og-image.jpg`,
  };

  if (clinic.reviewRating && clinic.reviewCount) {
    base.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: clinic.reviewRating,
      reviewCount: clinic.reviewCount,
    };
  }

  return base;
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  description: string;
  slug: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    description: post.description,
    author: {
      "@type": "Person",
      name: "Dr. Nehal Khandelwal",
    },
    publisher: {
      "@type": "Organization",
      name: clinic.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/brand/logo.webp`,
      },
    },
    image: `${site.url}/brand/og-image.jpg`,
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };
}
