export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "daily-oral-care-routine",
    title: "A Simple Daily Oral Care Routine That Actually Works",
    description:
      "Small habits make a big difference. Follow this practical routine to keep your teeth and gums healthy.",
    date: "2025-01-12",
    content: [
      "Brush twice a day with a fluoride toothpaste and a soft-bristled brush.",
      "Spend a full two minutes and angle the brush at 45 degrees to the gumline.",
      "Floss nightly to remove plaque between teeth where brushes cannot reach.",
      "Finish with a gentle tongue clean and rinse with an alcohol-free mouthwash.",
      "Replace your brush every 3 months or after illness.",
    ],
  },
  {
    slug: "when-to-get-teeth-whitening",
    title: "Teeth Whitening: When It Helps and When to Avoid It",
    description:
      "Whitening is safe when done right. Learn who is a good candidate and what to expect.",
    date: "2025-02-05",
    content: [
      "Professional whitening is best for surface stains from tea, coffee, or tobacco.",
      "If you have cavities or gum sensitivity, treat those issues before whitening.",
      "Overuse of whitening products can cause sensitivity and uneven color.",
      "Ask your dentist for the safest option based on your enamel and restorations.",
    ],
  },
  {
    slug: "kids-first-dentist-visit",
    title: "Your Child's First Dentist Visit: What to Expect",
    description:
      "Start early to build trust and healthy habits. Here is how we keep kids comfortable.",
    date: "2025-03-01",
    content: [
      "The first visit is gentle and focused on comfort, education, and prevention.",
      "We check growth, gum health, and early signs of decay.",
      "Parents get guidance on brushing, diet, and thumb-sucking concerns.",
      "Bring a favorite toy or book to help your child feel at ease.",
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  posts.find((post) => post.slug === slug);
