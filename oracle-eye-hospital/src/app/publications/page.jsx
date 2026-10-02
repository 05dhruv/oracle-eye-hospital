import { PageHeader, EmptyState } from "@/components/ui";
export const metadata = { title: "Publications" };
export default function Publications() {
  return (
    <>
      <PageHeader title="Publications" crumbs={[{ label: "Academic" }, { label: "Publications" }]} />
      <div className="container-x py-12"><EmptyState>Research publications will be listed here.</EmptyState></div>
    </>
  );
}
