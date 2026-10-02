import { PageHeader, Prose } from "@/components/ui";
import { SITE } from "@/lib/content";
export const metadata = { title: "Careers" };
export default function Career() {
  return (
    <>
      <PageHeader title="Careers at Oracle Eye Hospital" crumbs={[{ label: "Career" }]} />
      <Prose>
        <p>We are always happy to hear from doctors, optometrists, nurses and administrative staff who care about patients.</p>
        <p>Send your CV to <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a> and mention the role you are interested in.</p>
      </Prose>
    </>
  );
}
