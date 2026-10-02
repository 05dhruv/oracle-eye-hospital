import { PageHeader } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/content";

export const metadata = { title: "Patient Stories & Testimonials" };

export default function Testimonials() {
  return (
    <>
      <PageHeader title="Patient success stories" intro="In their own words." crumbs={[{ label: "About Us" }, { label: "Testimonials" }]} />
      <div className="container-x grid gap-8 py-12 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="border-t-2 border-iris pt-5">
            <blockquote className="leading-7">“{t.text}”</blockquote>
            <figcaption className="mt-4 text-sm font-semibold">{t.name}, <span className="font-normal text-ink/60">{t.city}</span></figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
