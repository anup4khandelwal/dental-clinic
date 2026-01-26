# Dental Stories Website

Modern, fast, SEO-friendly website built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Clinic details

Update clinic name, address, phone, and SEO defaults in:
- `src/config/clinic.ts`

## Blog posts

Posts are stored as JSON in:
- `src/lib/posts.ts`

Add a new entry and it will appear on `/blog` and generate a new slug page.

## Sitemap

Sitemap and robots.txt are generated after build via `next-sitemap`:

```bash
npm run build
```

Adjust the canonical base URL in `next-sitemap.config.mjs` or via `SITE_URL` env var.

## Content sources

Clinic name, logo, and contact details were derived from:
- `source/A4 Pamphlet_CTC.pdf`
- `source/WhatsApp Image 2026-01-16 at 8.13.51 PM.jpeg`
- `source/WhatsApp Image 2026-01-11 at 9.36.23 PM.jpeg`
- `source/WhatsApp Image 2026-01-22 at 9.30.58 PM.jpeg`

Clinic tour video used on the Home page:
- `public/videos/clinic_tour.mp4`

Patient success story video used on the Home page:
- `public/videos/patient_success_stories.mp4`

Doctor profile image used on Home/About:
- `public/images/doctor-nehal.png`

Clinic gallery images:
- `public/images/clinic/IMG_7413.JPG.jpeg`
- `public/images/clinic/IMG_7414.JPG.jpeg`
- `public/images/clinic/IMG_7415.JPG.jpeg`
- `public/images/clinic/IMG_7416.JPG.jpeg`
- `public/images/clinic/IMG_7417.JPG.jpeg`
- `public/images/clinic/IMG_7418.JPG.jpeg`
- `public/images/clinic/IMG_7419.JPG.jpeg`
- `public/images/clinic/IMG_7420.JPG.jpeg`
- `public/images/clinic/IMG_7421.JPG.jpeg`
- `public/images/clinic/IMG_7422.JPG.jpeg`
- `public/images/clinic/IMG_7423.JPG.jpeg`
- `public/images/clinic/IMG_7424.JPG.jpeg`
- `public/images/clinic/IMG_7425.JPG.jpeg`
- `public/images/clinic/IMG_7426.JPG.jpeg`
- `public/images/clinic/IMG_7427.JPG.jpeg`
