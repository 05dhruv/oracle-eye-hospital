import Link from "next/link";
import EyeHero from "@/components/EyeHero";
import AppointmentForm from "@/components/AppointmentForm";
import { Avatar } from "@/components/ui";
import { SITE, STATS, SERVICES, DOCTORS, FAQS, TESTIMONIALS } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-gradient-to-b from-mist to-cornea">
        <div className="container-x grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div>
            <h1 className="text-5xl font-semibold leading-[1.05] md:text-6xl">Clear vision awaits.</h1>
            <p className="mt-5 max-w-lg text-lg text-ink/75">
              LASER eye correction, retinal surgery and microincision cataract surgery, with a team that explains every step.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-us#appointment" className="btn btn-primary">Book appointment</Link>
              <a href={`tel:${SITE.helpline.replace(/\s/g, "")}`} className="btn btn-outline">Call {SITE.helpline}</a>
            </div>
            <p className="mt-6 text-sm text-ink/60">{SITE.hours} · 24x7 helpline for emergencies</p>
          </div>
          <div className="mx-auto w-full max-w-md md:max-w-none">
            <EyeHero />
          </div>
        </div>
      </section>

      {/* Stats + about */}
      <section className="container-x grid gap-10 py-16 md:grid-cols-5 md:py-24">
        <div className="md:col-span-3">
          <h2 className="text-3xl md:text-4xl">We preserve, enhance and protect your vision</h2>
          <p className="mt-4 max-w-xl leading-7 text-ink/80">
            Oracle Eye Hospital brings trusted ophthalmic care to Moradabad: advanced technology, experienced surgeons and
            compassionate treatment for patients of every age.
          </p>
          <Link href="/overview" className="btn btn-dark mt-6">About the hospital</Link>
        </div>
        <dl className="grid grid-cols-3 gap-4 md:col-span-2 md:grid-cols-1">
          {STATS.map((s) => (
            <div key={s.label} className="border-l-2 border-sun pl-4">
              <dt className="order-2 text-sm text-ink/70">{s.label}</dt>
              <dd className="font-display text-3xl font-semibold md:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Services */}
      <section className="bg-ink py-16 text-white md:py-24">
        <div className="container-x">
          <h2 className="max-w-2xl text-3xl md:text-4xl">Eye care for every part of the eye, and every age</h2>
          <ul className="mt-10 grid md:grid-cols-2 md:gap-x-12">
            {SERVICES.map((s) => (
              <li key={s.slug} className="border-t border-white/15">
                <Link href={`/services/${s.slug}`} className="group flex items-start justify-between gap-4 py-5">
                  <span>
                    <span className="block font-display text-xl group-hover:text-sun">{s.title}</span>
                    <span className="mt-1 block text-sm text-white/65">{s.short}</span>
                  </span>
                  <span className="mt-1 text-white/40 transition group-hover:translate-x-1 group-hover:text-sun" aria-hidden="true">›</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Booking */}
      <section id="appointment" className="container-x grid gap-10 py-16 md:grid-cols-5 md:py-24">
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl">Book a comprehensive eye check-up</h2>
          <p className="mt-4 text-ink/75">
            Tell us when you would like to come and which doctor you prefer. We will call to confirm your slot.
          </p>
          <p className="mt-6 text-sm text-ink/70">
            Walk-ins are welcome too. Booking just shortens your wait.
          </p>
        </div>
        <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm md:col-span-3 md:p-8">
          <AppointmentForm />
        </div>
      </section>

      {/* Doctors */}
      <section className="bg-mist py-16 md:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-xl text-3xl md:text-4xl">Our eye doctors</h2>
            <Link href="/doctor-team" className="text-sm font-semibold text-iris-dark underline-offset-4 hover:underline">View the full team</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DOCTORS.map((d) => (
              <Link key={d.slug} href={`/doctors/${d.slug}`} className="group block">
                <Avatar name={d.name} photo={d.photo} className="aspect-[4/5] w-full rounded-2xl" />
                <h3 className="mt-3 text-xl group-hover:text-iris">{d.name}</h3>
                <p className="text-sm text-ink/70">{d.quals}</p>
                <p className="text-sm text-ink/70">{d.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl">What patients say</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="border-t-2 border-iris pt-5">
              <blockquote className="leading-7 text-ink/85">“{t.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">{t.name}, <span className="font-normal text-ink/60">{t.city}</span></figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink/60">4.2 on Google from 12k+ ratings</p>
      </section>

      {/* FAQ + helpline */}
      <section className="container-x grid gap-12 pb-8 md:grid-cols-5">
        <div className="md:col-span-3">
          <h2 className="text-3xl md:text-4xl">Common questions</h2>
          <div className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span className="text-xl text-iris transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 max-w-2xl leading-7 text-ink/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
        <aside className="self-start rounded-2xl bg-ink p-8 text-white md:col-span-2">
          <h2 className="text-2xl">Need help right now?</h2>
          <p className="mt-2 text-white/75">Our helpline is open 24 hours, every day.</p>
          <a href={`tel:${SITE.helpline.replace(/\s/g, "")}`} className="mt-5 block font-display text-3xl text-sun">{SITE.helpline}</a>
          <Link href="/cashless-facility" className="mt-6 inline-block text-sm underline underline-offset-4">Cashless and insurance (TPA) list</Link>
        </aside>
      </section>
    </>
  );
}
