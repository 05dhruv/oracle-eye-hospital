import Link from "next/link";
import { PageHeader, EmptyState, formatDate } from "@/components/ui";
import { getPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";
export const metadata = { title: "News & Events" };

export default async function News() {
  const posts = await getPosts("NEWS");
  return (
    <>
      <PageHeader title="News and events" crumbs={[{ label: "Latest Updates" }, { label: "News & Events" }]} />
      <div className="container-x py-12">
        {posts.length === 0 ? (
          <EmptyState>No news yet. Add one from the admin panel.</EmptyState>
        ) : (
          <div className="grid gap-x-12 md:grid-cols-2">
            {posts.map((p) => (
              <Link key={p.id} href={`/blog/${p.slug}`} className="group border-t border-ink/15 py-6">
                <p className="text-sm text-ink/60">{formatDate(p.createdAt)}</p>
                <h2 className="mt-1 text-2xl group-hover:text-iris">{p.title}</h2>
                <p className="mt-2 text-ink/75">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
