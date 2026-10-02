import { PageHeader, Prose } from "@/components/ui";

export const metadata = { title: "Chairman's Message" };

export default function Chairman() {
  return (
    <>
      <PageHeader title="Chairman's message" crumbs={[{ label: "About Us" }, { label: "Chairman's Message" }]} />
      <Prose>
        {/* TODO: replace this placeholder with the Chairman's own words */}
        <p>The Chairman's message will be published here.</p>
      </Prose>
    </>
  );
}
