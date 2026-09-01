import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-chrome";
import { BRAND_CASES } from "@/data/content";

export const Route = createFileRoute("/brand")({ component: BrandPage });

function BrandPage() {
  return (
    <SiteShell>
      <main>
        <PageIntro
          kicker="voice, story, identity"
          title="Brand Direction"
          lead="Helping brands find their voice, story, and visual identity — systems that still feel handmade."
        />
        <div className="case-grid">
          {BRAND_CASES.map((item) => (
            <article key={item.slug} className="prose-card" style={{ padding: 0, overflow: "hidden" }}>
              <img
                src={item.image}
                alt=""
                style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", outline: "none" }}
              />
              <div style={{ padding: "18px 18px 20px" }}>
                <p className="page-kicker" style={{ margin: 0 }}>
                  {item.role}
                </p>
                <h2 className="text-xl font-semibold mt-1 mb-2">{item.title}</h2>
                <p>{item.story}</p>
                <ul style={{ margin: "8px 0 0", paddingLeft: 18, color: "var(--color-ink-soft)" }}>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
