import { PageHeader, Prose } from "@/components/ui";
import { SITE, TPA_LIST } from "@/lib/content";

export const metadata = { title: "Cashless Facility & TPA List", description: "Cashless treatment and insurance (TPA) partners at Oracle Eye Hospital, Moradabad." };

export default function Cashless() {
  return (
    <>
      <PageHeader title="Cashless facility" intro="Cashless treatment is available with our insurance and TPA partners." crumbs={[{ label: "Cashless Facility" }]} />
      <Prose>
        <h2>Partner list</h2>
        <ul className="list-disc space-y-2 pl-5">{TPA_LIST.map((t) => <li key={t}>{t}</li>)}</ul>
        <h2>Before you come</h2>
        <p>Carry your insurance card, a valid photo ID and previous reports. For pre-authorisation help, call {SITE.helpline}.</p>
      </Prose>
    </>
  );
}
