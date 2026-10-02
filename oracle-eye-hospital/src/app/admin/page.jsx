import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { isAdmin } from "@/lib/auth";
import AdminPanel from "./AdminPanel";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!isAdmin()) redirect("/admin/login");

  const [appointments, enquiries, posts] = await Promise.all([
    prisma.appointment.findMany({ orderBy: { createdAt: "desc" }, take: 200 }),
    prisma.enquiry.findMany({ orderBy: { createdAt: "desc" }, take: 200 }),
    prisma.post.findMany({ orderBy: { createdAt: "desc" }, take: 100 }),
  ]);

  // Dates must be plain strings to pass from server to client component
  const ser = (rows) => rows.map((r) => ({ ...r, createdAt: r.createdAt.toISOString(), preferredDate: r.preferredDate ? r.preferredDate.toISOString() : null }));

  return <AdminPanel appointments={ser(appointments)} enquiries={ser(enquiries)} posts={ser(posts)} />;
}
