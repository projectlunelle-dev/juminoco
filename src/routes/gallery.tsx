import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Lightbox, PageIntro, SiteShell } from "@/components/site-chrome";
import { GALLERY } from "@/data/content";

export const Route = createFileRoute("/gallery")({ component: GalleryPage });

function GalleryPage() {
  const [photo, setPhoto] = useState<{ src: string; alt: string } | null>(null);

  return (
    <SiteShell>
      <main>
        <PageIntro
          kicker="studio table"
          title="Creative Work"
          lead="Illustration, collage, print, and playful experiments — pages and pictures that like to sit in a pile."
        />
        <div className="gallery-grid">
          {GALLERY.map((item) => (
            <button
              key={item.src + item.caption}
              type="button"
              className="gallery-item"
              onClick={() => setPhoto({ src: item.src, alt: item.caption })}
            >
              <figure>
                <img src={item.src} alt={item.caption} />
                <figcaption>
                  {item.caption}
                  <span style={{ color: "var(--color-muted)" }}> · {item.kind}</span>
                </figcaption>
              </figure>
            </button>
          ))}
        </div>
      </main>
      {photo ? (
        <Lightbox src={photo.src} alt={photo.alt} onClose={() => setPhoto(null)} />
      ) : null}
    </SiteShell>
  );
}
