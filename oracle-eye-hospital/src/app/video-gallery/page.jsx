import { PageHeader, EmptyState } from "@/components/ui";
import { VIDEOS } from "@/lib/content";

export const metadata = { title: "Video Gallery" };

export default function VideoGallery() {
  return (
    <>
      <PageHeader title="Video gallery" crumbs={[{ label: "Latest Updates" }, { label: "Video Gallery" }]} />
      <div className="container-x py-12">
        {VIDEOS.length === 0 ? (
          <EmptyState>Videos will be added here. Add YouTube IDs in src/lib/content.js.</EmptyState>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {VIDEOS.map((v) => (
              <figure key={v.id}>
                <iframe
                  className="aspect-video w-full rounded-xl"
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allowFullScreen
                />
                <figcaption className="mt-2 text-sm">{v.title}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
