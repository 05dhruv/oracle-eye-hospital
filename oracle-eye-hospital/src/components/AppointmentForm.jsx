"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { DOCTORS, SERVICES, SITE } from "@/lib/content";

const EMPTY = { name: "", phone: "", email: "", doctor: "", service: "", preferredDate: "", message: "", website: "" };

export default function AppointmentForm({ compact = false }) {
  const [form, setForm] = useState(EMPTY);
  const [state, setState] = useState("idle"); // idle | sending | done | error
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const today = new Date().toISOString().slice(0, 10);

  async function submit(e) {
    e.preventDefault();
    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setState("done");
      setForm(EMPTY);
    } catch (err) {
      setError(err.message);
      setState("error");
    }
  }

  if (state === "done")
    return (
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-mist p-8" role="status">
        <h3 className="text-2xl">Request received</h3>
        <p className="mt-2 text-ink/80">
          Our team will call you to confirm your appointment. For anything urgent, call {SITE.helpline}.
        </p>
        <button className="btn btn-outline mt-5" onClick={() => setState("idle")}>Book another</button>
      </motion.div>
    );

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <label className="block text-sm font-medium">
          Full name
          <input className="field mt-1" required value={form.name} onChange={set("name")} autoComplete="name" />
        </label>
        <label className="block text-sm font-medium">
          Phone number
          <input className="field mt-1" required inputMode="tel" value={form.phone} onChange={set("phone")} autoComplete="tel" />
        </label>
        <label className="block text-sm font-medium">
          Email (optional)
          <input className="field mt-1" type="email" value={form.email} onChange={set("email")} autoComplete="email" />
        </label>
        <label className="block text-sm font-medium">
          Preferred date
          <input className="field mt-1" type="date" min={today} value={form.preferredDate} onChange={set("preferredDate")} />
        </label>
        <label className="block text-sm font-medium">
          Doctor
          <select className="field mt-1" value={form.doctor} onChange={set("doctor")}>
            <option value="">Any available doctor</option>
            {DOCTORS.map((d) => <option key={d.slug} value={d.name}>{d.name}</option>)}
          </select>
        </label>
        <label className="block text-sm font-medium">
          Service
          <select className="field mt-1" value={form.service} onChange={set("service")}>
            <option value="">General eye check-up</option>
            {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
          </select>
        </label>
      </div>
      <label className="block text-sm font-medium">
        Message (optional)
        <textarea className="field mt-1" rows={3} value={form.message} onChange={set("message")} />
      </label>

      {/* honeypot: real people never see or fill this */}
      <input tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" name="website" value={form.website} onChange={set("website")} />

      {state === "error" && <p className="text-sm text-red-700" role="alert">{error}</p>}

      <button className="btn btn-primary w-full sm:w-auto" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Book appointment"}
      </button>
    </form>
  );
}
