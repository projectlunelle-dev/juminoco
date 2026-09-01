import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-chrome";
import { getJournal, JOURNAL } from "@/data/content";

export const Route = createFileRoute("/journal/$slug")({ component: JournalPost });

function JournalPost() {
  const { slug } = Route.useParams();
  const post = getJournal(slug);

  if (!post) {
    return (
      <SiteShell>
        <main className="page-hero">
          <h1 className="page-title">This note is missing.</h1>
          <Link to="/journal" className="quiet-link">
            back to the journal →
          </Link>
        </main>
      </SiteShell>
    );
  }

  const more = JOURNAL.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <SiteShell>
      <main>
        <p className="page-kicker" style={{ paddingTop: 28 }}>
          <Link to="/journal" className="quiet-link">
            journal
          </Link>
          <span> / {post.date}</span>
        </p>
        <h1 className="page-title">{post.title}</h1>
        <p className="page-lead">{post.excerpt}</p>
        <img
          src={post.image}
          alt=""
          style={{
            width: "100%",
            maxHeight: 460,
            objectFit: "cover",
            borderRadius: 16,
            margin: "18px 0 22px",
            outline: "none",
          }}
        />
        <article className="prose-card" style={{ maxWidth: 680 }}>
          {post.body.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </article>
        <h2 className="text-lg font-semibold mt-10 mb-4">more notes</h2>
        <div className="journal-grid">
          {more.map((item) => (
            <Link
              key={item.slug}
              to="/journal/$slug"
              params={{ slug: item.slug }}
              className="polaroid"
            >
              <img src={item.image} alt="" />
              <time dateTime={item.date}>{item.date}</time>
              <h3>{item.title}</h3>
            </Link>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
