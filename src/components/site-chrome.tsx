import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { NAV, SITE } from "@/data/content";
import { CameraMark, CloverIcon, StrawberryIcon } from "@/components/marks";

function pathActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-root">
      <CloverIcon className="float-clover c1" />
      <CloverIcon className="float-clover c2" />
      <CloverIcon className="float-clover c3" />
      <CloverIcon className="float-clover c4" />
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <div className="sheet" id="content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="juminoco home">
          <CloverIcon className="brand-mark" />
          <span>
            <span className="brand-name">{SITE.name}</span>
            <span className="brand-tag">{SITE.tagline}</span>
          </span>
        </Link>

        <nav className="nav-desk" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={pathActive(pathname, item.to) ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-tools">
          <Link to="/journal" className="icon-btn desk-only" aria-label="Journal">
            <CameraMark />
          </Link>
          <Link to="/contact" className="icon-btn desk-only" aria-label="Contact">
            <span className="mail-mark" aria-hidden>
              ✉
            </span>
          </Link>
          <CloverIcon className="header-clover desk-only" />
          <button
            type="button"
            className="icon-btn menu-toggle"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      <nav className="mobile-panel" data-open={open ? "true" : "false"} aria-label="Mobile">
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={pathActive(pathname, item.to) ? "is-active" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>{SITE.copyright}</span>
        <span className="footer-mid">
          <CameraMark />
          <em>{SITE.motto}</em>
        </span>
        <span className="footer-berries" aria-hidden>
          <StrawberryIcon />
          <StrawberryIcon />
        </span>
      </div>
    </footer>
  );
}

export function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <button type="button" className="lightbox" onClick={onClose} aria-label="Close photograph">
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </button>
  );
}

export function PageIntro({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead: string;
}) {
  return (
    <header className="page-hero">
      <p className="page-kicker">{kicker}</p>
      <h1 className="page-title">{title}</h1>
      <p className="page-lead">{lead}</p>
    </header>
  );
}
