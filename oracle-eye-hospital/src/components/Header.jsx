"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, SERVICES, SITE } from "@/lib/content";

function childrenOf(item) {
  if (item.childrenFrom === "services")
    return SERVICES.map((s) => ({ label: s.title, href: `/services/${s.slug}` }));
  return item.children;
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cornea/95 backdrop-blur">
      {/* top info strip */}
      <div className="hidden bg-ink text-xs text-white/85 md:block">
        <div className="container-x flex items-center justify-between py-2">
          <span>{SITE.address}</span>
          <span className="flex gap-5">
            <span>{SITE.hours}</span>
            <a href={`tel:${SITE.helpline.replace(/\s/g, "")}`} className="font-semibold text-white">
              24x7 Helpline {SITE.helpline}
            </a>
          </span>
        </div>
      </div>

      <div className="border-b border-ink/10">
        <div className="container-x flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3" aria-label="Oracle Eye Hospital home">
            <svg width="38" height="38" viewBox="0 0 40 40" aria-hidden="true">
              <path d="M2 20C9 8 31 8 38 20 31 32 9 32 2 20Z" fill="#0A2A33" />
              <circle cx="20" cy="20" r="8" fill="#137C8B" />
              <circle cx="20" cy="20" r="3.5" fill="#0A2A33" />
              <circle cx="22.5" cy="17.5" r="1.4" fill="#fff" />
            </svg>
            <span className="font-display text-xl font-semibold leading-none">
              Oracle <span className="block text-sm font-normal text-ink/70">Eye Hospital</span>
            </span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV.map((item) => {
              const kids = childrenOf(item);
              if (!kids)
                return (
                  <Link key={item.label} href={item.href} className="rounded px-3 py-2 text-sm font-medium hover:text-iris">
                    {item.label}
                  </Link>
                );
              return (
                <div key={item.label} className="group relative">
                  <button className="flex items-center gap-1 rounded px-3 py-2 text-sm font-medium hover:text-iris" aria-haspopup="true">
                    {item.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
                  </button>
                  <div className="invisible absolute left-0 top-full min-w-[15rem] rounded-xl border border-ink/10 bg-white p-2 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {kids.map((c) => (
                      <Link key={c.href} href={c.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-mist">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact-us#appointment" className="btn btn-primary hidden sm:inline-flex">
              Book appointment
            </Link>
            <button
              className="rounded-lg border border-ink/20 p-2 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="max-h-[75vh] overflow-y-auto border-b border-ink/10 bg-white lg:hidden"
            aria-label="Mobile"
          >
            <div className="container-x py-3">
              {NAV.map((item) => {
                const kids = childrenOf(item);
                if (!kids)
                  return (
                    <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="block border-b border-ink/10 py-3 font-medium">
                      {item.label}
                    </Link>
                  );
                return (
                  <details key={item.label} className="border-b border-ink/10">
                    <summary className="flex cursor-pointer items-center justify-between py-3 font-medium">
                      {item.label}
                      <span aria-hidden="true">+</span>
                    </summary>
                    <div className="pb-2 pl-3">
                      {kids.map((c) => (
                        <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-ink/80">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                );
              })}
              <Link href="/contact-us#appointment" onClick={() => setOpen(false)} className="btn btn-primary mt-4 w-full">
                Book appointment
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
