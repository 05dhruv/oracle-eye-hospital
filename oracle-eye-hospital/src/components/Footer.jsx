import Link from "next/link";
import { SITE, SERVICES } from "@/lib/content";

const quick = [
  ["Home", "/"],
  ["About us", "/overview"],
  ["Doctors", "/doctor-team"],
  ["Community outreach", "/community-outreach"],
  ["Careers", "/career"],
  ["Contact us", "/contact-us"],
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white/85">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-2xl text-white">Oracle Eye Hospital</p>
          <p className="mt-3 text-sm leading-6">
            Cataract, LASIK, retina, glaucoma, pediatric ophthalmology and more, under one roof in Moradabad.
          </p>
          <div className="mt-4 flex gap-4 text-sm">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">Instagram</a>
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">Facebook</a>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-base text-white">Quick links</h3>
          <ul className="space-y-2 text-sm">
            {quick.map(([l, h]) => (
              <li key={h}><Link href={h} className="hover:text-white">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-base text-white">Services</h3>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="hover:text-white">{s.title}</Link></li>
            ))}
            <li><Link href="/services" className="hover:text-white">All services</Link></li>
          </ul>
        </div>

        <div className="text-sm leading-6">
          <h3 className="mb-3 text-base text-white">Visit us</h3>
          <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">{SITE.address}</a>
          <p className="mt-3">{SITE.hours}</p>
          <p className="mt-3">
            {SITE.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block hover:text-white">{p}</a>
            ))}
            <a href={`mailto:${SITE.email}`} className="block hover:text-white">{SITE.email}</a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Oracle Eye Hospital. All rights reserved.
      </div>
    </footer>
  );
}
