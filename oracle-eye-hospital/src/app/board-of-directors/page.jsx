import { PageHeader, EmptyState } from "@/components/ui";

export const metadata = { title: "Board of Directors" };

export default function Board() {
  return (
    <>
      <PageHeader title="Board of directors" crumbs={[{ label: "About Us" }, { label: "Board of Directors" }]} />
      <div className="container-x py-12">
        <EmptyState>Board member profiles will be added here.</EmptyState>
      </div>
    </>
  );
}
