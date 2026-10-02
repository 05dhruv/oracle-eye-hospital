import Link from "next/link";
import { PageHeader, Avatar } from "@/components/ui";
import { DOCTORS } from "@/lib/content";

export const metadata = { title: "Our Doctors", description: "Meet the eye specialists at Oracle Eye Hospital, Moradabad." };

export default function DoctorTeam() {
  return (
    <>
      <PageHeader title="Our eye doctors" intro="Specialists with more than a decade of experience. Your comfort and wellbeing come first." crumbs={[{ label: "Clinic Team" }, { label: "Doctors" }]} />
      <div className="container-x grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {DOCTORS.map((d) => (
          <Link key={d.slug} href={`/doctors/${d.slug}`} className="group block">
            <Avatar name={d.name} photo={d.photo} className="aspect-[4/5] w-full rounded-2xl" />
            <h2 className="mt-3 text-xl group-hover:text-iris">{d.name}</h2>
            <p className="text-sm text-ink/70">{d.quals}</p>
            <p className="text-sm text-ink/70">{d.title}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
