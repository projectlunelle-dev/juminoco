import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-chrome";
import { getProject } from "@/data/content";

export const Route = createFileRoute("/work/$slug")({ component: ProjectPage });

function ProjectPage() {
  const { slug } = Route.useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <SiteShell>
        <main className="page-hero">
          <h1 className="page-title">That page wandered off.</h1>
          <Link to="/work" className="quiet-link">
            back to projects →
          </Link>
        </main>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <main>
        <p className="page-kicker" style={{ paddingTop: 28 }}>
          <Link to="/work" className="quiet-link">
            projects
          </Link>
          <span> / {project.year}</span>
        </p>
        <h1 className="page-title">{project.title}</h1>
        <p className="page-lead">{project.summary}</p>
        <div className="tags" style={{ marginTop: 12 }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-grid" style={{ marginTop: 22 }}>
          {project.gallery.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="w-full rounded-lg"
              style={{ borderRadius: 14, width: "100%", display: "block" }}
            />
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
