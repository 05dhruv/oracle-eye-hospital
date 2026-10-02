import { PageHeader } from "@/components/ui";
import AppointmentForm from "@/components/AppointmentForm";
import ContactForm from "./ContactForm";
import { SITE } from "@/lib/content";

export const metadata = { title: "Contact Us & Book Appointment", description: "Book an appointment or contact Oracle Eye Hospital, Moradabad. Open Mon–Sat 10 AM – 8 PM, 24x7 helpline." };

export default function Contact() {
  return (
    <>
      <PageHeader title="Contact us" intro="Book an appointment or send us a question." crumbs={[{ label: "Contact Us" }]} />

      <div className="container-x grid gap-12 py-12 md:grid-cols-5">
        <section id="appointment" className="scroll-mt-32 md:col-span-3">
          <h2 className="text-3xl">Book an appointment</h2>
          <div className="mt-6 rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"><AppointmentForm /></div>
        </section>

        <aside className="space-y-6 md:col-span-2">
          <div>
            <h2 className="text-xl">Hospital</h2>
            <a href={SITE.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-2 block text-ink/80 underline-offset-4 hover:underline">{SITE.address}</a>
          </div>
          <div>
            <h2 className="text-xl">Call</h2>
            {SITE.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-ink/80 hover:text-iris">{p}</a>)}
            <p className="text-sm text-ink/60">{SITE.helpline} is a 24x7 helpline</p>
          </div>
          <div>
            <h2 className="text-xl">Hours</h2>
            <p className="text-ink/80">{SITE.hours}</p>
          </div>
          <div>
            <h2 className="text-xl">Email</h2>
            <a href={`mailto:${SITE.email}`} className="text-ink/80 hover:text-iris">{SITE.email}</a>
          </div>
        </aside>
      </div>

      <section className="container-x pb-8">
        <h2 className="text-3xl">Send a message</h2>
        <div className="mt-6 max-w-2xl"><ContactForm /></div>
      </section>
    </>
  );
}
