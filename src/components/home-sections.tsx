import { Link } from "@tanstack/react-router";
import { FILM_FRAMES, HOME_CARDS, JOURNAL, SITE } from "@/data/content";
import {
  AppleIcon,
  CameraMark,
  CatMark,
  CloverIcon,
  HeartIcon,
  IgMark,
  PaletteMark,
} from "@/components/marks";

const FILM_SLOTS = [
  { left: "2.05%", width: "15.15%", top: "20.4%", height: "47.2%" },
  { left: "18.95%", width: "14.52%", top: "20.4%", height: "47.2%" },
  { left: "35.22%", width: "14.52%", top: "20.4%", height: "47.2%" },
  { left: "51.42%", width: "14.18%", top: "20.4%", height: "47.2%" },
  { left: "67.35%", width: "14.38%", top: "20.4%", height: "47.2%" },
  { left: "83.42%", width: "14.58%", top: "20.4%", height: "47.2%" },
];

const CARD_ICON = {
  camera: CameraMark,
  palette: PaletteMark,
  clover: CloverIcon,
  cat: CatMark,
};

export function IntroCard() {
  return (
    <aside className="intro-card">
      <CloverIcon className="intro-clover a" />
      <CloverIcon className="intro-clover b" />
      <img src="/stickers/apple-intro.png" alt="" className="intro-apple no-outline" />
      <div className="date-chip">
        <span>date</span>
        <strong>05 / 24 / 25</strong>
      </div>
      <h1 className="intro-hello">{SITE.greeting}</h1>
      <p className="intro-bio">{SITE.bio}</p>
      <div className="currently">
        <small>currently:</small>
        <span>
          {SITE.currently}
          <HeartIcon />
        </span>
      </div>
      <img src="/stickers/gummy-bear.png" alt="" className="intro-bear no-outline" />
    </aside>
  );
}

export function FilmStrip({
  onOpen,
}: {
  onOpen: (src: string, alt: string) => void;
}) {
  return (
    <section className="film-wrap" aria-label="Film roll">
      <img src="/stickers/take-slow.png" alt="" className="take-slow no-outline" />
      <img src="/stickers/star-left.png" alt="" className="film-star left no-outline" />
      <img src="/stickers/star-right.png" alt="" className="film-star right no-outline" />
      <div className="film">
        {FILM_FRAMES.map((frame, i) => (
          <button
            key={frame.label}
            type="button"
            className="film-frame"
            style={FILM_SLOTS[i]}
            onClick={() => onOpen(frame.src, frame.alt)}
          >
            <img src={frame.src} alt={frame.alt} />
          </button>
        ))}
        <img src="/images/film-strip.png" alt="" className="film-plate no-outline" />
      </div>
    </section>
  );
}

export function NavCards() {
  return (
    <section className="cards-grid" aria-label="Sections">
      {HOME_CARDS.map((card) => {
        const Icon = CARD_ICON[card.icon];
        return (
          <Link key={card.key} to={card.to} className="nav-card" data-tone={card.key}>
            {card.key === "projects" ? (
              <img src="/stickers/washi.png" alt="" className="washi no-outline" />
            ) : null}
            <span className="card-icon">
              <Icon />
            </span>
            <h2>{card.title}</h2>
            <p>{card.body}</p>
            {card.key === "projects" ? (
              <AppleIcon className="card-apple" />
            ) : null}
            <span className="pill">
              {card.cta} <span aria-hidden>→</span>
            </span>
            <img className="card-photo" src={card.image} alt={card.imageAlt} />
            {card.key === "creative" ? (
              <img src="/stickers/binoculars.png" alt="" className="card-sticker binocs no-outline" />
            ) : null}
            {card.key === "brand" ? (
              <img src="/stickers/green-bottle.png" alt="" className="card-sticker bottle no-outline" />
            ) : null}
            {card.key === "about" ? (
              <img src="/stickers/cat.png" alt="" className="card-sticker kitty no-outline" />
            ) : null}
          </Link>
        );
      })}
    </section>
  );
}

export function JournalAndContact() {
  const posts = JOURNAL.slice(0, 3);
  return (
    <section className="bottom-grid">
      <div className="journal-panel">
        <div className="journal-head">
          <h2>
            <CloverIcon />
            From the Journal
          </h2>
          <Link to="/journal" className="quiet-link">
            view all posts →
          </Link>
        </div>
        <div className="journal-grid">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              to="/journal/$slug"
              params={{ slug: post.slug }}
              className="polaroid"
              data-tilt={i}
            >
              <img src={post.image} alt="" />
              <time dateTime={post.date}>{post.date}</time>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className="clover-row" aria-hidden>
                <CloverIcon />
                <CloverIcon />
                <CloverIcon />
                <CloverIcon />
              </span>
            </Link>
          ))}
        </div>
        <img src="/stickers/forest-spirit.png" alt="" className="spirit no-outline" />
      </div>

      <aside className="contact-panel">
        <CameraMark className="contact-cam" />
        <h2>Let’s create together!</h2>
        <p className="lead">I’m always open to meaningful collaborations and new stories.</p>
        <ul className="contact-list">
          <li>
            <a href={`mailto:${SITE.email}`}>
              <span className="contact-ico" aria-hidden>
                ✉
              </span>
              {SITE.email}
            </a>
          </li>
          <li>
            <a href={SITE.instagramUrl} rel="noreferrer" target="_blank">
              <IgMark />
              {SITE.instagram}
            </a>
          </li>
          <li>
            <span className="contact-ico" aria-hidden>
              ⌖
            </span>
            {SITE.location}
          </li>
        </ul>
        <Link to="/contact" className="hello-btn">
          say hello <span aria-hidden>→</span>
        </Link>
        <img src="/stickers/bunny-keychain.png" alt="" className="bunny-charm no-outline" />
        <CloverIcon className="contact-clover" />
      </aside>
    </section>
  );
}
