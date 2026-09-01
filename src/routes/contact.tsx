import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { PageIntro, SiteShell } from "@/components/site-chrome";
import { IgMark } from "@/components/marks";
import { SITE } from "@/data/content";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <SiteShell>
      <main>
        <PageIntro
          kicker="a small letter"
          title="Let’s create together"
          lead="I’m always open to meaningful collaborations and new stories. Say hello — I read every note."
        />
        <div className="bottom-grid" style={{ marginTop: 8 }}>
          <section className="prose-card">
            {sent ? (
              <p style={{ fontFamily: "var(--font-hand)", fontSize: "1.6rem", margin: 0 }}>
                a little note is on its way. thank you for writing.
              </p>
            ) : (
              <form className="form-grid" onSubmit={onSubmit}>
                <label className="field">
                  name
                  <input name="name" type="text" required autoComplete="name" />
                </label>
                <label className="field">
                  email
                  <input name="email" type="email" required autoComplete="email" />
                </label>
                <label className="field">
                  a few words
                  <textarea name="message" required />
                </label>
                <button type="submit" className="hello-btn" style={{ width: "fit-content" }}>
                  say hello →
                </button>
              </form>
            )}
          </section>
          <aside className="contact-panel" style={{ minHeight: 280 }}>
            <ul className="contact-list">
              <li>
                <a href={`mailto:${SITE.email}`}>
                  <Mail size={15} strokeWidth={1.6} />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.instagramUrl} rel="noreferrer" target="_blank">
                  <IgMark style={{ width: 15, height: 15 }} />
                  {SITE.instagram}
                </a>
              </li>
              <li>
                <MapPin size={15} strokeWidth={1.6} />
                {SITE.location}
              </li>
            </ul>
            <p className="lead">{SITE.motto}</p>
            <img
              src="/stickers/bunny-keychain.png"
              alt=""
              className="bunny-charm no-outline"
            />
          </aside>
        </div>
      </main>
    </SiteShell>
  );
}
