import { PageHeader, Prose } from "@/components/ui";
export const metadata = { title: "Community Outreach" };
export default function Outreach() {
  return (
    <>
      <PageHeader title="Community outreach" crumbs={[{ label: "Community Outreach" }]} />
      <Prose>
        {/* TODO: add school screening, camps and awareness drives */}
        <p>Our school screening programmes, eye camps and awareness drives will be described here.</p>
      </Prose>
    </>
  );
}
