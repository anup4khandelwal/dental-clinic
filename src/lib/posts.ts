export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "reddit-brushing-timing",
    title: "Reddit’s Most-Asked Question: When Should You Brush After Eating?",
    description:
      "We rounded up recurring advice from dental threads to help you time brushing around meals.",
    date: "2026-01-27",
    content: [
      "If you just had something acidic (like sour candy or citrus), wait about 30 minutes before brushing.",
      "If you cannot wait, rinse with plain water first to reduce acidity, then brush a bit later.",
      "For non-sticky foods, many people aim for a shorter wait; sticky foods tend to linger longer.",
      "Brushing is important, but rushing it right after acidic foods can be harsher on enamel.",
      "When in doubt, ask your dentist for a routine that fits your diet and schedule.",
      "Reddit tips are general advice, not a substitute for a dental exam.",
    ],
  },
  {
    slug: "reddit-spit-dont-rinse",
    title: "Spit, Don’t Rinse? The Fluoride Tip Reddit Keeps Sharing",
    description:
      "A common tip from dental subreddits: spit after brushing and let fluoride sit for a bit.",
    date: "2026-01-27",
    content: [
      "After brushing with fluoride toothpaste, spit out the foam instead of rinsing right away.",
      "Leaving a thin fluoride layer on teeth helps it work longer against decay.",
      "Many people wait around 20–30 minutes before eating or drinking after brushing.",
      "If you must drink water soon, do it lightly and avoid strong rinsing.",
      "Use a routine you can keep consistently; technique matters as much as products.",
      "If you have sensitivity or dental work, ask your dentist what’s best for you.",
    ],
  },
  {
    slug: "reddit-dental-tips",
    title: "Best Dental Tips from Reddit (Dentist-Backed Highlights)",
    description:
      "We summarized the most common, practical advice shared in dental subreddits so you can apply it daily.",
    date: "2026-01-27",
    content: [
      "Wait about 30 minutes after acidic foods or drinks before brushing.",
      "If you cannot wait, rinse with water and brush a little later.",
      "Spit after brushing rather than rinsing right away to leave fluoride on the teeth.",
      "Some dental threads suggest avoiding food or drinks for a short window after brushing.",
      "Always check with your dentist if you have ongoing sensitivity or restorations.",
    ],
  },
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
