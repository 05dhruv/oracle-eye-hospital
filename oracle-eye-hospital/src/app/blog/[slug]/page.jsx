import { notFound } from "next/navigation";
import { PageHeader, formatDate } from "@/components/ui";
import { getPost } from "@/lib/posts";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const p = await getPost(params.slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}

export default async function BlogPost({ params }) {
  const p = await getPost(params.slug);
  if (!p) notFound();
  const listHref = p.type === "NEWS" ? "/news" : "/blog";
  return (
    <>
      <PageHeader title={p.title} intro={formatDate(p.createdAt)} crumbs={[{ label: p.type === "NEWS" ? "News" : "Blog", href: listHref }, { label: p.title }]} />
      <article className="container-x prose-oeh max-w-3xl py-12">
        {/* body is plain text; blank line = new paragraph. React escapes it, so no HTML injection. */}
        {p.body.split(/\n{2,}/).map((para, i) => <p key={i}>{para}</p>)}
      </article>
    </>
  );
}
