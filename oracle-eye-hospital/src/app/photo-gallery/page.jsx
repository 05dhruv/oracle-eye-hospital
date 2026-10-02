import { PageHeader } from "@/components/ui";
import { GALLERY } from "@/lib/content";

export const metadata = { title: "Photo Gallery" };

export default function PhotoGallery() {
  return (
    <>
      <PageHeader title="Photo gallery" crumbs={[{ label: "Latest Updates" }, { label: "Photo Gallery" }]} />
      <div className="container-x grid grid-cols-2 gap-4 py-12 md:grid-cols-3">
        {GALLERY.map((g, i) => (
          <figure key={i} className="overflow-hidden rounded-xl">
            {g.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={g.src} alt={g.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-iris-light to-mist text-sm text-iris-dark">Photo coming soon</div>
            )}
            <figcaption className="mt-2 text-sm text-ink/70">{g.title}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
