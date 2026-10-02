import { PageHeader, Prose } from "@/components/ui";
import { STATS } from "@/lib/content";

export const metadata = { title: "About Oracle Eye Hospital", description: "Trusted ophthalmic care in Moradabad with advanced technology and compassionate treatment." };

export default function Overview() {
  return (
    <>
      <PageHeader title="About Oracle Eye Hospital" intro="Trusted ophthalmic care with experienced surgeons, advanced technology and compassionate treatment for patients of all ages." crumbs={[{ label: "About Us" }, { label: "Overview" }]} />
      <div className="container-x grid gap-8 py-12 sm:grid-cols-3">
        {STATS.map((s) => (
          <div key={s.label} className="border-l-2 border-sun pl-4">
            <p className="font-display text-4xl font-semibold">{s.value}</p>
            <p className="text-sm text-ink/70">{s.label}</p>
          </div>
        ))}
      </div>
      <Prose>
        {/* TODO: replace with the hospital's own story */}
        <p>Oracle Eye Hospital provides comprehensive eye care in Moradabad, from routine check-ups and glasses to cataract surgery, laser vision correction, retina and glaucoma care.</p>
        <p>Our approach is simple: examine carefully, explain clearly, and treat only what needs treating. Every patient gets time with the doctor and a plan they understand.</p>
        <h2>What we offer</h2>
        <p>Ten specialised services under one roof, including a dry eye clinic, a myopia clinic for children, and an orthoptics service for eye alignment and binocular vision.</p>
      </Prose>
    </>
  );
}
