import { PageHeader, EmptyState } from "@/components/ui";
export const metadata = { title: "Awards" };
export default function Awards() {
  return (
    <>
      <PageHeader title="Awards and recognition" crumbs={[{ label: "Academic" }, { label: "Awards" }]} />
      <div className="container-x py-12"><EmptyState>Awards will be listed here.</EmptyState></div>
    </>
  );
}
