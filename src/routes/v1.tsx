import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CameraHero } from "@/components/camera-hero";
import { FilmStrip, IntroCard, JournalAndContact, NavCards } from "@/components/home-sections";
import { Lightbox, SiteShell } from "@/components/site-chrome";

export const Route = createFileRoute("/v1")({ component: V1Home });

function V1Home() {
  const [photo, setPhoto] = useState<{ src: string; alt: string } | null>(null);

  return (
    <SiteShell>
      <main>
        <div className="hero">
          <IntroCard />
          <CameraHero onOpen={(src, alt) => setPhoto({ src, alt })} />
        </div>
        <FilmStrip onOpen={(src, alt) => setPhoto({ src, alt })} />
        <NavCards />
        <JournalAndContact />
      </main>
      {photo ? (
        <Lightbox src={photo.src} alt={photo.alt} onClose={() => setPhoto(null)} />
      ) : null}
    </SiteShell>
  );
}
