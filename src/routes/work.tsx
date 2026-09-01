import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-chrome";
import { PROJECTS } from "@/data/content";

export const Route = createFileRoute("/work")({ component: WorkPage });

function WorkPage() {
  return (
    <SiteShell>
      <main>
        <PageIntro
          kicker="selected work"
          title="Projects"
          lead="Branding, visuals, and design work made with intention and care — quiet systems for everyday things."
        />
        <div className="project-grid">
          {PROJECTS.map((project) => (
            <Link
              key={project.slug}
              to="/work/$slug"
              params={{ slug: project.slug }}
              className="project-tile"
            >
              <img src={project.image} alt="" />
              <div className="meta">
                <p className="page-kicker" style={{ margin: 0 }}>
                  {project.year}
                </p>
                <h2 className="text-xl font-semibold m-0">{project.title}</h2>
                <p className="text-ink-soft italic text-sm mt-1 mb-0">{project.summary}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
