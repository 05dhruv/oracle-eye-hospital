// Run with: npm run db:seed  (adds a few sample posts so Blog / News aren't empty)
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const posts = [
  {
    type: "BLOG",
    slug: "20-20-20-rule-for-screen-time",
    title: "The 20-20-20 rule for tired eyes",
    excerpt: "A simple habit that eases eye strain from phones and computers.",
    body: "Long hours on screens make us blink less, which dries and tires the eyes.\n\nEvery 20 minutes, look at something about 20 feet (6 metres) away for at least 20 seconds. Blink fully and often. Keep the screen slightly below eye level and avoid glare.\n\nIf strain, headaches or blurred vision continue, get your eyes checked. You may need glasses or treatment for dry eye.",
  },
  {
    type: "BLOG",
    slug: "why-diabetics-need-yearly-retina-check",
    title: "Why people with diabetes need a yearly retina check",
    excerpt: "Diabetic eye disease often has no early symptoms, so screening matters.",
    body: "High blood sugar can slowly damage the tiny blood vessels in the retina. In the early stages you may notice nothing at all.\n\nA dilated retina examination once a year can find changes early, when treatment works best. Keeping blood sugar, blood pressure and cholesterol under control also protects your eyes.",
  },
  {
    type: "NEWS",
    slug: "free-eye-screening-camp",
    title: "Free eye screening camp (sample event)",
    excerpt: "Sample news item. Replace this from the admin panel.",
    body: "This is a sample news post. Log in to /admin and delete or replace it with your real announcements.",
  },
];

async function main() {
  for (const p of posts) {
    await prisma.post.upsert({ where: { slug: p.slug }, update: {}, create: p });
  }
  console.log(`Seeded ${posts.length} posts`);
}

main().finally(() => prisma.$disconnect());
