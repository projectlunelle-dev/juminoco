import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

export function CloverIcon({ className, title, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <circle cx="16" cy="8.2" r="6.2" />
      <circle cx="8.2" cy="16" r="6.2" />
      <circle cx="23.8" cy="16" r="6.2" />
      <circle cx="16" cy="23.8" r="6.2" />
      <path
        d="M16 22c1.2 3.4 2.6 7.2 1.2 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AppleIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden {...props}>
      <ellipse cx="32" cy="38" rx="18" ry="20" fill="#c96b62" />
      <ellipse cx="24" cy="30" rx="6" ry="8" fill="#e08a82" opacity="0.55" />
      <rect x="30" y="12" width="3.2" height="10" rx="1.4" fill="#6a5a3a" />
      <path d="M34 14c6-1 10 4 9 9" fill="none" stroke="#7d9a68" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function StarIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M12 2.4l2.4 6.6H21l-5.3 4.1 2 6.7L12 15.8 6.3 19.8l2-6.7L3 9h6.6z"
      />
    </svg>
  );
}

export function StrawberryIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M16 8c5 0 10 5 10 12 0 6-4.4 10-10 10S6 26 6 20C6 13 11 8 16 8z"
      />
      <path d="M10 8c2 2 4 3 6 3s4-1 6-3" fill="#7d9a68" />
      <circle cx="12" cy="18" r="1" fill="#f6e7c8" />
      <circle cx="18" cy="16" r="1" fill="#f6e7c8" />
      <circle cx="16" cy="22" r="1" fill="#f6e7c8" />
      <circle cx="21" cy="21" r="1" fill="#f6e7c8" />
    </svg>
  );
}

export function HeartIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M12 20s-7.2-4.4-9.3-8.6C1 8.2 2.6 5 6 5c1.9 0 3.4 1.1 4 2.6C10.6 6.1 12.1 5 14 5c3.4 0 5 3.2 3.3 6.4C19.2 15.6 12 20 12 20z"
      />
    </svg>
  );
}

export function PaletteMark({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden {...props}>
      <path d="M12 3a9 9 0 1 0 0 18h.8a2.2 2.2 0 0 0 2-3.1 2.2 2.2 0 0 1 2-3.2H18a9 9 0 0 0-6-11.7z" />
      <circle cx="8" cy="10" r="1" fill="currentColor" />
      <circle cx="12" cy="7.5" r="1" fill="currentColor" />
      <circle cx="16" cy="10" r="1" fill="currentColor" />
      <circle cx="9.5" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}

export function CatMark({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden {...props}>
      <path d="M5 10l2-5 4 3 4-3 2 5" />
      <circle cx="12" cy="13" r="6" />
      <circle cx="10" cy="13" r="0.7" fill="currentColor" />
      <circle cx="14" cy="13" r="0.7" fill="currentColor" />
      <path d="M10.5 16c.5.4 1.5.6 1.5.6s1-.2 1.5-.6" />
    </svg>
  );
}

export function CameraMark({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden {...props}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  );
}

export function IgMark({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function FilmGlyph({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={cn("w-3.5 h-3.5", className)} aria-hidden {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4" />
    </svg>
  );
}

export function FlashGlyph({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden {...props}>
      <path fill="currentColor" d="M13 2L4 14h7l-1 8 10-14h-7l0-6z" />
    </svg>
  );
}
