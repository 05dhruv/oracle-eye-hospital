import { PageHeader, EmptyState } from "@/components/ui";

export const metadata = { title: "Optometrist Team" };

// Add optometrists here as { name, quals } and map over them like the doctors page.
export default function Optometrists() {
  return (
    <>
      <PageHeader title="Optometrist team" intro="Our optometrists handle vision testing, glasses, contact lens fitting and pre-check-up measurements." crumbs={[{ label: "Clinic Team" }, { label: "Optometrists" }]} />
      <div className="container-x py-12">
        <EmptyState>Optometrist profiles will be added here.</EmptyState>
      </div>
    </>
  );
}
