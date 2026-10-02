"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError((await res.json().catch(() => ({}))).error || "Login failed.");
      setBusy(false);
    }
  }

  return (
    <div className="container-x flex min-h-[60vh] items-center justify-center py-16">
      <form onSubmit={submit} className="w-full max-w-sm space-y-4 rounded-2xl border border-ink/10 bg-white p-8 shadow-sm">
        <h1 className="text-3xl">Admin login</h1>
        <label className="block text-sm font-medium">
          Password
          <input type="password" className="field mt-1" value={password} onChange={(e) => setPassword(e.target.value)} autoFocus />
        </label>
        {error && <p className="text-sm text-red-700" role="alert">{error}</p>}
        <button className="btn btn-dark w-full" disabled={busy}>{busy ? "Checking…" : "Log in"}</button>
      </form>
    </div>
  );
}
