import { PageHeader, Prose } from "@/components/ui";
export const metadata = { title: "Charitable Wings" };
export default function Charitable() {
  return (
    <>
      <PageHeader title="Charitable wings" intro="Sight should not depend on what a person can afford." crumbs={[{ label: "Charitable Wings" }]} />
      <Prose>
        {/* TODO: describe free camps, subsidised surgeries and trusts */}
        <p>Information about our free eye camps and subsidised treatment programmes will be published here.</p>
      </Prose>
    </>
  );
}
