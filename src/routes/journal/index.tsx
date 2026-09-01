import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-chrome";
import { JOURNAL } from "@/data/content";

export const Route = createFileRoute("/journal/")({ component: JournalIndex });

function JournalIndex() {
  return (
    <SiteShell>
      <main>
        <PageIntro
          kicker="field notes"
          title="Journal"
          lead="Small walks, sketchbook corners, and the photographs that happen on the way home."
        />
        <div className="project-grid">
          {JOURNAL.map((post) => (
            <Link
              key={post.slug}
              to="/journal/$slug"
              params={{ slug: post.slug }}
              className="polaroid"
              style={{ padding: 10 }}
            >
              <img src={post.image} alt="" />
              <time dateTime={post.date}>{post.date}</time>
              <h2 style={{ fontSize: "1.15rem", margin: "2px 0 6px" }}>{post.title}</h2>
              <p>{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
