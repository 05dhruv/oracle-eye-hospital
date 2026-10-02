"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const STATUSES = ["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"];
const fmt = (d) => new Date(d).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
const fmtDay = (d) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export default function AdminPanel({ appointments, enquiries, posts }) {
  const router = useRouter();
  const [tab, setTab] = useState("appointments");
  const [filter, setFilter] = useState("ALL");
  const [msg, setMsg] = useState("");
  const [post, setPost] = useState({ type: "BLOG", title: "", excerpt: "", body: "" });

  async function call(url, method, body) {
    const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : undefined });
    if (!res.ok) {
      setMsg((await res.json().catch(() => ({}))).error || "Action failed");
      return false;
    }
    setMsg("");
    router.refresh(); // re-runs the server page so lists update
    return true;
  }

  async function logout() {
    await call("/api/admin/logout", "POST");
    router.push("/admin/login");
  }

  async function createPost(e) {
    e.preventDefault();
    if (await call("/api/admin/posts", "POST", post)) setPost({ ...post, title: "", excerpt: "", body: "" });
  }

  const shown = filter === "ALL" ? appointments : appointments.filter((a) => a.status === filter);
  const pending = appointments.filter((a) => a.status === "PENDING").length;
  const unread = enquiries.filter((e) => !e.isRead).length;

  const tabs = [
    ["appointments", `Appointments${pending ? ` (${pending} new)` : ""}`],
    ["enquiries", `Messages${unread ? ` (${unread} unread)` : ""}`],
    ["posts", "Blog & news"],
  ];

  return (
    <div className="container-x py-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl">Admin</h1>
        <button onClick={logout} className="btn btn-outline">Log out</button>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 border-b border-ink/10 pb-3" role="tablist">
        {tabs.map(([k, l]) => (
          <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)} className={`rounded-full px-4 py-2 text-sm font-medium ${tab === k ? "bg-ink text-white" : "bg-mist hover:bg-iris-light"}`}>
            {l}
          </button>
        ))}
      </div>

      {msg && <p className="mt-4 text-sm text-red-700" role="alert">{msg}</p>}

      {tab === "appointments" && (
        <section className="mt-6">
          <label className="text-sm font-medium">
            Show{" "}
            <select className="field ml-2 inline-block w-auto py-2" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="ALL">All</option>
              {STATUSES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>
          <div className="mt-4 overflow-x-auto rounded-xl border border-ink/10">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-mist"><tr>{["Received", "Patient", "Doctor / service", "Preferred", "Status", ""].map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr></thead>
              <tbody>
                {shown.length === 0 && <tr><td colSpan={6} className="px-4 py-8 text-center text-ink/60">No appointments.</td></tr>}
                {shown.map((a) => (
                  <tr key={a.id} className="border-t border-ink/10 align-top">
                    <td className="px-4 py-3 whitespace-nowrap">{fmt(a.createdAt)}</td>
                    <td className="px-4 py-3">
                      <p className="font-medium">{a.name}</p>
                      <a className="text-iris-dark" href={`tel:${a.phone}`}>{a.phone}</a>
                      {a.email && <p className="text-ink/60">{a.email}</p>}
                      {a.message && <p className="mt-1 max-w-xs text-ink/70">{a.message}</p>}
                    </td>
                    <td className="px-4 py-3">{a.doctor || "Any doctor"}<br /><span className="text-ink/60">{a.service || "General check-up"}</span></td>
                    <td className="px-4 py-3 whitespace-nowrap">{a.preferredDate ? fmtDay(a.preferredDate) : "—"}</td>
                    <td className="px-4 py-3">
                      <select className="field py-2" value={a.status} onChange={(e) => call(`/api/admin/appointments/${a.id}`, "PATCH", { status: e.target.value })} aria-label={`Status for ${a.name}`}>
                        {STATUSES.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-red-700 hover:underline" onClick={() => confirm(`Delete appointment for ${a.name}?`) && call(`/api/admin/appointments/${a.id}`, "DELETE")}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {tab === "enquiries" && (
        <section className="mt-6 space-y-3">
          {enquiries.length === 0 && <p className="text-ink/60">No messages.</p>}
          {enquiries.map((e) => (
            <article key={e.id} className={`rounded-xl border p-4 ${e.isRead ? "border-ink/10" : "border-iris bg-mist"}`}>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <p className="font-semibold">{e.name} <span className="font-normal text-ink/60">· {fmt(e.createdAt)}</span></p>
                  <p className="text-sm text-ink/70">{[e.phone, e.email].filter(Boolean).join(" · ")}</p>
                </div>
                <div className="flex gap-4 text-sm">
                  <button className="text-iris-dark hover:underline" onClick={() => call(`/api/admin/enquiries/${e.id}`, "PATCH", { isRead: !e.isRead })}>{e.isRead ? "Mark unread" : "Mark read"}</button>
                  <button className="text-red-700 hover:underline" onClick={() => confirm("Delete this message?") && call(`/api/admin/enquiries/${e.id}`, "DELETE")}>Delete</button>
                </div>
              </div>
              {e.subject && <p className="mt-2 font-medium">{e.subject}</p>}
              <p className="mt-1 whitespace-pre-wrap text-ink/85">{e.message}</p>
            </article>
          ))}
        </section>
      )}

      {tab === "posts" && (
        <section className="mt-6 grid gap-10 md:grid-cols-2">
          <form onSubmit={createPost} className="space-y-3">
            <h2 className="text-xl">New post</h2>
            <select className="field" value={post.type} onChange={(e) => setPost({ ...post, type: e.target.value })}>
              <option value="BLOG">Blog</option>
              <option value="NEWS">News / event</option>
            </select>
            <input className="field" placeholder="Title" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} required />
            <input className="field" placeholder="Short summary (shown in lists)" value={post.excerpt} onChange={(e) => setPost({ ...post, excerpt: e.target.value })} required />
            <textarea className="field" rows={10} placeholder="Body. Leave a blank line between paragraphs." value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} required />
            <button className="btn btn-dark">Publish</button>
          </form>
          <div>
            <h2 className="text-xl">Published</h2>
            <ul className="mt-3 divide-y divide-ink/10 border-y border-ink/10">
              {posts.length === 0 && <li className="py-4 text-ink/60">Nothing yet.</li>}
              {posts.map((p) => (
                <li key={p.id} className="flex items-center justify-between gap-3 py-3">
                  <span>
                    <a href={`/blog/${p.slug}`} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-iris">{p.title}</a>
                    <span className="block text-xs text-ink/60">{p.type === "NEWS" ? "News" : "Blog"} · {fmtDay(p.createdAt)}</span>
                  </span>
                  <button className="text-sm text-red-700 hover:underline" onClick={() => confirm(`Delete "${p.title}"?`) && call(`/api/admin/posts/${p.id}`, "DELETE")}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
