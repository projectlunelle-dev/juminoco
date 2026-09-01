import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-chrome";
import { SITE } from "@/data/content";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SiteShell>
      <main>
        <PageIntro
          kicker="a note from the desk"
          title="About Me"
          lead="More about my background, values, and daily inspirations — and the little camera that comes along."
        />
        <div className="bottom-grid" style={{ marginTop: 8 }}>
          <article className="prose-card">
            <p>
              I’m Jumin, a designer and creative storyteller {SITE.location.toLowerCase()}. I
              collect ordinary days: a tram in the hydrangeas, a bowl of clovers, the first
              ramune of summer. The work grows from that habit of looking twice.
            </p>
            <p>
              I spent years moving between brand systems and handmade pictures — packaging
              you can hold, paper you want to keep, identities that still feel like a person
              made them. I like low contrast, cream stock, and type that does not raise its
              voice.
            </p>
            <p>
              Currently: {SITE.currently}. If a project needs gentleness more than volume, we
              will probably get along.
            </p>
            <p>
              <Link to="/contact" className="quiet-link">
                write a little note →
              </Link>
            </p>
          </article>
          <div>
            <img
              src="/images/card-photographer.jpg"
              alt="Photographing by a window"
              style={{ width: "100%", borderRadius: 16, marginBottom: 14 }}
            />
            <img
              src="/images/desk.jpg"
              alt="A wooden desk with a camera and clovers"
              style={{ width: "100%", borderRadius: 16 }}
            />
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
