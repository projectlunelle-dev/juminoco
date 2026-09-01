import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { FILM_FRAMES } from "@/data/content";
import { Lightbox } from "@/components/site-chrome";
import "@/styles-v2.css";

const FILM_SLOTS = [
  { left: "2.05%", width: "15.15%", top: "37.17%", height: "7.05%" },
  { left: "18.95%", width: "14.52%", top: "37.17%", height: "7.05%" },
  { left: "35.22%", width: "14.52%", top: "37.17%", height: "7.05%" },
  { left: "51.42%", width: "14.18%", top: "37.17%", height: "7.05%" },
  { left: "67.35%", width: "14.38%", top: "37.17%", height: "7.05%" },
  { left: "83.42%", width: "14.58%", top: "37.17%", height: "7.05%" },
];

export function V2Home() {
  const [photo, setPhoto] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="v2">
      <div className="v2-stage">
        <img
          className="v2-plate"
          src="/images/page-plate.jpg"
          alt=""
          width={1500}
          height={1861}
        />

        <div className="v2-content-wrap">
          <img
            className="v2-content"
            src="/images/content-plate.png"
            alt="juminoco portfolio"
            width={1500}
            height={1765}
          />

          <Link
            to="/about"
            className="v2-hs"
            style={{ left: "1.5%", top: "1%", width: "27%", height: "34%" }}
            aria-label="About — Hi, I’m Jumin"
          />

          {FILM_FRAMES.map((frame, i) => (
            <button
              key={frame.label}
              type="button"
              className="v2-hs"
              style={FILM_SLOTS[i]}
              onClick={() => setPhoto({ src: frame.src, alt: frame.alt })}
              aria-label={frame.label}
            />
          ))}

          <Link
            to="/work"
            className="v2-hs"
            style={{ left: "3.2%", top: "48.2%", width: "22.2%", height: "27%" }}
            aria-label="Projects"
          />
          <Link
            to="/gallery"
            className="v2-hs"
            style={{ left: "27.8%", top: "48.2%", width: "22.2%", height: "27%" }}
            aria-label="Creative Work"
          />
          <Link
            to="/brand"
            className="v2-hs"
            style={{ left: "52.07%", top: "48.2%", width: "22.2%", height: "27%" }}
            aria-label="Brand Direction"
          />
          <Link
            to="/about"
            className="v2-hs"
            style={{ left: "76.27%", top: "48.2%", width: "22.4%", height: "27%" }}
            aria-label="About Me"
          />

          <Link
            to="/journal/little-green-things"
            className="v2-hs"
            style={{ left: "6%", top: "79.8%", width: "17.5%", height: "17%" }}
            aria-label="little green things"
          />
          <Link
            to="/journal/a-slow-walk-home"
            className="v2-hs"
            style={{ left: "24.5%", top: "79.8%", width: "17.5%", height: "17%" }}
            aria-label="a slow walk home"
          />
          <Link
            to="/journal/sketchbook-pages"
            className="v2-hs"
            style={{ left: "43%", top: "79.8%", width: "18%", height: "17%" }}
            aria-label="sketchbook pages"
          />
          <Link
            to="/contact"
            className="v2-hs"
            style={{ left: "64.5%", top: "76.8%", width: "33%", height: "21.5%" }}
            aria-label="Let’s create together"
          />
        </div>

        <button
          type="button"
          className="v2-cam"
          onClick={() =>
            setPhoto({
              src: "/images/lcd-train.jpg",
              alt: "A green coastal train passing hydrangeas",
            })
          }
          aria-label="Open the photograph on the camera screen"
        >
          <img
            src="/images/camera-original.png"
            alt="Silver compact camera showing a green train among hydrangeas"
            width={1130}
            height={474}
          />
        </button>

        <Link
          to="/"
          className="v2-hs"
          style={{ left: "2.5%", top: "0.4%", width: "16%", height: "3.2%" }}
          aria-label="juminoco home"
        />
        <Link
          to="/"
          className="v2-hs"
          style={{ left: "32.5%", top: "0.7%", width: "6.2%", height: "2.6%" }}
          aria-label="home"
        />
        <Link
          to="/work"
          className="v2-hs"
          style={{ left: "40.7%", top: "0.7%", width: "5%", height: "2.6%" }}
          aria-label="work"
        />
        <Link
          to="/about"
          className="v2-hs"
          style={{ left: "47.8%", top: "0.7%", width: "5.5%", height: "2.6%" }}
          aria-label="about"
        />
        <Link
          to="/journal"
          className="v2-hs"
          style={{ left: "55.5%", top: "0.7%", width: "6%", height: "2.6%" }}
          aria-label="journal"
        />
        <Link
          to="/contact"
          className="v2-hs"
          style={{ left: "63.8%", top: "0.7%", width: "6.5%", height: "2.6%" }}
          aria-label="contact"
        />
        <Link
          to="/journal"
          className="v2-hs"
          style={{ left: "84.4%", top: "0.55%", width: "3.6%", height: "2.8%" }}
          aria-label="Journal"
        />
        <Link
          to="/contact"
          className="v2-hs"
          style={{ left: "89.4%", top: "0.55%", width: "3.4%", height: "2.8%" }}
          aria-label="Contact"
        />
      </div>

      {photo ? (
        <Lightbox src={photo.src} alt={photo.alt} onClose={() => setPhoto(null)} />
      ) : null}
    </div>
  );
}
