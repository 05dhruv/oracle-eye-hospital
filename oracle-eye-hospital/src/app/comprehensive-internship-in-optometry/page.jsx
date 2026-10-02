import { PageHeader, Prose } from "@/components/ui";
import { SITE } from "@/lib/content";

export const metadata = { title: "Comprehensive Clinical Optometry Internship" };

export default function Internship() {
  return (
    <>
      <PageHeader title="Comprehensive clinical optometry internship" crumbs={[{ label: "Academic" }, { label: "Optometry Internship" }]} />
      <Prose>
        {/* TODO: add real duration, eligibility, stipend and curriculum */}
        <p>Our internship gives optometry students hands-on clinical training alongside our doctors and optometrists.</p>
        <p>Details on eligibility, duration and how to apply will be published here. To enquire now, write to <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      </Prose>
    </>
  );
}
